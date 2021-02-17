import React from 'react';
import './Navbar.css';

function Navbar({handleRoute}) {

    return (
        <nav className="navbar navbar-light bg-light shadow-sm ">
        <div className="container-fluid">
        <i className="fas fa-clipboard-check"></i>
        <button className="btn btn-outline-dark" onClick={()=>{handleRoute('signin')}}>Logout</button>
        </div>
        </nav> 
    )
}

export default Navbar
