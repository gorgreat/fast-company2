import React from "react"

const BookMark = (props) => {  
   
    const bookmarkStatus = props.status === true ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'

    return <>
        <button className={bookmarkStatus} onClick={() => props.bookmark(props.id)}></button>
    </>
    
}

export default BookMark