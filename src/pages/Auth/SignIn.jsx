import React from 'react';
import '../../styles/index.css'

function SignIn() {
  return (
    <div className='signIn'>
      <input type="text" placeholder='username'/><br /><br />
      <input type="text" placeholder='password'/>
    </div>
  )
}

export default SignIn
