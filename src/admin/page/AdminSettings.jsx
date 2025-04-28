import React from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../component/AdminHeader'
import AdminSidebar from '../component/AdminSidebar'

function AdminSettings() {
  return (
<>
<AdminHeader/>
<div className='grid grid-cols-[1fr_4fr]'>
    <div className='bg-blue-200 flex flex-col items-center p-5'>
        <AdminSidebar/>
    </div>
    
<div>
      <h1 className='font-medium text-3xl text-center'>Settings</h1>
  
      <div>
    <div className='md:grid grid-cols-2 w-full  items-start gap-10 px-10 py-8'>

    <div className='flex flex-col justify-start space-y-4'>
    <p className='text-justify'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit vero labore non. Saepe a modi, nihil ipsam ex nulla itaque dolor vero adipisci voluptatibus, repellat illo, aut corrupti possimus.
    </p>
    <p className='text-justify'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit vero labore non. Saepe a modi, nihil ipsam ex nulla itaque dolor vero adipisci voluptatibus, repellat illo, aut corrupti possimus.
    </p>
  </div>

<div className='px-10'>
 <form className="flex flex-col items-center bg-gray-100 p-6 rounded-md space-y-4 shadow-md">

 <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="Profile" className="w-32 h-32 rounded-full mb-4" />

              <input type="text" placeholder="Username" className="w-full p-2 border rounded bg-white" />
              <input type="password" placeholder="Password" className="w-full p-2 border rounded bg-white" />
              <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded bg-white" />

              <div  className="flex gap-4 mt-4 w-full">
              <button className="flex-1 bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
        Reset
      </button>
      <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Update
      </button>
              </div>

            </form>
</div>
</div>
    </div>
</div>
    
</div>
<Footer/>
</>
  )
}

export default AdminSettings