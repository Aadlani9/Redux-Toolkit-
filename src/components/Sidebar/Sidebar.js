import React from 'react'
import "./Sidebar.css"
import {useSelector} from "react-redux";

function Sidebar(){
    const {name}  = useSelector(state => state.user.userData) //user : Key in  UserSlice
    console.log("slider: " , name)
    return (
        <div className='sidebar'>
            <ul>
                <li> <a href="#">Home</a> </li>
                <li> <a href="#">About</a> </li>
                <li> <a href="#">contact</a> </li>
                <li> <a href="#">Hello {name}</a> </li>
            </ul>
        </div>
    )
}

export default Sidebar