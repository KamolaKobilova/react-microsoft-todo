import React from 'react';
import {useLocation} from 'react-router-dom';
import {AddToDos} from './AddToDo'

export default function AddToDo() {
  const location = useLocation();
   const params = useParams();
   console.log(location); 
   console.log(params); 

  return (
      <div>
        <AddToDos>
          <input type="text" placeholder='todo' />
          <h2>sdjgksjd</h2>
        </AddToDos>
       
      </div>
  )
}


