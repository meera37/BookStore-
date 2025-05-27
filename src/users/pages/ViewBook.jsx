import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { makePaymentApi, viewABookApi } from '../../services/allApi'
import { serverUrl } from '../../services/serverUrl'
import { loadStripe } from '@stripe/stripe-js';
import { toast, ToastContainer } from 'react-toastify'


function ViewBook() {

  const [bookphoto, setBookPhoto] = useState(false)
  const [viewBookDetails, setViewBookDetails] = useState({})
  const [token, settoken] = useState("")

  const { id } = useParams()
  //console.log(id);


  const viewABook = async (id) => {
    const result = await viewABookApi(id)
    //console.log(result);
    if (result.status == 200) {
      setViewBookDetails(result.data)
    }
  }
  console.log(viewBookDetails);

  //function to make payment
  const makePayment = async () => {
    console.log(viewBookDetails);
    //object instance
    const stripe = await loadStripe('pk_test_51RT3LwQSAWDde2LyYE8kIRFvchibSWYPSJUKTYkxCFuk4556h9W3XQeAtGJB9Idmotj93I3rQlIjUajCpyjXbJJ100V9IizxTD');
    //data to update in backend
    const reqBody = {
      booksDetails: viewBookDetails
    }
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    const result = await makePaymentApi(reqBody, reqHeader)
    console.log(result);
    //console.log(result.data.existingBook);
    
    const sessionId = result.data.sessionId

    const response = stripe.redirectToCheckout({
      sessionId:sessionId
    })
    if(response.error){
      toast.error('Something went wrong')
    }

  }

  useEffect(() => {
    viewABook(id)
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      settoken(token)
    }
  }, [])

  return (
    <>
      <Header />
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 p-6">
          <div className="grid md:grid-cols-4 gap-8 space-y-6 md:space-y-0">

            <div className="flex justify-center rounded-md shadow-md md:col-span-1">
              <img
                src={viewBookDetails.imageurl}
                alt="no image"
                className="w-full max-w-md md:max-w-full rounded-md"
              />
            </div>


            <div className="md:col-span-3 relative space-y-4">

              <div className="absolute top-0 right-0 p-2 text-gray-600 z-10">
                <FontAwesomeIcon icon={faEye} onClick={() => setBookPhoto(true)} />
              </div>


              <div className="mt-6 md:mt-0">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {viewBookDetails?.title}
                </h2>
                <p className="text-md text-blue-600">
                  {viewBookDetails?.author}
                </p>
              </div>


              <div className="text-sm text-gray-700 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-2">
                <p><span className="font-semibold">Publisher:</span> {viewBookDetails?.publisher}</p>
                <p><span className="font-semibold">Language:</span> {viewBookDetails?.language}</p>
                <p><span className="font-semibold">Real Price:</span> ${viewBookDetails?.price}</p>
                <p><span className="font-semibold">Seller Mail:</span> {viewBookDetails?.userMail}</p>
                <p><span className="font-semibold">No. of Pages:</span> {viewBookDetails?.noofpages}</p>
                <p><span className="font-semibold">ISBN:</span> {viewBookDetails?.isbn}</p>
              </div>


              <div>
                <p className="text-sm text-gray-700">
                  {viewBookDetails?.abstract}
                </p>
              </div>


              <div className="flex justify-center md:justify-end gap-4 mt-4">
                <Link to={'/all-Books'}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
                    <FontAwesomeIcon icon={faBackward} className="mr-2" />
                    Back
                  </button>
                </Link>
                <button type='button' onClick={makePayment} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Buy ${viewBookDetails?.dprice}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* modal    */}
      {bookphoto && (
        <div className="fixed top-10 left-0 w-full  flex items-center justify-center ">
          <div className="bg-white w-110 rounded shadow-lg relative">
            <div className="flex justify-between px-4 py-5 bg-gray-900 text-white rounded">
              <h1>Book Photo</h1>
              <button onClick={() => setBookPhoto(false)} className="text-gray-900 bg-white px-3 rounded">X</button>
            </div>
            <div className="py-5 px-8">
              <div className="text-blue-500 flex gap-4 items-start justify-center mb-4">
                <FontAwesomeIcon icon={faCamera} />
                <p>Camera click of the book in the hand of seller</p>
              </div>
              <div className='w-65 mx-auto p-8'>
                {viewBookDetails?.uploadedImg.map((item) => (
                  <img
                    src={`${serverUrl}/upload/${item}`}
                    alt="Book"
                    className="w-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

<ToastContainer theme='colored' position='top-center' autoClose={2000}/>
      <Footer />


    </>
  )
}

export default ViewBook