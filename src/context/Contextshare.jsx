import React, { createContext, useState } from 'react'

export const searchKeyContext = createContext("")
export const adminProfileUpdateStatusContext = createContext("")
export const userProfileUpdateStatusContext = createContext("")

function Contextshare({children}) {

    const [searchkey, setsearchkey] = useState("")
    const [adminProfileUpdateStatus,setadminProfileUpdateStatus] = useState({})
 const [userProfileUpdateStatus, setUserProfileUpdateStatus] = useState({})
  return (
    <userProfileUpdateStatusContext.Provider value={{userProfileUpdateStatus, setUserProfileUpdateStatus}}>
      <adminProfileUpdateStatusContext.Provider value={{adminProfileUpdateStatus,setadminProfileUpdateStatus}}>
        <searchKeyContext.Provider value={{searchkey,setsearchkey}}> 
                                        {/* key value same */}
            {
                children
            }
        </searchKeyContext.Provider>
      </adminProfileUpdateStatusContext.Provider>
    </userProfileUpdateStatusContext.Provider>
  )
}

export default Contextshare