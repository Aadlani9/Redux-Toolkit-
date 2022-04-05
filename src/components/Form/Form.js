import React, {useState} from 'react'
import "./Form.css"
import {addUser} from "../../redux/api";
import {useDispatch, useSelector} from "react-redux";

function Form(){

    const [name , setName] = useState()
    const [email , setEmail] = useState();
    const {loading, error} = useSelector(state=> state.user)
    const dispatsh = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        //Using Action addUser
        // dispatsh(addUser({name, email}))
        addUser({name, email} , dispatsh)
    }

    return (
      <form onSubmit={handleSubmit}>
          <div className='form-group'>
              <input
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value) }
              />
          </div>
          <div className='form-group'>
              <input
                  type="text"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value) }
              />
          </div>
          {loading ? 'Loading..' : <div className='form-group'>
                  <input type="submit" placeholder="Add User"/>
              </div>}
          { error && " Error..!! "}
      </form>
    )
}

export default Form