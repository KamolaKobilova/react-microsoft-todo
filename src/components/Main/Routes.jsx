import React from 'react';
import {Routes, Route, useParams, useLocation} from 'react-router-dom'
import AddToDo from './AddToDo';

export default function Routes() {
  return (
    <div>
       <Routes>
           <Route path='/addtodo/:name' element={<AddToDo/>}/>
       </Routes>
    </div>

  )
}
