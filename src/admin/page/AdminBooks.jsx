import React, { useState } from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../component/AdminHeader'
import AdminSidebar from '../component/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function AdminBooks() {

  const [bookliststatus, setbookliststatus] = useState(true)
      const [usersstatus, setusersstatus] = useState(false)

  return (
<>
<AdminHeader/>
<div className='grid grid-cols-[1fr_4fr]'>
    <div className='bg-blue-200 flex flex-col items-center p-5'>
        <AdminSidebar/>
    </div>
    <div>
      {/* tab */}
    <div className='flex justify-center items-center my-5'>
                    <p onClick={() => { setbookliststatus(true); setusersstatus(false)}} className={bookliststatus ? 'p-4 text-blue-600 border-t border-l border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Book List</p>

                    <p onClick={() => { setbookliststatus(false); setusersstatus(true)}} className={usersstatus ? 'p-4 text-blue-600 border-t border-l border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Users</p>

                </div>
{/* booklist */}
               {bookliststatus && <div className='md:grid grid-cols-4 w-full m-5 gap-5'>
              <div className='p-3 shadow-md'>
                <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" alt="no image" style={{width:'100%', height:'300px'}} />
               
               <div className='flex justify-center items-center flex-col mt-3'>
                  <p className='text-blue-700'>Dan Brown</p>
                  <h3>The Da Vinci Code</h3>
                  <p className='text-red-600'>maxwell@gmail.com</p>
                  <button className='w-full mt-3 px-3 py-2 bg-green-900 text-white hover:border hover:border-green-900 hover:text-green-900 hover:bg-white'> Approve</button>
               </div>
              </div>
              <div className='p-3 shadow-md'>
                <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" alt="no image" style={{width:'100%', height:'300px'}} />
               
               <div className='flex justify-center items-center flex-col mt-3'>
                  <p className='text-blue-700'>Dan Brown</p>
                  <h3>The Da Vinci Code</h3>
                  <p className='text-red-600'>maxwell@gmail.com</p>
                  <button className='w-full mt-3 px-3 py-2 bg-green-900 text-white hover:border hover:border-green-900 hover:text-green-900 hover:bg-white'> Approve</button>
    
               </div>
              </div>
              <div className='p-3 shadow-md'>
                <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" alt="no image" style={{width:'100%', height:'300px'}} />
               
               <div className='flex justify-center items-center flex-col mt-3'>
                  <p className='text-blue-700'>Dan Brown</p>
                  <h3>The Da Vinci Code</h3>
                  <p className='text-red-600'>maxwell@gmail.com</p>
                  <button className='w-full mt-3 px-3 py-2 bg-green-900 text-white hover:border hover:border-green-900 hover:text-green-900 hover:bg-white'> Approve</button>
    
               </div>
              </div>
              <div className='p-3 shadow-md'>
                <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" alt="no image" style={{width:'100%', height:'300px'}} />
               
               <div className='flex justify-center items-center flex-col mt-3'>
                  <p className='text-blue-700'>Dan Brown</p>
                  <h3>The Da Vinci Code</h3>
                  <p className='text-red-600'>maxwell@gmail.com</p>
                  <p className='w-full mt-3 px-3 py-2 text-end text-2xl'> 
                  <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1ea42e",}} />
                  </p>
    
               </div>
              </div>
            </div>}


{/* users */}  
{usersstatus && <div className="grid grid-cols-3 my-10 mx-5">
  <div className='bg-gray-200 ps-5 m-4 py-2'>
    <p className="text-red-600 mb-2">ID:67db4255ggn455</p>

    <div className="flex items-center gap-4">
      <img
        src="https://cdn-icons-png.freepik.com/512/8742/8742495.png"
        alt="no image"
        className="w-[50px] h-[50px]"
      />
      
      <div className="flex flex-col">
        <h1 className="text-blue-600">Jennifer Steve</h1>
        <p>jennifer@gmail.com</p>
      </div>
    </div>

  </div>
  <div  className='bg-gray-200 ps-5 m-4 py-2'>
    <p className="text-red-600 mb-2">ID:67db4255ggn455</p>

    <div className="flex items-center gap-4">
      <img
        src="https://cdn-icons-png.freepik.com/512/8742/8742495.png"
        alt="no image"
        className="w-[50px] h-[50px]"
      />
      
      <div className="flex flex-col">
        <h1 className="text-blue-600">Jennifer Steve</h1>
        <p>jennifer@gmail.com</p>
      </div>
    </div>

  </div>
  <div  className='bg-gray-200 ps-5 m-4 py-2'>
    <p className="text-red-600 mb-2">ID:67db4255ggn455</p>

    <div className="flex items-center gap-4">
      <img
        src="https://cdn-icons-png.freepik.com/512/8742/8742495.png"
        alt="no image"
        className="w-[50px] h-[50px]"
      />
      
      <div className="flex flex-col">
        <h1 className="text-blue-600">Jennifer Steve</h1>
        <p>jennifer@gmail.com</p>
      </div>
    </div>

  </div>
  <div  className='bg-gray-200 ps-5 m-4 py-2'>
    <p className="text-red-600 mb-2">ID:67db4255ggn455</p>

    <div className="flex items-center gap-4">
      <img
        src="https://cdn-icons-png.freepik.com/512/8742/8742495.png"
        alt="no image"
        className="w-[50px] h-[50px]"
      />
      
      <div className="flex flex-col">
        <h1 className="text-blue-600">Jennifer Steve</h1>
        <p>jennifer@gmail.com</p>
      </div>
    </div>

  </div>
  <div className='bg-gray-200 ps-5 m-4 py-2'>
    <p className="text-red-600 mb-2">ID:67db4255ggn455</p>

    <div className="flex items-center gap-4">
      <img
        src="https://cdn-icons-png.freepik.com/512/8742/8742495.png"
        alt="no image"
        className="w-[50px] h-[50px]"
      />
      
      <div className="flex flex-col">
        <h1 className="text-blue-600">Jennifer Steve</h1>
        <p>jennifer@gmail.com</p>
      </div>
    </div>

  </div>
  <div  className='bg-gray-200 ps-5 m-4 py-2'>
    <p className="text-red-600 mb-2">ID:67db4255ggn455</p>

    <div className="flex items-center gap-4">
      <img
        src="https://cdn-icons-png.freepik.com/512/8742/8742495.png"
        alt="no image"
        className="w-[50px] h-[50px]"
      />
      
      <div className="flex flex-col">
        <h1 className="text-blue-600">Jennifer Steve</h1>
        <p>jennifer@gmail.com</p>
      </div>
    </div>

  </div>
  
</div>}


</div>
</div>




<Footer/>
</>
)
}

export default AdminBooks