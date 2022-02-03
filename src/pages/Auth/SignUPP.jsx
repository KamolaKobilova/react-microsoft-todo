import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../utils/axios";
import "../../styles/index.css";
import Swal from "sweetalert2";
import microsoft from "../../assets/images/microsoft.png";
// import {VscKey} from 'react-icons/vsc';

function SignUPP() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });     

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = async () => {
    try {
      const { email, password, username } = user;
      if (email && password && username) {
        setLoading(true);
        const { data } = await Axios.post('/auth/local/register', user);
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You have successfully registered',
          footer: `<a href="/">Home page</a>`
        });
        setLoading(false);
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('token', data.jwt)
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Please fill all required fields',
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
  const { password, username, email } = user;

  return (
    <div className="welcome">
      <div className="logo">
        <img src={microsoft} />
        <h4>Sign up</h4>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <br />
        <h6>
          No account?{" "}
          <span className="span">
            <Link to="/sign-in">Create one</Link>
          </span>
        </h6>
        <h6 className="span">Can't access your account?</h6>
        <button className="btns ">Back</button>
        <button onClick={handleSubmit} className="btns blue">
          Next
        </button>
      </div>
    </div>
    // <div className="sign_in">
    //    <p>Sign in option</p>
    // </div>
  );
}

export default SignUPP


// let navigate = useNavigate();
// const [user, setUser] = useState({
//   username: "",
//   email: "",
//   password: "",
// });

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setUser((prevState) => ({ ...prevState, [name]: value }));
// };

// const handleSubmit = async () => {
//   try {
//     const { password, username, email } = user;
//     if (password && username && email) {
//       const { data } = await Axios.post("/auth/local/register", {
//         data: user,
//       });
//       console.log(data);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// const { password, username, email } = user;