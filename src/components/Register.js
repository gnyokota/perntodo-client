import React, {useState} from 'react'

function Register({loadUser, handleRoute}) {

    const [regName, setRegName] = useState('');
    const [regEmail, setRegEmail] = useState(''); 
    const [regPass, setRegPass] = useState(''); 

    const handleName = (e) =>{
        setRegName(e.target.value);
    }

    const handleEmail= (e) =>{
        setRegEmail(e.target.value);
    }
    
    const handlePass= (e) =>{
        setRegPass(e.target.value);
    }

    const handleReg = async () =>{
        try{
            const body = {
                name: regName,
                email: regEmail,
                password: regPass
            };
            const response = await fetch('http://localhost:4000/register',{
                method:'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            const user = await response.json();
            if(user.id){
                loadUser(user); 
                handleRoute('home')
            }
        }catch(error){
            console.error(error.message);
        }
            
    }

    return (
        <div className="signinreg-section  shadow-sm p-3 mb-5 bg-body rounded">
        <form className="form-signin">
        <i className="fas fa-clipboard-check"></i>
        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
        <label  className="sr-only">Name</label>
        <input type="text" 
        className="form-control" 
        placeholder="Name" 
        value={regName}
        onChange={handleName}/>
        <label  className="sr-only">Email address</label>
        <input type="email" 
        className="form-control"
        placeholder="Email address" 
        value={regEmail}
        onChange={handleEmail}/>
        <label  className="sr-only">Password</label>
        <input type="password" 
        className="form-control" 
        placeholder="Password" 
        value={regPass}
        onChange={handlePass}
        required/>
        <div className="checkbox mb-3">
        </div>
        <button className="btn btn-lg btn-dark" 
        onClick={handleReg}
        type="submit"
        >register</button>
        </form>
        </div>
    )
}

export default Register
