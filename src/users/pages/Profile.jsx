import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import EditProfile from '../components/EditProfile'
import { toast, ToastContainer } from 'react-toastify'
import { uploadBookApi } from '../../services/allApi'

function Profile() {

    const [sellstatus, setsellstatus] = useState(true)
    const [bookstatus, setbookstatus] = useState(false)
    const [purchaseStatus, setpurchaseStatus] = useState(false)
    const [bookDetails, setBookDetails] = useState({
        title: "", author: "", noofpages: "", imageurl: "", price: "", dprice: "", abstract: "", publisher: "", language: "", isbn: "", category: "",
        uploadedImages: []

    })
    const [preview, setpreview] = useState("")
    const [previewList, setpreviewList] = useState([])
    const [token, setToken] = useState("")

    console.log(bookDetails);

    const handleUpload = (e) => {
        console.log(e.target.files[0]);

        const fileArray = bookDetails.uploadedImages
        fileArray.push(e.target.files[0])
        setBookDetails({ ...bookDetails, uploadedImages: fileArray })

        const url = URL.createObjectURL(e.target.files[0])  //to convert file object into url
        console.log(url);

        setpreview(url)

        const newArray = previewList
        newArray.push(url)
        setpreviewList(newArray)
    }

    const handleReset = () => {
        setBookDetails({
            title: "", author: "", noofpages: "", imageurl: "", price: "", dprice: "", abstract: "", publisher: "", language: "", isbn: "", category: "",
            uploadedImages: []
        })
        setpreview("")
        setpreviewList([])
    }

    const handleSubmit = async () => {
        const { title, author, noofpages, imageurl, price, dprice, abstract, publisher, language, isbn, category, uploadedImages } = bookDetails

        if (!title || !author || !noofpages, !imageurl || !price || !dprice || !abstract || !publisher || !language || !isbn || !category || uploadedImages.length == 0) {
            toast.info('Please fill fields completely')
        }
        else {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }

            const reqBody = new FormData()

            for (let key in bookDetails) {             //or can append each item individually
                if (key != 'uploadedImages') {
                    reqBody.append(key, bookDetails[key])
                }
                else {
                    bookDetails.uploadedImages.forEach((item) => {
                        reqBody.append("uploadedImages", item)
                    })
                }
            }

            const result = await uploadBookApi(reqBody, reqHeader)
            console.log(result);

            if(result.status ==401){
                toast.warning(result.response.data)
                handleReset()
            }
            else if(result.status ==200){
                toast.success('Book Added Successfully')
                handleReset()
            }
            else{
                toast.error('Something went wrong')
                handleReset()
            }
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [])

    return (
        <>
            <Header />

            <div className='bg-gray-900' style={{ height: '200px' }}></div>
            <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px', }} className='bg-white p-3'>
                <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png" alt="no image" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />

            </div>

            <div className='md:flex justify-between px-20 mt-5'>
                <p className='flex justify-center items-center'>
                    <span className='md:text-3xl text-2xl'>Meera Benny</span>
                    <FontAwesomeIcon icon={faCircleCheck} className='text-blue-400 ms-3' /> </p>

                <EditProfile />
            </div>

            <p className='md:px-20 px-5 my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at qui repudiandae, laudantium tenetur hic inventore odio cum labore soluta! Cupiditate rem pariatur nihil sed voluptate, quis temporibus cumque vel!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aperiam molestiae doloribus optio ipsam voluptates autem sint error placeat alias. Voluptates delectus expedita sunt tempora. Porro magnam maxime temporibus expedita.</p>

            <div className='md:px-40 '>
                {/* tab */}
                <div className='flex justify-center items-center my-5'>
                    <p onClick={() => { setsellstatus(true); setbookstatus(false); setpurchaseStatus(false) }} className={sellstatus ? 'p-4 text-blue-600 border-t border-l border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Sell Book</p>

                    <p onClick={() => { setsellstatus(false); setbookstatus(true); setpurchaseStatus(false) }} className={bookstatus ? 'p-4 text-blue-600 border-t border-l border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Book Status</p>

                    <p onClick={() => { setsellstatus(false); setbookstatus(false); setpurchaseStatus(true) }} className={purchaseStatus ? 'p-4 text-blue-600 border-t border-l border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Purchase History</p>
                </div>

                {/* content */}
                {sellstatus && <div>

                    <div className='bg-gray-200 p-5 my-20'>
                        <h1 className='text-3xl text-center p-4 font-medium'>Book Details</h1>
                        <div className='md:grid grid-cols-2 mt-10 w-full'>
                            <div className='px-3'>

                                <div className="mb-3">
                                    <input type="text" value={bookDetails.title} placeholder='Title' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full '
                                        onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={bookDetails.author} placeholder='Author' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full'
                                        onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={bookDetails.noofpages} placeholder='No. of pages' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full'
                                        onChange={(e) => setBookDetails({ ...bookDetails, noofpages: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={bookDetails.imageurl} placeholder='Image Url' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full'
                                        onChange={(e) => setBookDetails({ ...bookDetails, imageurl: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={bookDetails.price} placeholder='Price' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full'
                                        onChange={(e) => setBookDetails({ ...bookDetails, price: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={bookDetails.dprice} placeholder='Discount Price' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full'
                                        onChange={(e) => setBookDetails({ ...bookDetails, dprice: e.target.value })} />
                                </div>
                                {/* <div className="mb-3">
                                    <input type="text" value={bookDetails.imageurl} placeholder='Image Url' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full'
                                        onChange={(e) => setBookDetails({ ...bookDetails, imageurl: e.target.value })} />
                                </div> */}
                                <div className="mb-3">
                                    <textarea rows={5} value={bookDetails.abstract} placeholder='Abstract' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full'
                                        onChange={(e) => setBookDetails({ ...bookDetails, abstract: e.target.value })}></textarea>
                                </div>



                            </div>
                            <div className='px-3'>
                                <div className="mb-3">
                                    <input type="text" value={bookDetails.publisher} placeholder='Publisher' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full'
                                        onChange={(e) => setBookDetails({ ...bookDetails, publisher: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={bookDetails.language} placeholder='Language' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full'
                                        onChange={(e) => setBookDetails({ ...bookDetails, language: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={bookDetails.isbn} placeholder='ISBN' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full'
                                        onChange={(e) => setBookDetails({ ...bookDetails, isbn: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={bookDetails.category} placeholder='Category' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full'
                                        onChange={(e) => setBookDetails({ ...bookDetails, category: e.target.value })} />
                                </div>

                                <div className="mb-3 flex justify-center items-center w-full mt-10">
                                    {!preview ? <label htmlFor="imagefile">
                                        <input id='imagefile' type="file" style={{ display: 'none' }} onChange={(e) => handleUpload(e)} />
                                        <img src="https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-31.png" alt="no image" style={{ width: '200px', height: '200px' }} />
                                    </label>
                                        :
                                        <img src={preview} alt="no image" style={{ width: '200px', height: '200px' }} />

                                    }

                                </div>

                                {preview && <div className='flex justify-center items-center'>
                                    {previewList?.map((item) => (
                                        <img src={item} alt="no image" style={{ width: '70px', height: '70px' }} />
                                    ))}
                                    {previewList.length < 3 && <label htmlFor="imagefile">
                                        <input id='imagefile' type="file" style={{ display: 'none' }} onChange={(e) => handleUpload(e)} />
                                        <FontAwesomeIcon icon={faSquarePlus} className='fa-2x shadow ms-3 text-gray-500' />

                                    </label>}
                                </div>}

                            </div>
                        </div>

                        <div className='pt-5 flex justify-end'>
                            <button onClick={handleReset} className='bg-amber-600 rounded text-black p-2 hover:bg-white hover:border hover:border-amber-600 hover:text-amber-600'>Reset</button>
                            <button onClick={handleSubmit} className='bg-green-800 text-white rounded p-2 ms-4  hover:bg-white hover:border hover:border-green-600 hover:text-green-600'>Submit</button>
                        </div>

                    </div>

                </div>}

                {bookstatus && <div className='p-10 my-20 shadow rounded'>

                    <div className='bg-gray-200 p-5 rounded'>
                        <div className="md:grid grid-cols-[3fr_1fr]">
                            <div className='px-4'>
                                <h1 className='text-2xl'>A Million To One</h1>
                                <h2>Tony Faggioli</h2>
                                <h3 className='text-blue-600'>$13</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque commodi iusto eaque quam ea quasi et temporibus architecto? Exercitationem esse sit culpa veritatis necessitatibus aperiam perspiciatis, voluptates voluptas hic non! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reprehenderit eaque dolores amet mollitia deserunt non architecto nisi? Dolor hic deleniti accusamus expedita! Saepe sint, porro minus ex molestias aperiam.</p>
                                <div className='flex'>
                                    <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="no image" style={{ width: '70px', height: '70px' }} />
                                    <img src="https://toppng.com/uploads/preview/round-approved-green-postage-stamp-11642625401zch43bcd4q.png" alt="no image" style={{ width: '70px', height: '70px' }} />
                                    <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="no image" style={{ width: '70px', height: '70px' }} />
                                </div>
                            </div>


                            <div className='px-4'>
                                <img src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" alt="no image" className='w-full' style={{ height: '250px' }} />
                                <div className='flex justify-end mt-4'>
                                    <button className='p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-center items-center flex-col '>
                        <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="" style={{ width: '200px', height: '200px' }} />
                        <p className='text-red-600 text-2xl'>No Book Added Yet</p>
                    </div>
                </div>}

                {purchaseStatus && <div className='p-10 my-20 shadow rounded'>
                    <div className='bg-gray-200 p-5 rounded'>
                        <div className="md:grid grid-cols-[3fr_1fr]">
                            <div className='px-4'>
                                <h1 className='text-2xl'>A Million To One</h1>
                                <h2>Tony Faggioli</h2>
                                <h3 className='text-blue-600'>$13</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque commodi iusto eaque quam ea quasi et temporibus architecto? Exercitationem esse sit culpa veritatis necessitatibus aperiam perspiciatis, voluptates voluptas hic non! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reprehenderit eaque dolores amet mollitia deserunt non architecto nisi? Dolor hic deleniti accusamus expedita! Saepe sint, porro minus ex molestias aperiam.</p>
                                <div className='flex'>
                                    <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="no image" style={{ width: '70px', height: '70px' }} />
                                    <img src="https://toppng.com/uploads/preview/round-approved-green-postage-stamp-11642625401zch43bcd4q.png" alt="no image" style={{ width: '70px', height: '70px' }} />
                                    <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="no image" style={{ width: '70px', height: '70px' }} />
                                </div>
                            </div>


                            <div className='px-4'>
                                <img src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" alt="no image" className='w-full' style={{ height: '250px' }} />
                                <div className='flex justify-end mt-4'>
                                    <button className='p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-center items-center flex-col '>
                        <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="" style={{ width: '200px', height: '200px' }} />
                        <p className='text-red-600 text-2xl'>No Book Purchased Yet</p>
                    </div>
                </div>}

            </div>

            <ToastContainer theme='colored' position='top-center' autoClose={2000} />
            <Footer />
        </>
    )
}

export default Profile