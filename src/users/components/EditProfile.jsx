import { faPen, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function EditProfile() {

  const [offcanvasStatus, setOffCanvasStatus] = useState(false)

  return (
    <>
      <div>
        <button onClick={() => setOffCanvasStatus(true)} className='text-blue-600 border border-blue-600 rounded p-3 hover:bg-blue-600 hover:text-white'>
          <FontAwesomeIcon icon={faPenToSquare} className='me-1' />Edit</button>
      </div>

      {offcanvasStatus && <div>
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity w-full h-full" onClick={() => setOffCanvasStatus(false)}></div>

        <div className='bg-white w-90 h-full z-50 fixed top-0 left-0'>
          {/* title */}
          <div className='bg-gray-900 px-3 py-4 flex justify-between text-white text-2xl'>
            <h1>Edit User Profile</h1>
            <FontAwesomeIcon icon={faXmark} onClick={() => setOffCanvasStatus(false)} />
          </div>
          {/* body */}
          <div className='flex justify-center items-center flex-col my-5'>
            <label htmlFor="profilefile">
              <input id='profilefile' type="file" style={{ display: 'none' }} />
              <img className='z-52' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s" alt="no image" style={{ width: '90px', height: '90px'}} />
            <div className='bg-yellow-300 text-white z-53 fixed rounded py-2 px-3' style={{marginLeft:'80px', marginTop:'-40px'}}><FontAwesomeIcon icon={faPen} className=''/></div>
            </label>

            <div className="mb-3 mt-5 w-full px-5">
              <input type="text" placeholder='Username' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
            </div>
            <div className="mb-3 w-full px-5">
            <input type="text" placeholder='Password' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
 
            </div>
            <div className="mb-3 w-full px-5">
            <input type="text" placeholder='Confirm Password' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />

            </div>
            <div className="mb-3 w-full px-5">
            <textarea placeholder='Bio' rows={4} className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded'></textarea>

            </div>

            <div className='flex justify-end w-full px-5 mt-5'>
              <button className='bg-amber-600 text-black rounded py-3 px-4 hover:text-amber-600 hover:border hover:border-amber-600 hover:bg-white'>Reset</button>
              <button className='bg-green-600 text-black rounded py-3 px-4 hover:text-green-600 hover:border hover:border-green-600 hover:bg-white ms-4'>Update</button>
            </div>
          </div>
        </div>

      </div>}
    </>
  )
}

export default EditProfile