import React from 'react';
import '../../styles/index.css';
import microsoft from '../../assets/images/microsoft.png';
import {VscKey} from 'react-icons/vsc'


function SignIn() {
  return (
    <div className='welcome'>
       <div className="logo">
         <img src={microsoft}  />
         <h4>Sign in</h4>
         <input type="text" placeholder='Email,phone or Skype' />
         <h6>No account? <span className='span'>Create one</span></h6>
         <h6 className='span'>Can't access your account?</h6>
         <button className='btns '>Back</button>
       <button className='btns blue'>Next</button>
       </div>
       
    </div>
    // <div className="sign_in">
    //    <p>Sign in option</p>
    // </div>
      
  )
}

export default SignIn
