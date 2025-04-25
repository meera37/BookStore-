import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './users/pages/Home'
import Auth from './pages/Auth'
import PageNotFound from './pages/PageNotFound'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'
import AllBooks from './users/pages/AllBooks'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import Profile from './users/pages/Profile'

function App() {

  const [isloading, setIsloading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsloading(true)
    }, 7200)
  }, [])

  return (
    <>
      
      <Routes>
        <Route path='/' element={isloading ? <Home /> : <Preloader />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register/>} />
        <Route path='/all-Books' element={<AllBooks/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/profile' element={<Profile/>} />


        <Route path='*' element={<PageNotFound />} />

      </Routes>
      
    </>
  )
}

export default App
