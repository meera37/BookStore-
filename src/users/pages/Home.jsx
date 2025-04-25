import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <Header />

      <header className='flex justify-center items-center'>
        <div id="main" className='flex justify-center items-center w-full'>
          <div className='md:grid grid-cols-3 w-full'>
            <div></div>
            <div className='text-white flex justify-center items-center flex-col px-5'>
              <h1 className='text-5xl'>Wonderful Gifts</h1>
              <p>Give your family and friends a book</p>
              <div className='flex mt-10 w-full' >
                <input type="text" placeholder='Search Books' className='py-2 px-4 bg-white rounded-3xl placeholder-gray-400 w-full' />
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-blue-800' style={{ marginTop: '11px', marginLeft: '-30px' }} />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </header>

      {/* new arrival */}
      <section className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5'>
        <h2 >NEW ARRIVALS</h2>
        <h4 className='text-2xl'>Explore Our Latest Collections</h4>

        <div className='md:grid grid-cols-4 w-full mt-5 gap-5'>
          <div className='p-3 shadow-md'>
            <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" alt="no image" style={{width:'100%', height:'300px'}} />
           
           <div className='flex justify-center items-center flex-col mt-3'>
              <p className='text-blue-700'>Dan Brown</p>
              <h3>The Da Vinci Code</h3>
              <p>$18</p>
           </div>
          </div>
          <div className='p-3 shadow-md'>
            <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" alt="no image" style={{width:'100%', height:'300px'}} />
           
           <div className='flex justify-center items-center flex-col mt-3'>
              <p className='text-blue-700'>Dan Brown</p>
              <h3>The Da Vinci Code</h3>
              <p>$18</p>
           </div>
          </div>
          <div className='p-3 shadow-md'>
            <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" alt="no image" style={{width:'100%', height:'300px'}} />
           
           <div className='flex justify-center items-center flex-col mt-3'>
              <p className='text-blue-700'>Dan Brown</p>
              <h3>The Da Vinci Code</h3>
              <p>$18</p>
           </div>
          </div>
          <div className='p-3 shadow-md'>
            <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" alt="no image" style={{width:'100%', height:'300px'}} />
           
           <div className='flex justify-center items-center flex-col mt-3'>
              <p className='text-blue-700'>Dan Brown</p>
              <h3>The Da Vinci Code</h3>
              <p>$18</p>
           </div>
          </div>
        </div>

<div className="flex justify-center items-center my-5">
<Link to={'/all-Books'}>
    <button className='px-3 py-2 bg-blue-900 text-white hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Explore More</button>
  
</Link></div>
      </section>
      
      {/* author */}
      <section className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5'>

  <div className='md:grid grid-cols-2 w-full'>
  <div>
  <div className='flex justify-center items-center flex-col'>
    <h3>FEATURED AUTHORS</h3>
    <h3 className='text-2xl'>Captivates with every word</h3>
  </div>
  <p className='text-justify mt-5'>Authors in a bookstore application are the visionaries behind the books that fill the shelves, each contributing their own unique voice, creativity, and perspective to the world of literature. Whether writing fiction, non-fiction, poetry, or educational works, authors bring stories, ideas, and knowledge to life in ways that resonate with readers of all backgrounds.</p>
  <p className='text-justify mt-5'>Their work spans a wide array of genres, from thrilling mysteries and heartwarming romances to thought-provoking memoirs and insightful self-help books. Through their words, authors not only entertain and inform but also inspire and challenge readers to think deeply, reflect, and grow. In a bookstore application, authors' works become accessible to readers everywhere, offering a diverse and rich tapestry of voices and experiences, all of which contribute to the evolving landscape of modern literature.</p>
</div>

<div className='px-10 pt-8'>
  <img src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740" alt="no image" className='w-full' style={{height:'350px',marginTop:'50px'}} />
</div>

{/* tailwind carousel trail */}


{/* <div id="controls-carousel" class="relative w-full" data-carousel="static">
   
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740" alt="no image" className='w-full' style={{height:'350px',marginTop:'50px'}} />

        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
        <img src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740" alt="no image" className='w-full' style={{height:'350px',marginTop:'50px'}} />

        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740" alt="no image" className='w-full' style={{height:'350px',marginTop:'50px'}} />

        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740" alt="no image" className='w-full' style={{height:'350px',marginTop:'50px'}} />

        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740" alt="no image" className='w-full' style={{height:'350px',marginTop:'50px'}} />

        </div>
    </div>
    
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div> */}




</div>
      </section>

{/* testimonial */}
<div className='flex justify-center items-center flex-col md:py-10 md:px-40 p-6' >
<h3>TESTIMONIALS</h3>
<h3 className='text-2xl'>See What Others are Saying</h3>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUOyXaLrw8_y_p1kSb0jn4b41aXFnwg-TLqA&s" alt="no image" style={{width:'150px',height:'150px',borderRadius:'50%'}} className='mt-5' />
<h6 className='mt-3'>Treesa Joseph</h6>
<p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, laboriosam! Alias ea illum quo omnis culpa repellat magni eum exercitationem. At suscipit illum perspiciatis reiciendis, veritatis ea quasi eveniet sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae deserunt voluptates natus, corporis hic, quis porro totam id magni voluptatibus. Natus laudantium et aliquam ea, quisquam maiores fugiat minus?</p>
</div>
      <Footer />
    </>
  )
}

export default Home