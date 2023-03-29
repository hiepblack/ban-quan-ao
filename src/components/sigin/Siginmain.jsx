import React from 'react'
import "./sigin.css"
import {Link} from "react-router-dom"
const Siginmain = () => {
    console.log("a")
  return (
    <div className='container'>
      
      <form className='form_login'>
      <h2 className='title_sigin'>Login</h2>
        <div className='lable_input'>
        <input type="email"  placeholder="Email" required/>
        </div>

        <div className='lable_input'>
        <input type="password" placeholder="PassWord" required/>
        </div>

        <div className="btn-sumbit">
              <button type="submit" className="up">
               login
              </button>
            </div>
      </form>
      <div className="create-account-wrap">
        <Link to={"/sigup"}>Create Account</Link>
      </div>
    </div>
  )
}

export default Siginmain