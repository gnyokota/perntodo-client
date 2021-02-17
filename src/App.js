import React, { Fragment, useState } from 'react'; 
import HeaderTodo from './components/HeaderTodo';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Register from './components/Register';


function App() {
  const [route, setRoute] = useState('signin');
  const [user, setUser] = useState({
    id:'', 
    name:'',
    email:'', 
    joined:''
  });

  const handleRoute= (path) =>{
    setRoute(path) 
  }

  const loadUser = (data) =>{
    setUser({...user, 
    id: data.id, 
    name: data.name, 
    email: data.email, 
    joined: data.joined})
  }

    if(route==='signin'){
        return(<Signin handleRoute={handleRoute} loadUser={loadUser}/>)
      }else if(route === 'register'){
        return(<div>
        <Navbar handleRoute={handleRoute}/>
        <Register handleRoute={handleRoute} loadUser={loadUser}/>
      </div>
        )
      }else if(route === 'home'){
        return(<div>
        <Navbar handleRoute={handleRoute} />
        <HeaderTodo />
        <InputTodo handleRoute={handleRoute}/>
        <ListTodo handleRoute={handleRoute}/>
        </div>) 
      }else{
        return <Navbar handleRoute={handleRoute} />
      }
}

//
export default App;
