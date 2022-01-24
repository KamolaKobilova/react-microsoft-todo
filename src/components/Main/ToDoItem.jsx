import React from 'react';
import AddToDo from './AddToDo';

export default function ToDoItem(props) {
    const {title, is_Important, category,content,due_date} = props.date;
  return (
    <div>
        <input type="checkbox" />
        <h4>{title}</h4>
        <h4>{is_Important}</h4>
        <h4>{category}</h4>
        <h4>{content}</h4>
        <h4>{due_date}</h4>
    </div>
    

  )
}
