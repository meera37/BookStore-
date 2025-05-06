import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { LoginApi, registerApi } from '../services/allApi'


function Auth({ register }) {

  const [userDetails, setUserDetails] = useState({
    username:"",
    email:"",
    password:""
  })
  const navigate = useNavigate()
  console.log(userDetails);

  const handleRegister =async ()=>{
    console.log('inside register function');
    const {username,email,password} = userDetails

    if(!username || !password || !email){
      toast.info('Please fill all fields correctly')
    }
    else{
      const result = await registerApi({username,email,password})  //email(backend):email
      console.log(result);
      if(result.status ==200){
        toast.success('Registered Successfully')
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
navigate('/login')
      }
      else if(result.status ==409){
        toast.warning(result.response.data)
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
      }
      else{
        toast.error('Something went wrong')
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
      }
      
    }
  }

  const handleLogin = async()=>{
    const {email,password} = userDetails
    if(!email || !password){
      toast.info('Please enter complete details')
    }
    else{
      const result = await LoginApi({email, password})
      console.log(result);
      if(result.status ==200){
        toast.success('Login Successfully')
        setUserDetails({
          email:"",
          password:""
        })
navigate('/')
      }
      else if(result.status ==401 || result.status == 404){
        toast.warning(result.response.data)
        setUserDetails({
          email:"",
          password:""
        })
      }
      else{
        toast.error('Something went wrong')
        setUserDetails({
          email:"",
          password:""
        })
      }
    }
  }
  
  return (
    <>
      <div id='loginPage' className='flex justify-center items-center'>
        <div className="md:grid grid-cols-3 w-full">
          <div></div>

          <div className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl mb-5 font-bold text-white'>BOOK STORE</h1>
            <form className='w-full bg-gray-900 p-10 flex justify-center items-center flex-col'>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%' }} className='border border-white flex justify-center items-center'>
                <FontAwesomeIcon icon={faUser} className='text-white fa-2x' />
              </div>

              {!register ? <h1 className='text-white mt-5 text-3xl mb-8'>Login</h1> :
              <h1 className='text-white mt-5 text-3xl mb-8'>Register</h1>}

              {register && <div className='mb-5 w-full mt-8'>
                <input value={userDetails.username} type="text" placeholder='Username' className='p-2 rounded placeholder-gray-600 bg-white w-full' onChange={(e)=>setUserDetails({...userDetails,username :e.target.value})}/>
              </div>}
              <div className='mb-5 w-full'>
                <input value={userDetails.email} type="text" placeholder='Email Id' className='p-2 rounded placeholder-gray-600 bg-white w-full' onChange={(e)=>setUserDetails({...userDetails,email :e.target.value})} />
              </div>
              <div className='mb-2 w-full'>
                <input value={userDetails.password} type="text" placeholder='Password' className='p-2 rounded placeholder-gray-600 bg-white w-full' onChange={(e)=>setUserDetails({...userDetails,password :e.target.value})} />
              </div>

              <div className='mb-5 w-full flex justify-between'>
                <p className='text-amber-300' style={{ fontSize: '10px' }}>*Never share your password with others</p>
{ !register && <p className='text-white underline' style={{ fontSize: '10px' }}>Forget password</p>}              </div>

{register ? <div className='mb-2 w-full'>
                <button type='button' className='bg-green-800 text-white w-full p-3 rounded' onClick={handleRegister}>Register</button>
              </div> :
              <div className='mb-2 w-full'>
                <button type='button' onClick={handleLogin} className='bg-green-800 text-white w-full p-3 rounded'>Login</button>
              </div>}

{ !register &&             <p className='text-white'>--------------------or------------------</p>
}             
{!register && <div className='mb-5 mt-3 w-full'>
                <button className='bg-white text-black w-full p-3 rounded'>Sign In with Google</button>
              </div>}

              {register ? <p className='text-white'>Are you a Already User ? <Link to={'/login'} className='text-blue-400 underline ms-2'>Login</Link></p> :

              <p className='text-white'>Are you a New User ? <Link to={'/register'} className='text-blue-400 underline ms-2'>Register</Link></p>}
            </form>
          </div>

          <div></div>
        </div>
      </div>
      <ToastContainer theme='colored'position="top-center" autoClose={2000} />
    </>
  )
}

export default Auth