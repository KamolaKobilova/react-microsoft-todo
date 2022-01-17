import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Important from '../components/Important/Important';
import ImporDetails from '../components/ImportantDetails/ImporDetails';
import Basic from './Basic';
import Planned from '../components/Planned/Planned';


function App() {
    return (
        <div>
          <Header/>
          <Sidebar/>
          <Basic/> 
          <Planned/>
      
        </div>
    )
}

export default App
