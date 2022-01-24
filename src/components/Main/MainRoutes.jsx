import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AddToDo from './AddToDo';


export default function MainRoutes() {
  return (
    <div>
       <Routes>
           <Route path='/todos/:name/:id' element={<AddToDo/>}/>
       </Routes>
    </div>

  )
}
