import React, { useState , useEffect } from 'react'; 
import EditTodo from './EditTodo';
import './ListTodo.css';

function ListTodo({handleRoute}) {

    //here we are getting all the todos added from the database
    const [todos,setTodos] = useState([]); 
    const [itemId,setItemId] = useState(0);

    const getTodos = async() =>{
        try{
            const response = await fetch("http://localhost:4000/todos", {
                method: "GET"
            });
            const jsonData = await response.json();
            setTodos(jsonData);
        }catch(error){
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getTodos();
    },[]);

    //delete button:
    const handleDelete = async (id)=>{
        try{
            const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`,{
                method:'DELETE'
            }); 
            setTodos(todos.filter(todo => todo.todo_id !== id));
        }catch(error){
            console.error(error.message);
        }
    }

    //edit button:
    const [edit,setEdit] = useState(false);

    const handleEdit = async (id) =>{
        setEdit(true);
        setItemId(id); 
    }

    //pass the setState to the children:
    const handleEditChild = (boolean) =>{
        setEdit(boolean);
    }

    const createTodoItem = todos.map((todo) =>{
            if(edit && itemId === todo.todo_id){
                return(<li key={todo.todo_id}>
                    <EditTodo  
                    handleEditChild={handleEditChild}
                    handleRoute={handleRoute} 
                    todo={todo}/></li>)
            } 
            else{
                return(<li key={todo.todo_id} className='list-item'>
                <h5 className='todo-description'>{todo.description}</h5> 
                <button type="button" className="btn btn-success" onClick={()=>handleEdit(todo.todo_id)}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={()=>handleDelete(todo.todo_id)}>Delete</button>
            </li>)
            }
    });


    return (
        <div  className='listEdit-wrapper shadow-sm p-3 mb-5 bg-body rounded'>
        <ul className='list-section'>
          {createTodoItem}
        </ul> 
        </div>
    )
}

export default ListTodo
