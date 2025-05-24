import { faBagShopping, faBook, faGear, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { serverUrl } from '../../services/serverUrl'
import { adminProfileUpdateStatusContext } from '../../context/Contextshare'

function AdminSidebar() {
const [homeStatus,setHomeStatus] = useState(false)
const [bookStatus,setBookStatus] = useState(false)
const [CareersStatus,setCareersStatus] = useState(false)
const [settingsStatus,setSettingsStatus] = useState(false)
const [adminD, setadminD] = useState({
    username:"",
    profile:""
})

const {adminProfileUpdateStatus}=useContext(adminProfileUpdateStatusContext)
    const navigate = useNavigate()

    const filter = (data)=>{
        if(data == 'home'){
            navigate('/admin-home')
        }
        else if(data == 'books'){
            navigate('/admin-books')
 
        }else if(data == 'careers'){
            navigate('/admin-careers')

        }else if(data == 'settings'){
            navigate('/admin-settings')

        }else{
            navigate('*')
        }
    }

    useEffect(()=>{

        // console.log(location.pathname);
        if(location.pathname == '/admin-home'){
            setHomeStatus(true)
        }
        else if(location.pathname == '/admin-books'){
            setBookStatus(true)
        }
        else if(location.pathname == '/admin-careers'){
            setCareersStatus(true)
        }
        else if(location.pathname == '/admin-settings'){
            setSettingsStatus(true)
        }
        else{
            console.log('no such page');
            
        }

        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        setadminD({username:user.username, profile:user.profile})
    },
        [adminProfileUpdateStatus])

  return (
    <>
    <div className=''>
        <img src={adminD.profile==""?"https://cdn-icons-png.freepik.com/512/8742/8742495.png":`${serverUrl}/upload/${adminD.profile}`} alt="no image" style={{width:'150px',height:'150px',borderRadius:'50%'}} />
    
    <h1 className='mt-5 text-center'>{adminD.username}</h1>

    <div className='my-5'>
<div className="mb-3">
    <input type="radio" id='home' name='filter' readOnly checked={homeStatus}/>
    <label htmlFor="home" className='ms-3' onClick={()=>filter('home')}><FontAwesomeIcon icon={faHouse} className='me-3'/>Home</label>
</div>
<div className="mb-3">
<input type="radio" id='allbooks' name='filter' readOnly checked={bookStatus}/>
<label htmlFor="allbooks" className='ms-3' onClick={()=>filter('books')}><FontAwesomeIcon icon={faBook} className='me-3'/>All Books</label>
</div>
<div className="mb-3">
<input type="radio" id='careers' name='filter' readOnly checked={CareersStatus}/>
<label htmlFor="careers" className='ms-3' onClick={()=>filter('careers')}><FontAwesomeIcon icon={faBagShopping} className='me-3' />Careers</label>
</div>
<div className="mb-3">
<input type="radio" id='settings' name='filter' readOnly checked={settingsStatus} />
<label htmlFor="settings" className='ms-3' onClick={()=>filter('settings')}><FontAwesomeIcon icon={faGear} className='me-3'/>Settings</label>
</div>
    </div>
    </div>
    </>
)
}

export default AdminSidebar