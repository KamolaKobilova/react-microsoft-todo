import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Sidebar from './components/pages/Sidebar';
import MyDay from './components/pages/MyDay';
import Important from './components/pages/Important';
import Planned from './components/pages/Planned';
import Assign from './components/pages/Assign';
import './components/style.css'
import ImporDetails from './components/pages/ImporDetails';

ReactDOM.render(
   <>
   <BrowserRouter >
     <Header/>
     <Sidebar/>
     <MyDay/>
     <Important/>
     <ImporDetails/>
     <Planned/>
     <Assign/>
   </BrowserRouter>
  
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
