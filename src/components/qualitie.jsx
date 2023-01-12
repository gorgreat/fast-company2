import React from "react"

const Qualitie = (color, name, id) => {
    return <span key = { id } className = { 'm-2 badge bg-' + color } > { name } </span>   
}

export default Qualitie