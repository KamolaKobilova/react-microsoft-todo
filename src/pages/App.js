import React, {useState} from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
// import Important from '../components/Important/Important';
// import ImporDetails from '../components/ImportantDetails/ImporDetails';
import Basic from './Basic';
import Planned from '../components/Planned/Planned';



function App() {
  const [isLogged, setIsLogged] = useState(true)
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
        <Planned/>
    
      </div>
  )
  } 
  return (
    <h1>Please log in</h1>
  )
}

export default App
