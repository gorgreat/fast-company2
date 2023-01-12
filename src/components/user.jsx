import React from "react"
import Qualitie from './qualitie'

const User = ({ color, name, _id }) => {
      
    return <>        
        {Qualitie(color, name, _id)}
    </>
    
}

export default User