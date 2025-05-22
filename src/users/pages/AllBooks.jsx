import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { getAllBookApi } from '../../services/allApi'
import { searchKeyContext } from '../../context/Contextshare'

function AllBooks() {
    const [status, setStatus] = useState(false)
    const [token, setToken] = useState("")
    const [allBooks, setAllBooks] = useState([])
    const [tempArray, setTempArray] = useState([])
    const {searchkey,setsearchkey} = useContext(searchKeyContext)

    console.log(searchkey);
    

    const getAllBooks = async (searchkey,tok) => {

        const reqHeader = {
            "Authorization": `Bearer ${tok}`
        }

        const result = await getAllBookApi(searchkey,reqHeader)
        // console.log(result);
        if (result.status == 200) {
            setAllBooks(result.data)
            setTempArray(result.data)
        }

    }

    console.log(allBooks);

 const filter = (data)=>{
    if(data == 'No-filter'){
        setAllBooks(tempArray)
    }
    else{
setAllBooks(tempArray.filter((item)=>item.category.toLowerCase()==data.toLowerCase()))

    }
 }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const tok = sessionStorage.getItem("token")
            setToken(tok)
            getAllBooks(searchkey,tok)
        }
    }, [searchkey])

    return (
        <>
            <Header />


            {/* when user is logged in */}
            {token && <div>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-center text-3xl font-medium mt-5'>Collections</h1>
                    <div className='flex my-8 w-full  justify-center items-center'>
                        <input type="text" value={searchkey} onChange={(e)=>setsearchkey(e.target.value)} placeholder='Search by Title' className='px-4 py-2 border border-gray-400 placeholder-gray-400 md:w-1/4 w-1/2 shadow' />
                        <button className='bg-blue-700 text-white px-4 py-2 shadow hover:border hover:border-blue-700 hover:text-blue-700 hover:bg-white'>Search</button>
                    </div>
                </div>

                <div className="md:grid grid-cols-[1fr_4fr] md:py-10 md:px-20 px-5">
                    <div>
                        <div className='flex mt-3 justify-between'>
                            <h1 className='text-2xl font-medium '>Filters</h1>

                            <span onClick={() => setStatus(!status)} className='text-2xl md:hidden'><FontAwesomeIcon icon={faBars} /></span>

                        </div>

                        <div className={status ? 'md:block' : 'md:block justify-center hidden'}>
                            <div className='mt-3' onClick={()=>filter('Literary Fiction')}>
                                <input type="radio" id='Literary Fiction' name='filter' />
                                <label htmlFor="Literary Fiction" className='ms-3'>Literary Fiction</label>
                            </div>
                            <div className='mt-3'  onClick={()=>filter('Philosophy')}>
                                <input type="radio" id='Philosophy' name='filter' />
                                <label htmlFor="Philosophy" className='ms-3'>Philosophy</label>
                            </div>
                            <div className='mt-3'  onClick={()=>filter('Romance')}>
                                <input type="radio" id='Romance' name='filter' />
                                <label htmlFor="Romance" className='ms-3'>Romance</label>
                            </div>
                            <div className='mt-3'  onClick={()=>filter('Mystery/Thriller')}>
                                <input type="radio" id='Mystery/Thriller' name='filter' />
                                <label htmlFor="Mystery/Thriller" className='ms-3'>Mystery/Thriller</label>
                            </div>
                            <div className='mt-3'  onClick={()=>filter('Horror')}>
                                <input type="radio" id='Horror' name='filter' />
                                <label htmlFor="Horror" className='ms-3'>Horror</label>
                            </div>
                            <div className='mt-3'  onClick={()=>filter('Auto/Biography')}>
                                <input type="radio" id='Auto/Biography' name='filter' />
                                <label htmlFor="Auto/Biography" className='ms-3'>Auto/Biography</label>
                            </div>
                            <div className='mt-3'  onClick={()=>filter('Self-Help')}>
                                <input type="radio" id='Self-Help' name='filter' />
                                <label htmlFor="Self-Help" className='ms-3'>Self-Help</label>
                            </div>
                            <div className='mt-3'  onClick={()=>filter('Politics')}>
                                <input type="radio" id='Politics' name='filter' />
                                <label htmlFor="Politics" className='ms-3'>Politics</label>
                            </div>
                             <div className='mt-3'  onClick={()=>filter('No-filter')}>
                                <input type="radio" id='No-filter' name='filter' />
                                <label htmlFor="No-filter" className='ms-3'>No-filter</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='md:grid grid-cols-4 w-full mt-5 gap-5'>
                            {
                                allBooks?.length > 0 ?
                                    allBooks?.map((item) => (
                                        <div className='p-3 shadow-md' hidden={item?.status =='pending' || item?.status =='sold'}>
                                            
                                                <img src={item?.imageurl} alt="no image" style={{ width: '100%', height: '300px' }} />

                                           
                                            <div className='flex justify-center items-center flex-col mt-3'>
                                                <p className='text-blue-700'>{item?.author.slice(0, 20)}...</p>
                                                <h3>{item?.title.slice(0, 20)}...</h3>
                                               <Link to={`/view-books/${item?._id}`}> <button className='w-full mt-3 px-3 py-2 bg-blue-900 text-white hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'> View Book</button> </Link>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    <p>No Books</p>
                            }

                        </div>
                    </div>
                </div>
            </div>}

            {/* not logged in */}

            {!token && <div className="grid grid-cols-3 py-10">
                <div></div>
                <div className='flex justify-center items-center flex-col w-full'>
                    <img src="https://assets-v2.lottiefiles.com/a/790b2fc0-1171-11ee-afd8-87913996c05d/D74t1SWF5f.gif" alt="no image" className='w-1/2' />
                    <p className='mt-3 text-2xl'>Please <Link to={'/login'} className='text-red-500 underline'>Login</Link> to Explore More</p>
                </div>
                <div></div>
            </div>}
            <Footer />
        </>
    )
}

export default AllBooks