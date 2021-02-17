import React, { useState } from 'react';
import './EditTodo.css';

function EditTodo({handleEditChild, todo, handleRoute}) {

    const [input, setInput] = useState(todo.description);

    const handleEditChange = (event) =>{
        setInput(event.target.value);
    } 

    //edit description with a new state
    const handleEditSubmit = async(e) =>{
        e.preventDefault();
        try{
            const body = {description: input};
            const response = await fetch(`http://localhost:4000/todos/${todo.todo_id}`,{
                method:'PUT', 
                headers:{'Content-Type':'application/json'}, 
                body: JSON.stringify(body)
            });
            handleEditChild(false);
            handleRoute(''); 
            handleRoute('home');
        }catch(error){
            console.error(error.message);
        }
    }
    
    return (
    <form className='edit-section' onSubmit={handleEditSubmit}>
        <input type="text" 
        className="form-control" 
        placeholder="Edit the task" 
        aria-label="edit-input" 
        value={input}
        onChange={handleEditChange}
        />
         <button type="submit" className="btn btn-info">add Todo</button>
    </form> 
    )
}

export default EditTodo;
