import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Important from '../components/Important/Important';
import ImporDetails from '../components/ImportantDetails/ImporDetails';
import Basic from './Basic';

function App() {
    return (
        <div>
          <Header/>
          <Sidebar/>
          <Basic/>
        </div>
    )
}

export default App
