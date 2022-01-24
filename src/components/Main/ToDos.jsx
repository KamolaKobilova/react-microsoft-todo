import React, { useEffect, useState } from 'react';
import {useLocation, useParams} from 'react-router-dom';
import { AddStyles } from './ToDos';
import todos from '../Mocks.todos'
import AddTodo from '../AddToDo/AddTodo'
import axios from '../../utils/axios';


export default function AddToDo() {
  const location = useLocation();
  const params = useParams();
  const [todos,setTodos] = useState([])
  const [loading,setLoading] = useState(false)
   
  const fetchTodos = async() => {
    try {
      setLoading(true)
      const data = await axios.get('/todos');
      const {data:todos, meta:{pagination}} = data;
     
      setTodos(todos);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
   
  useEffect(()=> {
    fetchTodos()
  },[])
  console.log(todos);
  return (
      <div>
        <AddStyles>
          <input type="text" placeholder='todo' />
          <h2>sdjgksjd</h2>
           {
             loading? 'Loading...': <AddTodo/>
           }

           {
        todos.map((item)=>{
         const {id, attributes}

          return <AddToDo key={item.id} data={item}/>
            
          
        })

     }
          
        </AddStyles>
        
       
      </div>
  )
}


