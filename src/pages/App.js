import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
// import Important from '../components/Important/Important';
// import ImporDetails from '../components/ImportantDetails/ImporDetails';
import Basic from './Basic';
import Planned from '../components/Planned/Planned';
import SignIn from './Auth/SignIn';
// import ToDos from '../components/Main/ToDos'

// import SignIn from './Auth/SignIn';


function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [userss, setUserss] = useState({
    "id": null,
    "userName": "",
    "email": "",
  });
     
  if(isLogged){
    return (
      <div>
        <Header/>
        <Sidebar/>
        <Basic/> 
        {/* <ToDos/> */}
      
      </div>
  )
  } 
  return (
    <SignIn/>
        // <Routes>
        //    <Route path="./planned" element={<Planned/>}/>  
        // </Routes>
  )
}

export default App
