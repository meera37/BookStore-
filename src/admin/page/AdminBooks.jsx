import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../component/AdminHeader'
import AdminSidebar from '../component/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { approveBookApi, getAllBookAdminApi, getAllUsersApi } from '../../services/allApi'
import { toast, ToastContainer } from 'react-toastify'

function AdminBooks() {

  const [bookliststatus, setbookliststatus] = useState(true)
  const [usersstatus, setusersstatus] = useState(false)
  const [bookdetails, setBookDetails] = useState([])
  const [token, setToken] = useState("")
  const [approveStatus, setApproveStatus] = useState(false)
const [allusers, setallusers] = useState([])

  const getAllBookAdmin = async (token) => {

    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    const result = await getAllBookAdminApi(reqHeader)
    // console.log(result);

    if (result.status == 200) {
      setBookDetails(result.data)
    }

  }
  //console.log(bookdetails);

  const approveBook = async (data) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    const result = await approveBookApi(data, reqHeader)
    console.log(result);
    if(result.status == 200){
      setApproveStatus(!approveStatus)
    }
    else{
      toast.error('Something went wrong')
    }

  }

  //function to get all users
  const getAllUsers = async (token)=>{
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }


    const result = await getAllUsersApi(reqHeader)
    console.log(result);

    if(result.status == 200){
      setallusers(result.data)
    }
    
  }


  useEffect(() => {
      
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)

      if(bookliststatus == true){
 getAllBookAdmin(token)
      }
      else if(usersstatus == true){
        getAllUsers(token)
      }
      else{
        console.log('Something went wrong');     
      }    
    }
  }, [approveStatus, usersstatus])

  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div className='bg-blue-200 flex flex-col items-center p-5'>
          <AdminSidebar />
        </div>
        <div>
          {/* tab */}
          <div className='flex justify-center items-center my-5'>
            <p onClick={() => { setbookliststatus(true); setusersstatus(false) }} className={bookliststatus ? 'p-4 text-blue-600 border-t border-l border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Book List</p>

            <p onClick={() => { setbookliststatus(false); setusersstatus(true) }} className={usersstatus ? 'p-4 text-blue-600 border-t border-l border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Users</p>

          </div>
          {/* booklist */}
          {bookliststatus && <div className='md:grid grid-cols-4 w-full m-5 gap-5'>
            {
              bookdetails?.length > 0 ?
                bookdetails?.map((item, index) => (
                  <div className={item.status == 'sold'?'p-3 shadow-md opacity-58':'p-3 shadow-md'} key={index}>
                    <img src={item?.imageurl} alt="no image" style={{ width: '100%', height: '300px' }} />

                    <div className='flex justify-center items-center flex-col mt-3'>
                      <p className='text-blue-700'>
                        {item?.author.slice(0, 20)}...
                      </p>
                      <h3>{item?.title.slice(0, 20)}...</h3>
                      <p className='text-red-600'>{item?.userMail}</p>

                      <p className='text-red-600'>${item?.dprice}</p>
                      {item?.status == 'pending' && <button onClick={() => approveBook(item)} className='w-full mt-3 px-3 py-2 bg-green-900 text-white hover:border hover:border-green-900 hover:text-green-900 hover:bg-white'> Approve</button>}
                   
                   {item?.status =="approved" && 
                   <div className='flex justify-end w-full'>
                    <img src="https://icon2.cleanpng.com/20190416/ep/kisspng-clip-art-portable-network-graphics-check-mark-free-dronex-1713898126106.webp" alt="approved" style={{width:'40px', height:'40px'}} />
                   </div>
                   }
                    </div>
                  </div>
                )) :
                <p>No books</p>
            }

          </div>}


          {/* users */}
          {usersstatus && <div className="md:grid grid-cols-3 gap-5 my-10 mx-5">
            {
              allusers?.length>0?
              allusers?.map((user)=>(
                <div className='bg-gray-200 ps-5 m-4 py-2'>
              <p className="text-red-600 mb-2">ID:{user?._id}</p>

              <div className="flex items-center gap-4">
                <img
                  src={user?.profile==""? "https://cdn-icons-png.freepik.com/512/8742/8742495.png":
                    `${user?.profile}`
                  }
                 
                  alt="no image"
                  className="w-[50px] h-[50px] rounded-full"
                />

                <div className="flex flex-col">
                  <h1 className="text-blue-600">{user?.username}</h1>
                  <p>{user?.email}</p>
                </div>
              </div>

            </div>
              )) :
            <p>no users</p>
            }
            
            

          </div>}


        </div>
      </div>



<ToastContainer position='top-center' theme='colored' autoClose={2000}/>
      <Footer />
    </>
  )
}

export default AdminBooks