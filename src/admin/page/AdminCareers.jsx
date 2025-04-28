import React, { useState } from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../component/AdminHeader'
import AdminSidebar from '../component/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTrash } from '@fortawesome/free-solid-svg-icons'

function AdminCareers() {

  const [jobpoststatus, setjobpoststatus] = useState(true)
  const [newapplicantstatus, setnewapplicantstatus] = useState(false)
  return (
    <>
      <AdminHeader />
      <div className='grid grid-cols-[1fr_4fr]'>
        <div className='bg-blue-200 flex flex-col items-center p-5'>
          <AdminSidebar />
        </div>
        <div>
          <div className='flex justify-center items-center my-5'>
            <p onClick={() => { setjobpoststatus(true); setnewapplicantstatus(false) }} className={jobpoststatus ? 'p-4 text-blue-600 border-t border-l border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Job Post</p>

            <p onClick={() => { setjobpoststatus(false); setnewapplicantstatus(true) }} className={newapplicantstatus ? 'p-4 text-blue-600 border-t border-l border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>New Applicant</p>

          </div>

         {jobpoststatus &&  <div>
            <div className='flex justify-between items-center m-3'>
              <div className='flex my-8 justify-start items-center'>
                <input type="text" placeholder='Job Title' className='px-4 py-2 border border-gray-400 placeholder-gray-400 md:w-96 w-40 shadow' />
                <button className='bg-green-700 text-white px-4 py-2 shadow hover:border hover:border-green-700 hover:text-green-700 hover:bg-white'>Search</button>
              </div>
              <div>
                <button className='text-blue-600 p-2 border border-blue-600 bg-white rounded hover:bg-blue-600 hover:text-white'>Add Job</button>
              </div>
            </div>
  
            <div className='md:px-20 py-5'>
              <div className='shadow border border-gray-200'>
                <div className="md:grid grid-cols-[8fr_1fr] p-5">
                  <div>
                    <h1 className='mb-3'>Job Title</h1>
                    <hr />
                    <p className='mt-3'><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />Kochi</p>
                    <p className='mt-3'>  Job Type:</p>
                    <p className='mt-3'>  Salary:</p>
                    <p className='mt-3'>  Qualification:</p>
                    <p className='mt-3'>  Experience:</p>
                    <p className='text-justify'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo enim ullam molestiae veritatis animi natus incidunt, dolorem rem assumenda, saepe autem. Dicta, nemo dolore suscipit explicabo cum nobis itaque rerum?</p>
                  </div>
                  <div className='flex md:justify-center items-start justify-end'>
                    <button className='bg-red-800 text-white p-3 mt-5 md:mt-0 rounded ms-1 hover:bg-white hover:border hover:border-red-800 hover:text-red-800'>Delete <FontAwesomeIcon icon={faTrash} /></button>
                  </div>
                </div>
  
              </div>
            </div>
          </div>}


          {newapplicantstatus && <div>
            <div className='flex my-8 mx-3 w-full  justify-start items-center'>
                <input type="text" placeholder='Job Title' className='px-4 py-2 border border-gray-400 placeholder-gray-400 md:w-1/4 w-1/2 shadow' />
                <button className='bg-green-700 text-white px-4 py-2 shadow hover:border hover:border-green-700 hover:text-green-700 hover:bg-white'>Search</button>
              </div>
            <table className='mx-3 w-full'>
              <thead>
                <tr className='text-white bg-blue-600'>
                  <th className='p-2'>Sl.no</th>
                  <th>Job Title</th>
                  <th>Name</th>
                  <th>Qualification</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Cover letter</th>
                  <th>Resume</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </div>}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminCareers