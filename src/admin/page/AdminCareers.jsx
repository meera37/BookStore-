import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../component/AdminHeader'
import AdminSidebar from '../component/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { addJobApi, deleteJobApi, getallApplications, getAllJobsApi } from '../../services/allApi'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import { serverUrl } from '../../services/serverUrl'

function AdminCareers() {

  const [modalstatus, setModalStatus] = useState(false)
  const [jobpoststatus, setjobpoststatus] = useState(true)
  const [newapplicantstatus, setnewapplicantstatus] = useState(false)
  const [addJobStatus, setaddJobStatus] = useState({})
  const [searchKey,setsearchKey] = useState("")
const [deleteJobStatus, setDeleteJobStatus] = useState({})
const [allapplication,setAllApplication] = useState([])

  const [jobForm,setjobForm] = useState({
    title:"", location:"", jType:"", salary:"", qualification:"", experience:"", description:""
  })
//console.log(jobForm);

const [allJobs, setAllJobs] = useState([])

//add job and submit
const handleSubmit = async ()=>{
  const {title, location, jType, salary, qualification, experience, description} = jobForm
  if(!title || !location || !jType || !salary ||  !qualification || !experience || !description){
      toast.error("Please fill in required fields");
  }
  else{
//const addjob = async (data)=>{

  try {
    const result = await addJobApi(jobForm)
 // console.log(result);

  if(result.status == 200){
    toast.success('Job added Successfully')
    setModalStatus(false)
    handleReset()
    setaddJobStatus(result.data)
  }
  else if(result.status == 400){
    toast.warning(result.response.data)
    handleReset()
  }
  else{
    toast.error('something went wrong')
  }
  } catch (error) {
    res.status(500).json(error)
  }
  
//}
  }
}

const handleReset = ()=>{
  setjobForm({
    title:"", location:"", jType:"", salary:"", qualification:"", experience:"", description:""
  })
}



//getjob
const getAllJobs = async(searchKey)=>{
  const result = await getAllJobsApi(searchKey)
  //console.log(result);
if(result.status ==200){
  setAllJobs(result.data)
}

  
}
//console.log(allJobs);

//delete job
const deleteJob = async(id)=>{
const result = await deleteJobApi(id)
console.log(result);
if(result.status == 200){
  setDeleteJobStatus(result)
}
}

//get all apllications
const getAllApplication = async()=>{
  const result = await getallApplications()
  //console.log(result);
  if(result.status == 200){
setAllApplication(result.data)
  }
}
console.log(allapplication);


useEffect(()=>{
if(jobpoststatus ==true){
  getAllJobs(searchKey)
}else if(newapplicantstatus == true){
  getAllApplication(true)
}
else{
  console.log('something went wrong');
  
}
},[addJobStatus,searchKey, deleteJobStatus,newapplicantstatus])

  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div className='bg-blue-200 flex flex-col items-center p-5'>
          <AdminSidebar />
        </div>
        <div>
          <div className='flex justify-center items-center my-5'>
            <p onClick={() => { setjobpoststatus(true); setnewapplicantstatus(false) }} className={jobpoststatus ? 'p-4 text-blue-600 border-t border-l border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Job Post</p>

            <p onClick={() => { setjobpoststatus(false); setnewapplicantstatus(true) }} className={newapplicantstatus ? 'p-4 text-blue-600 border-t border-l border-r border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>New Applicant</p>

          </div>

          {jobpoststatus && <div>
            <div className='flex justify-between items-center m-3'>
              <div className='flex my-8 justify-start items-center'>
                <input type="text" value={searchKey} onChange={(e)=>setsearchKey(e.target.value)} placeholder='Job Title' className='px-4 py-2 border border-gray-400 placeholder-gray-400 md:w-96 w-40 shadow' />
                <button className='bg-green-700 text-white px-4 py-2 shadow hover:border hover:border-green-700 hover:text-green-700 hover:bg-white'>Search</button>
              </div>
              <div>
                <button onClick={() => setModalStatus(true)} className='text-blue-600 p-2 border border-blue-600 bg-white rounded hover:bg-blue-600 hover:text-white'>Add Job</button>
              </div>
            </div>

            <div className='md:px-20 py-5'>
              {allJobs?.length>0 ?
              allJobs?.map((items, index)=>(
                <div className='shadow border border-gray-200 mt-4' key={index}>
                <div className="md:grid grid-cols-[8fr_1fr] p-5">
                  <div>
                    <h1 className='mb-3 text-3xl font-semibold'>{items?.title}</h1>
                    <hr />
                    <p className='mt-3'><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />{items?.location}</p>
                    <p className='mt-3'>Job Type :  {items?.jType}</p>
                    <p className='mt-3'>Salary : {items?.salary}</p>
                    <p className='mt-3'>Qualification:  {items?.qualification}</p>
                    <p className='mt-3'>Experience:  {items?.experience}</p>
                    <p className='text-justify mt-3'>Description:{items?.description}</p>
                  </div>
                  <div className='flex md:justify-center items-start justify-end'>
                    <button onClick={()=>deleteJob(items?._id)} className='bg-red-800 text-white p-2 mt-5 md:mt-0 rounded ms-1 hover:bg-white hover:border hover:border-red-800 hover:text-red-800'>Delete <FontAwesomeIcon icon={faTrash} /></button>
                  </div>
                </div>

              </div>
              ))
              :
              <p>No Job Added</p>}
            </div>
          </div>}

          {modalstatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                  {/* title */}

                  <div className="bg-gray-900 p-4 flex sm:px-6 justify-between">
                    <h1 className='text-white text-2xl'>Add Job</h1>
                    <FontAwesomeIcon onClick={() => setModalStatus(false)} icon={faXmark} className='text-white fa-2x' />
                  </div>

                  {/* body modal */}

                  
                  <div className="bg-white px-4 pt-3 pb-4 sm:p-6 sm:pb-4">
                    <div className="mb-3">
                          <input type="text" value={jobForm.title} placeholder='Job Title' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' onChange={(e)=>setjobForm({...jobForm,title:e.target.value})} />
                        </div>
                        <div className="mb-3">
                          <input type="text" value={jobForm.location} placeholder='Location' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' onChange={(e)=>setjobForm({...jobForm,location:e.target.value})} />
                        </div>
                        <div className="mb-3">
                          <input type="text" value={jobForm.jType} placeholder='Job Type' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' onChange={(e)=>setjobForm({...jobForm,jType:e.target.value})} />
                        </div>
                        <div className="mb-3">
                          <input type="text" value={jobForm.salary} placeholder='Salary' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' onChange={(e)=>setjobForm({...jobForm,salary:e.target.value})} />
                        </div>
                        <div className="mb-3">
                          <input type="text" value={jobForm.qualification} placeholder='Qualification' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' onChange={(e)=>setjobForm({...jobForm,qualification:e.target.value})} />
                        </div>
                        <div className="mb-3">
                          <input type="text" value={jobForm.experience} placeholder='Experience' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' onChange={(e)=>setjobForm({...jobForm,experience:e.target.value})} />
                        </div>
                        <div className="mb-3">
                          <textarea type="text" value={jobForm.description} placeholder='Description' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' onChange={(e)=>setjobForm({...jobForm,description:e.target.value})} />
                        </div>
                  </div>
                  {/* footer of modal */}
                  <div className="bg-gray-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-white sm:ml-3 sm:w-auto hover:text-black hover:border hover:border-gray-500"
                    onClick={handleSubmit}>Submit</button>
                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-white sm:mt-0 sm:w-auto hover:text-black" onClick={handleReset}>Reset</button>
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
            <div >
             <div className='flex justify-center items-center overflow-x-auto'>
                {allapplication?.length>0?<table className='mx-5 my-5 w-full border border-gray-400'>
                  <thead>
                    <tr className='text-white bg-blue-600'>
                      <th className='p-3 border border-gray-500'>Sl.no</th>
                      <th className='p-3 border border-gray-500'>Job Title</th>
                      <th className='p-3 border border-gray-500'>Name</th>
                      <th className='p-3 border border-gray-500'>Qualification</th>
                      <th className='p-3 border border-gray-500'>Email</th>
                      <th className='p-3 border border-gray-500'>Phone</th>
                      <th className='p-3 border border-gray-500'>Cover letter</th>
                      <th className='p-3 border border-gray-500'>Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    { allapplication?.map((item, index)=>(
    <tr key={index}>
                      <td className='border border-gray-500 p-2'>{index+1}</td>
                      <td className='border border-gray-500 p-2'>{item?.jobtitle}</td>
                      <td className='border border-gray-500 p-2'>{item?.fullname}</td>
                      <td className='border border-gray-500 p-2'>{item?.qualification}</td>
                      <td className='border border-gray-500 p-2'>{item?.email}</td>
                      <td className='border border-gray-500 p-2'>{item?.phone}</td>
                      <td className='border border-gray-500 p-2'>{item?.coverletter}</td>
                      <td className='border border-gray-500 p-2'><Link to={`${serverUrl}/pdfUploads/${item?.resume}`} className='text-blue-600 underline' target='_blank'>resume</Link></td>
    
                    </tr>
                    ))}
                  </tbody>
                </table> :
                <p>No application yet</p>
                }
             </div>
            </div>
          </div>}
        </div>
      </div>

      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
      <Footer />
    </>
  )
}

export default AdminCareers