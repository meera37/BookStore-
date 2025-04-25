import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
    
      <div className='bg-gray-900 text-white w-full py-10 px-5 grid grid-cols-1 md:grid-cols-3 gap-8'>

        <div>
          <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate est, exercitationem nemo ipsa sit deserunt provident nisi magni accusantium soluta a dolore consectetur iusto! Molestias dolore ex quis voluptas fugit.          </p>
        </div>
        <div>
        <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
        <p className="text-sm text-gray-300 mb-2">Stay updated with our latest trends</p>
        <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded-l-md bg-white text-black"
            />
            <button className="bg-yellow-400 px-4 rounded-r-md hover:bg-yellow-500 transition-all">
              ➜
            </button>
          </div>
        </div>
        <div>
        <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
          <p className="text-sm text-gray-300 mb-2">Let us be social</p>
          <div className="flex gap-4 text-xl">
            <FontAwesomeIcon icon={faInstagram} className='me-2' />
            <FontAwesomeIcon icon={faXTwitter} className='me-2' />
            <FontAwesomeIcon icon={faFacebook} className='me-2'  />
            <FontAwesomeIcon icon={faLinkedin} className='me-2'/>
          </div>
        </div>

      </div>


      <div className='bg-black text-gray-300 text-center py-4 text-sm'>
        Copyright © 2023 All rights reserved | This website is made with
        <span className='text-yellow-500 px-1'>
          <FontAwesomeIcon icon={faHeart} />

        </span>    by <span className="font-semibold">Meera Benny</span>
      </div>
    </>
  )
}

export default Footer