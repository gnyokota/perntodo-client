import React, { useState } from 'react';
import './InputTodo.css';

function InputTodo({handleRoute}) {

    const [input, setInput] = useState('');

    const handleChange = (event) =>{
        setInput(event.target.value);
    } 

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const body = {description: input};
            const response = await fetch('http://localhost:4000/todos',{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                //JSON.stringify() method 
                //converts a JavaScript object or value to a JSON string
                body: JSON.stringify(body)
            });
            handleRoute(''); 
            handleRoute('home');
        }catch(error){
            console.error(error.message);
        }
    }

    return (
    <form className='input-section' onSubmit={handleSubmit} >
        <input type="text" 
        className="form-control" 
        placeholder="Add a task" 
        aria-label="todo-input" 
        value={input}
        onChange={handleChange}
        />
         <button type="submit" className="btn btn-primary">add Todo</button>
    </form>
    )
}

export default InputTodo;
