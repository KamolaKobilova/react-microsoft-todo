import React from 'react';
import '../../styles/index.css';
import { Link } from 'react-router-dom';
import microsoft from '../../assets/images/microsoft.png';
import {VscKey} from 'react-icons/vsc';



function SignIn() {
  return (
    <div className='welcome'>
       <div className="logo">
         <img src={microsoft}  />
         <h4>Sign in</h4>
         <input type="text" placeholder='email' /><br />
         <input type="text" placeholder='password' />
         <h6><span className='span'>Use a phone number instead</span></h6>
         <h6 className='span'>No account <span><Link to="/SignUPP">Create now</Link></span></h6>
       <button className='btns blue'>Next</button>
       </div>
       
    </div>
    // <div className="sign_in">
    //    <p>Sign in option</p>
    // </div>
      
  )
}

export default SignIn
