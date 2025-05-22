import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import { getAllJobsApi } from '../../services/allApi'

function Careers() {

  const [modalstatus, setModalStatus] = useState(false)
  const [allJobs,setallJobs] = useState("")
  const [searchkey, setsearchkey] = useState("")

  const getAllJobs = async (searchkey) => {
    const result = await getAllJobsApi(searchkey)
    //console.log(result);
if(result.status ==200){
  setallJobs(result.data)
}
  }

  useEffect(() => {
    getAllJobs(searchkey)
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
          <input type="text" value={searchkey} onChange={(e)=>setsearchkey(e.target.value)} placeholder='Job Title' className='px-4 py-2 border border-gray-400 placeholder-gray-400 md:w-1/4 w-1/2 shadow' />
          <button className='bg-green-700 text-white px-4 py-2 shadow hover:border hover:border-green-700 hover:text-green-700 hover:bg-white'>Search</button>
        </div>

        <div className='md:px-20 py-5'>
          {
            allJobs?.length>0? 
            allJobs?.map((item, index)=>(
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
                <button onClick={() => setModalStatus(true)} className='bg-blue-800 text-white p-3 mt-5 md:mt-0 rounded ms-1 hover:bg-white hover:border hover:border-blue-800 hover:text-blue-800'>Apply<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-1' /></button>
              </div>
            </div>

          </div> 
            )):
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
                      <input type="text" placeholder='Full Name' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Email Id' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                    </div>
                  </div>

                  <div className='p-3'>
                    <div className="mb-3">
                      <input type="text" placeholder='Qualification' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Phone' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                    </div>

                  </div>
                </div>

                <div className="mb-3 px-3 w-full">
                  <textarea placeholder='Cover Letter' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full'></textarea>
                </div>

                <div className="mb-3 px-3 w-full">
                  <p className='text-gray-400'>Resume</p>
                  <input type="file" className='border border-gray-400 rounded placeholder-gray-500 w-full file:bg-gray-400 file:p-2 file:text-white' />
                </div>
              </div>

              {/* footer of modal */}
              <div className="bg-gray-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-white sm:ml-3 sm:w-auto hover:text-black hover:border hover:border-gray-500">Submit</button>
                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-white sm:mt-0 sm:w-auto hover:text-black">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>}


      <Footer />
    </>
  )
}

export default Careers