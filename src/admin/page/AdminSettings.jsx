import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../component/AdminHeader'
import AdminSidebar from '../component/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { updateProfileApi } from '../../services/allApi'
import { serverUrl } from '../../services/serverUrl'
import { adminProfileUpdateStatusContext } from '../../context/Contextshare'


function AdminSettings() {

  const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    cPassword: "",
    profile: ""
  })
  console.log(adminDetails);
  const [preview, setPreview] = useState("")
  const [token, settoken] = useState("")
  const [existingProfileImage, setexistingProfileImage] = useState("")
  const [updateStatus,setupdateStatus] = useState({})
  const {setadminProfileUpdateStatus} = useContext(adminProfileUpdateStatusContext)

  const handleFileAdd = (e) => {
    // console.log(e.target.files[0]);
    setAdminDetails({ ...adminDetails, profile: e.target.files[0] })
    //console.log(adminDetails.profile);
    if (e.target.files[0] != "") {
      const url = URL.createObjectURL(e.target.files[0])
      setPreview(url)
    }

  }
  console.log(preview);

  //reset function
  const handleReset = () => {
    if (sessionStorage.getItem("token")) {
      // const token = sessionStorage.getItem("token")
      // settoken(token)
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setAdminDetails({ username: user.username, password: user.password, cPassword: user.password })
      setexistingProfileImage(user.profile)
    }
    setPreview("")
  }

  //function to update
  const handleAdd = async () => {
    const { username, password, cPassword, profile } = adminDetails
    console.log(username, password, cPassword, profile);

    if (!username || !password || !cPassword) {
      toast.info('Please add complete details')
    }
    else {
      // console.log('proceed');
      if (password != cPassword) {
        toast.warning('passwords must match')
      } else {
        if (preview) {
          const reqBody = new FormData()

          for (let key in adminDetails) {
            reqBody.append(key, adminDetails[key])
          }

          const reqHeader = {
            "Authorization": `Bearer ${token}`
          }

          const result = await updateProfileApi(reqBody, reqHeader)
          console.log(result);
          if(result.status == 200){
            toast.success('Profile updated successfully')
            sessionStorage.setItem("existingUser",JSON.stringify(result.data))
            setupdateStatus(result.data)
            setadminProfileUpdateStatus(result.data)
          }
          else{
            toast.error('Something went wrong')
            setupdateStatus(result)
          }
        }
        else {
          const reqHeader = {
            "Authorization": `Bearer ${token}`
          }
          const result = await updateProfileApi({ username, password, profile: existingProfileImage }, reqHeader)
          console.log(result);
           if(result.status == 200){
            toast.success('Profile updated successfully')
            sessionStorage.setItem("existingUser",JSON.stringify(result.data))
            setupdateStatus(result.data)
            setadminProfileUpdateStatus(result.data)
          }
          else{
            toast.error('Something went wrong')
            setupdateStatus(result)
          }
        }
      }

    }

  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      settoken(token)
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setAdminDetails({ username: user.username, password: user.password, cPassword: user.password })
      setexistingProfileImage(user.profile)
    }
  }, [updateStatus])

  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-[1fr_4fr] '>
        <div className='bg-blue-200 flex flex-col items-center p-5'>
          <AdminSidebar />
        </div>

        <div>
          <h1 className='font-medium text-3xl text-center mt-5'>Settings</h1>

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
                {/* <form className="flex flex-col items-center bg-gray-100 p-6 rounded-md space-y-4 shadow-md">
<label htmlFor="AdminProfilefile" style={{marginBottom:'50px'}}>
  <input id='AdminProfilefile' type="file" style={{}} onChange={(e)=>handleFileAdd(e)} />
 <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="Profile" className="w-32 h-32 rounded-full mb-4" />
<div className="absolute bottom-2 right-2 bg-yellow-300 text-white p-2 rounded-full">
                  <FontAwesomeIcon icon={faPen} />
                </div> */}

                <div className="flex flex-col items-center mb-6">
                  <div className="relative">
                    <label htmlFor="profilefile" className="relative cursor-pointer">
                      <input type="file" onChange={(e) => handleFileAdd(e)} id="profilefile" style={{ display: "none" }} />
                      {existingProfileImage == "" ? <img
                        src={preview ? preview : "https://cdn-icons-png.freepik.com/512/8742/8742495.png"}
                        alt="Profile"
                        className="h-40 w-40 rounded-full object-cover bg-gray-300"
                      /> :
                        <img
                          src={preview ? preview : `${serverUrl}/upload/${existingProfileImage}`}
                          alt="Profile"
                          className="h-40 w-40 rounded-full object-cover bg-gray-300"
                        />}
                      <div className="absolute bottom-2 right-2 bg-yellow-300 text-white py-2 px-3 rounded-full">
                        <FontAwesomeIcon icon={faPen} />
                      </div>
                    </label>
                  </div>
                </div>



                <input type="text" value={adminDetails.username} onChange={(e) => setAdminDetails({ ...adminDetails, username: e.target.value })} placeholder="Username" className="w-full p-2 border rounded bg-white" />
                <input type="password" value={adminDetails.password} onChange={(e) => setAdminDetails({ ...adminDetails, password: e.target.value })} placeholder="Password" className="w-full p-2 border rounded bg-white" />
                <input type="password" value={adminDetails.cPassword} onChange={(e) => setAdminDetails({ ...adminDetails, cPassword: e.target.value })} placeholder="Confirm Password" className="w-full p-2 border rounded bg-white" />

                <div className="flex gap-4 mt-4 w-full">
                  <button type='button' onClick={handleReset} className="flex-1 bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
                    Reset
                  </button>
                  <button type='button' onClick={handleAdd} className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Update
                  </button>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
      <Footer />
    </>
  )
}

export default AdminSettings