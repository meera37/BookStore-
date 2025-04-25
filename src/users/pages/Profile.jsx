import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import EditProfile from '../components/EditProfile'

function Profile() {

    const [sellstatus, setsellstatus] = useState(true)
    const [bookstatus, setbookstatus] = useState(false)
    const [purchaseStatus, setpurchaseStatus] = useState(false)

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
                                    <input type="text" placeholder='Title' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full ' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Author' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='No. of pages' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Image Url' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Price' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Discount Price' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Image Url' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full' />
                                </div>
                                <div className="mb-3">
                                    <textarea rows={5} placeholder='Abstract' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full'></textarea>
                                </div>



                            </div>
                            <div className='px-3'>
                                <div className="mb-3">
                                    <input type="text" placeholder='Publisher' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Language' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='ISBN' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Category' className='p-2 bg-white border border-gray-200 rounded placeholder-gray-400 w-full' />
                                </div>

                                <div className="mb-3 flex justify-center items-center w-full mt-10">
                                    <label htmlFor="imagefile">
                                        <input id='imagefile' type="file" style={{ display: 'none' }} />
                                        <img src="https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-31.png" alt="no image" style={{ width: '200px', height: '200px' }} />
                                    </label>

                                </div>

                                <div className='flex justify-center items-center'>
                                    <img src="https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg" alt="no image" style={{ width: '70px', height: '70px' }} />
                                    <FontAwesomeIcon icon={faSquarePlus} className='fa-2x shadow ms-3 text-gray-500' />
                                </div>

                            </div>
                        </div>

                        <div className='pt-5 flex justify-end'>
                            <button className='bg-amber-600 rounded text-black p-2 hover:bg-white hover:border hover:border-amber-600 hover:text-amber-600'>Reset</button>
                            <button className='bg-green-800 text-white rounded p-2 ms-4  hover:bg-white hover:border hover:border-green-600 hover:text-green-600'>Submit</button>
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
<img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="no image" style={{width:'70px',height:'70px'}} />
<img src="https://toppng.com/uploads/preview/round-approved-green-postage-stamp-11642625401zch43bcd4q.png" alt="no image" style={{width:'70px',height:'70px'}} />
<img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="no image" style={{width:'70px',height:'70px'}} />
                                </div>
                            </div>


                            <div className='px-4'>
                                <img src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" alt="no image" className='w-full' style={{height:'250px'}} />
                                <div className='flex justify-end mt-4'>
                                    <button className='p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-center items-center flex-col '>
                        <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="" style={{width:'200px',height:'200px'}} />
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
<img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="no image" style={{width:'70px',height:'70px'}} />
<img src="https://toppng.com/uploads/preview/round-approved-green-postage-stamp-11642625401zch43bcd4q.png" alt="no image" style={{width:'70px',height:'70px'}} />
<img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="no image" style={{width:'70px',height:'70px'}} />
                                </div>
                            </div>


                            <div className='px-4'>
                                <img src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" alt="no image" className='w-full' style={{height:'250px'}} />
                                <div className='flex justify-end mt-4'>
                                    <button className='p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-center items-center flex-col '>
                        <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="" style={{width:'200px',height:'200px'}} />
                        <p className='text-red-600 text-2xl'>No Book Purchased Yet</p>
                    </div>
                    </div>}

            </div>

            <Footer />
        </>
    )
}

export default Profile