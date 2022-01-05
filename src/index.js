import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';
import './components/style.css'

ReactDOM.render(
   <>
  <Header/>
  <Sidebar/>
  <Body/>
  <Footer/>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
