import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Paymentsuccess() {
  return (
    <>
    <Header/>
    <div className='container my-10'>

        <div className='md:grid grid-cols-2 px-20 justify-center items-center flex-col'>
<div>
    <h1 className='md:text-4xl text-blue-600'>Congratulations</h1>
    <p className='my-4 text-2xl'>Thank you for shopping with Bookstore. Hope you had a great time with us!</p>
    <Link to={'/all-Books'}>
        <button className='bg-blue-900 px-4 py-3 text-white my-5 hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600'>
    <FontAwesomeIcon icon={faBackward} className='me-2' />Explore more books
        </button>
    </Link>
</div>

 <div className='flex justify-center items-center'>
            <img src="https://i.pinimg.com/originals/48/a2/93/48a293976e2c10478e2eebf754ee8d25.gif" alt="no image" className='w-full'/>
        </div>

        </div>

       
    </div>
    <Footer/>
    </>
  )
}

export default Paymentsuccess