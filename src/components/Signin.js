import React, {useState} from 'react'; 

import './SignRegister.css';

function Signin({handleRoute, loadUser}) {

    const[userEmail, setUserEmail] = useState('');
    const[userPass, setUserPass] = useState('');
    const[errorMsg, setErrorMsg] = useState('');
    
    const handleUserEmail = (e) =>{
        setUserEmail(e.target.value);
    }

    const handleUserPass = (e) =>{
        setUserPass(e.target.value);
    }

    const  handleSignin = async (e) =>{
        e.preventDefault();
        try{
            const body = {
                email: userEmail,
                password: userPass
            }
            const response = await fetch('http://localhost:4000/signin',{
                method:'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            const loggedUser = await response.json();
            if(loggedUser.id){
                loadUser(loggedUser); 
                handleRoute('home');
            }else{
                setErrorMsg('Wrong email and/or password');
            }
        }catch(error){
            console.error(error.message); 
        }
    }

    return (
            <div className="signinreg-section shadow-sm p-3 mb-5 bg-body rounded">
            <form className="form-signin" onSubmit={handleSignin}>
            <i className="fas fa-clipboard-check"></i>
            <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
            <label  className="sr-only">Email address</label>
            <input 
            type="email" 
            className="form-control" 
            placeholder="Email address"
            value={userEmail}
            onChange={handleUserEmail} />
            <label className="sr-only">Password</label>
            <input 
            type="password"  
            className="form-control" 
            placeholder="Password" 
            value={userPass}
            onChange={handleUserPass}/>
            <div className="checkbox mb-3">
            </div>
            <button className="btn btn-lg btn-dark" type="submit">sign in</button>
            </form>
            <p className='error-title'>{errorMsg}</p>
            <p className='register-title' onClick={()=>{handleRoute('register')}}>Register</p>
            </div>
            
    )
}

export default Signin
