import React from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../component/AdminHeader'
import AdminSidebar from '../component/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons'

function AdminHome() {
    return (
        <>
            <AdminHeader />
            <div className='md:grid grid-cols-[1fr_4fr]'>
                <div className='bg-blue-100 flex flex-col items-center p-5'>
                    <AdminSidebar />
                </div>
                <div className='p-10'>
                    <div className="md:grid grid-cols-3">
                        <div className='px-5'>
                            <div className='bg-blue-900 p-3 flex rounded text-white'>
                                <FontAwesomeIcon icon={faBook} className='fa-3x' />
                                <div className='text-center px-3'>
                                    <h1>Total Number of Books</h1>
                                    <h1 className='text-3xl'>100+</h1>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className='px-5'>
                            <div className='bg-green-900 p-3 flex justify-evenly rounded text-white'>
                                <FontAwesomeIcon icon={faUsers} className='fa-2x' />
                                <div className='text-center px-3'>
                                    <h1>Total Number of Users</h1>
                                    <h1 className='text-3xl'>100+</h1>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className='px-5'>
                            <div className='bg-amber-500 p-3 flex justify-evenly rounded text-white'>
                                <FontAwesomeIcon icon={faUserTie} className='fa-2x' />
                                <div className='text-center px-3'>
                                    <h1 className='text-sm'>Total Number of Employees</h1>
                                    <h1 className='text-3xl'>100+</h1>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminHome