import React from 'react'
import { StyledTodo } from './styled/Todo.styled';

export default function Todo({ todo, toggleTodo, deleteTodo, classNames }) {
  
  function handleToggle() {
        toggleTodo(todo.id);
    }

    function handleDelete() {
      deleteTodo(todo.id);
    }

    const labelClasses = classNames('todo-name', {
      'complete-todo': todo.complete === true
    })

    

  return (
    <StyledTodo>
        <label className={labelClasses}>
            <input className="todo-checkbox" type="checkbox" checked={todo.complete} onChange={handleToggle} />
            <span className="custom-checkbox"></span>
            {todo.todoName}
        </label>
        <button className="todo-delete" onClick={handleDelete}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path fill="#494C6B" fillRule="evenodd" 
        d="download (1).jpeg"/></svg></button>
    </StyledTodo>
  )
}