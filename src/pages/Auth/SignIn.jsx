import React, {useState} from 'react';
import '../../styles/index.css';
import Axios from "../../utils/axios";
import { Link,useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import microsoft from '../../assets/images/microsoft.png';
import {useDispatch} from 'react-redux'
// import {VscKey} from 'react-icons/vsc';



function SignIn({updateAuthData}) {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    identifier: 'abdulkhamid@gmail.com',
    password: 'smoothing'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = async () => {
    try {
      const { password, identifier } = user;
      if (password && identifier) {
        setLoading(true);
        const { data } = await Axios.post("/auth/local", user);
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You have successfully signed in',
          footer: `<a href="/">Home page</a>`
        }).then((value) => {
          setLoading(false);
          localStorage.setItem('user', JSON.stringify(data.user))
          localStorage.setItem('token', data.jwt);
          window.location.href = '/';
          // const userData = {
          //   token: data.jwt,
          //   user: data.user
          // }
          // console.log(userData)
          // updateAuthData(userData);
          // navigate('/');
        })

      } else {
        Swal.fire({
          icon: 'error',
          text: 'Invalid identifier or password',
        });
      }

    } catch (error) {
      console.log(error.response.data)
      Swal.fire({
        icon: 'error',
        text: error.response?.data?.error?.message || 'Something went wrong',
      });
      setLoading(false);
    }
  }
  const { password, identifier } = user;
  return (
    <div className='welcome'>
       <div className="logo">
         <img src={microsoft}  />
         <h4>Sign in</h4>
         <input type="text" name='identifier' value={identifier} placeholder='email' onChange={handleInputChange} /><br />
         <input type="text" placeholder='password' onChange={handleInputChange} />
         <h6><span className='spanBlue'>Use a phone number instead</span></h6>
         <h6 className='spanBlue'>Not have account <span><Link to="/sign-up">Sign up now</Link></span></h6>
            <button className='btns blue' onClick={handleSubmit} disabled={loading}  > 
            {loading ? 'Signing in ': 'Sign in'}
             </button>
       </div>
       
    </div>
    // <div className="sign_in">
    //    <p>Sign in option</p>
    // </div>
      
  )
}

export default SignIn
