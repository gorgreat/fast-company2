import React from "react"
import User from "./user"
import Bookmark from './bookmark'

const Users = (props) => {

    return <>
        <tr key={props._id}>
            <th>{props.name}</th>
             <td>
                {(props.qualities).map((item) =>                                   
                    <User key={item._id} color={item.color} name={item.name} />
                )}                   
            </td>
            <td><span key={props.profession._id}>{props.profession.name}</span></td>         
            <td>{props.completedMeetings}</td>
            <td>{props.rate}</td>
            <td>
                <Bookmark status={props.bookmark} id={props._id} bookmark={props.onBookmark} />
            </td>
            <td><button className='btn btn-danger' onClick={() => props.onDelete(props._id)}>Удалить</button></td>
        </tr>

    </>
    
}

export default Users