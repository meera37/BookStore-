import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import { addApplicationApi, getAllJobsApi } from '../../services/allApi'
import { toast, ToastContainer } from 'react-toastify'

function Careers() {

  const [modalstatus, setModalStatus] = useState(false)
  const [allJobs, setallJobs] = useState("")
  const [searchkey, setsearchkey] = useState("")
  const [applicantDetails, setApplicantDetails] = useState({
    fullname: "",
    email: "",
    phone: "",
    qualification: "",
    coverletter: "",
    resume: ""
  })

  console.log(applicantDetails);

  const [jobtitle, setJobTitle] = useState("")
  const [token,settoken]= useState("")

  //open modal
  const openModal = (jobtitle) => {
    
    //console.log(jobtitle);
    setModalStatus(true)
    setJobTitle(jobtitle)

  }

  //function to add application
  const handleSubmit = async () => {
    // console.log(jobtitle);
    const { fullname, email, phone, qualification, coverletter, resume } = applicantDetails

    if (!fullname || !email || !phone || !qualification || !coverletter || !resume) {
      toast.info('Please fill complete details')

    } else {
      const reqBody = new FormData()

      for (let key in applicantDetails) {
        reqBody.append(key, applicantDetails[key])
      }
      reqBody.append("jobtitle",jobtitle)

      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      const result = await addApplicationApi(reqBody, reqHeader)
      console.log(result);
      if(result.status == 200){
        toast.success('Application Submitted Successfully')
        setModalStatus(false)
        handleReset()
      }
      else if(result.status == 400){
        toast.warning(result.response.data)
        handleReset()
      }
      else{
        toast.error('something went wrong')
        setModalStatus(false)
        handleReset()
      }

    }

  }

  //function to get all jobs
  const getAllJobs = async (searchkey) => {
    const result = await getAllJobsApi(searchkey)
    //console.log(result);
    if (result.status == 200) {
      setallJobs(result.data)
    }
  }

  //function to reset the form value
  const handleReset = () => {
    setApplicantDetails({
      fullname: "",
      email: "",
      phone: "",
      qualification: "",
      coverletter: "",
      resume: ""
    })
    //modern browsers wont allow you to set value directly to a input tag with file type (empty value (""))
    document.getElementById('fileInput').value = ""
  }

  useEffect(() => {
    getAllJobs(searchkey)
    if(sessionStorage.getItem("token")){
      settoken(sessionStorage.getItem("token"))
    }
  }, [searchkey])


  return (
    <>
      <Header />

      <div className='flex justify-center items-center flex-col md:px-40 px-10'>
        <h1 className='my-5 text-3xl font-medium'>Careers</h1>
        <p className='md:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci mollitia nemo doloribus ex, aliquam voluptates esse iure quis, nobis nam tempora. Quos, neque consequatur tenetur consectetur esse sunt molestias. Dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae facilis porro.</p>
      </div>
      <div className='md:p-20 p-5'>
        <h1 className='text-2xl'>Current Openings</h1>

        <div className='flex my-8 w-full  justify-center items-center'>
          <input type="text" value={searchkey} onChange={(e) => setsearchkey(e.target.value)} placeholder='Job Title' className='px-4 py-2 border border-gray-400 placeholder-gray-400 md:w-1/4 w-1/2 shadow' />
          <button className='bg-green-700 text-white px-4 py-2 shadow hover:border hover:border-green-700 hover:text-green-700 hover:bg-white'>Search</button>
        </div>

        <div className='md:px-20 py-5'>
          {
            allJobs?.length > 0 ?
              allJobs?.map((item, index) => (
                <div className='shadow border border-gray-200' key={index}>
                  <div className="md:grid grid-cols-[8fr_1fr] p-5">
                    <div>
                      <h1 className='mb-3'>{item?.title}</h1>
                      <hr />
                      <p className='mt-3'><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />{item?.location}</p>
                      <p className='mt-3'>  Job Type: {item?.jType}</p>
                      <p className='mt-3'>  Salary:{item?.salary}</p>
                      <p className='mt-3'>  Qualification:{item?.qualification}</p>
                      <p className='mt-3'>  Experience:{item?.experience}</p>
                      <p className='text-justify mt-3'>Description:{item?.description} </p>
                    </div>
                    <div className='flex md:justify-center items-start justify-end'>
                      <button onClick={() => openModal(item?.title)} className='bg-blue-800 text-white p-3 mt-5 md:mt-0 rounded ms-1 hover:bg-white hover:border hover:border-blue-800 hover:text-blue-800'>Apply<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-1' /></button>
                    </div>
                  </div>

                </div>
              )) :
              <p>No current openings</p>
          }
        </div>

      </div>


      {modalstatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

              {/* title */}

              <div className="bg-gray-900 p-4 flex sm:px-6 justify-between">
                <h1 className='text-white text-2xl'>Application Form</h1>
                <FontAwesomeIcon onClick={() => setModalStatus(false)} icon={faXmark} className='text-white fa-2x' />
              </div>

              {/* body modal */}

              <div className="bg-white px-4 pt-3 pb-4 sm:p-6 sm:pb-4">
                <div className="grid grid-cols-2">
                  <div className='p-3'>
                    <div className="mb-3">
                      <input type="text" value={applicantDetails.fullname} onChange={(e) => setApplicantDetails({ ...applicantDetails, fullname: e.target.value })} placeholder='Full Name' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                    </div>
                    <div className="mb-3">
                      <input type="text" value={applicantDetails.email} onChange={(e) => setApplicantDetails({ ...applicantDetails, email: e.target.value })} placeholder='Email Id' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                    </div>
                  </div>

                  <div className='p-3'>
                    <div className="mb-3">
                      <input type="text" value={applicantDetails.qualification} onChange={(e) => setApplicantDetails({ ...applicantDetails, qualification: e.target.value })} placeholder='Qualification' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                    </div>
                    <div className="mb-3">
                      <input type="text" value={applicantDetails.phone} onChange={(e) => setApplicantDetails({ ...applicantDetails, phone: e.target.value })} placeholder='Phone' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                    </div>

                  </div>
                </div>

                <div className="mb-3 px-3 w-full">
                  <textarea placeholder='Cover Letter' value={applicantDetails.coverletter} onChange={(e) => setApplicantDetails({ ...applicantDetails, coverletter: e.target.value })} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full'></textarea>
                </div>

                <div className="mb-3 px-3 w-full">
                  <p className='text-gray-400'>Resume</p>
                  <input type="file" id='fileInput' onChange={(e) => setApplicantDetails({ ...applicantDetails, resume: e.target.files[0] })} className='border border-gray-400 rounded placeholder-gray-500 w-full file:bg-gray-400 file:p-2 file:text-white' />
                </div>
              </div>

              {/* footer of modal */}
              <div className="bg-gray-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button onClick={handleSubmit} type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-white sm:ml-3 sm:w-auto hover:text-black hover:border hover:border-gray-500">Submit</button>
                <button onClick={handleReset} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-white sm:mt-0 sm:w-auto hover:text-black">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>}

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
      <Footer />
    </>
  )
}

export default Careers