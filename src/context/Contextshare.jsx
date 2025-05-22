import React, { createContext, useState } from 'react'

export const searchKeyContext = createContext("")


function Contextshare({children}) {

    const [searchkey, setsearchkey] = useState("")

  return (
    <searchKeyContext.Provider value={{searchkey,setsearchkey}}> 
                                    {/* key value same */}
        {
            children
        }
    </searchKeyContext.Provider>
  )
}

export default Contextshare