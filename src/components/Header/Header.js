import React from 'react'
import "./Header.css"
import { useSelector} from "react-redux";

 function Header(){
    const name  = useSelector(state => state.user.userData.name) //user : Key in  UserSlice

     console.log("header: " , name)
    return (
        <div className='header'>
            <h1> Aadlani </h1>
            <p>Hello : { name } </p>
        </div>
    )
}

export default Header