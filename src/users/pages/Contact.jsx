import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
<>
<Header/>
<div className='grid grid-cols-[0.5fr_3fr_0.5fr]'>
  <div></div>
  <div className="max-w-7xl mx-auto px-4 py-10">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold">Contacts</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sed quod quibusdam quis quidem nam, voluptate officia doloremque laudantium, odio blanditiis soluta, facilis ea nostrum nobis pariatur.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-around items-start mb-8 text-gray-700 gap-6 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>123 Main Street, Apt 4B, Anytown, CA 91234</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 9845213657</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelopeOpenText}/>
              <span>bookstore@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
           
            <form className="flex-1 bg-gray-100 p-6 rounded-md space-y-4 shadow-md">
              <h2 className="text-xl font-medium mb-2 text-center">Send me Message</h2>
              <input type="text" placeholder="Name" className="w-full p-2 border rounded bg-white" />
              <input type="email" placeholder="Email Id" className="w-full p-2 border rounded bg-white" />
              <textarea placeholder="Message" className="w-full p-2 border rounded h-28 resize-none bg-white"></textarea>
              <button className="w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 flex items-center justify-center gap-2">
                Send
                <FontAwesomeIcon icon={faPaperPlane} /> 
              </button>
            </form>

            <div className="flex-1 rounded overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251437.20269242008!2d76.017107963562!3d10.041077588383388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dc7e6dce1fd%3A0x7a8b02895f8a5fd7!2sSwathanthra%20Library!5e0!3m2!1sen!2sin!4v1745435568097!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="min-h-[320px] lg:min-h-[392px] w-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>

  <div></div>
</div>


<Footer/>
</>
)
}

export default Contact