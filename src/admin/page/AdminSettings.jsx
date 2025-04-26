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
    <div>Settings</div>
</div>
<Footer/>
</>
  )
}

export default AdminSettings