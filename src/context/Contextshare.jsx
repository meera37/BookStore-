import React, { createContext, useState } from 'react'

export const searchKeyContext = createContext("")
export const adminProfileUpdateStatusContext = createContext("")


function Contextshare({children}) {

    const [searchkey, setsearchkey] = useState("")
    const [adminProfileUpdateStatus,setadminProfileUpdateStatus] = useState({})

  return (
    <adminProfileUpdateStatusContext.Provider value={{adminProfileUpdateStatus,setadminProfileUpdateStatus}}>
      <searchKeyContext.Provider value={{searchkey,setsearchkey}}> 
                                      {/* key value same */}
          {
              children
          }
      </searchKeyContext.Provider>
    </adminProfileUpdateStatusContext.Provider>
  )
}

export default Contextshare