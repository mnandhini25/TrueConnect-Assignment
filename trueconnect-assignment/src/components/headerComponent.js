import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () =>{

    return (
        <div className="header-container">
        <Link to="/" className="header-items">User Registraion</Link>
        <Link to="/show-all" className="header-items">Registered Users</Link>

        

           
        </div>
    )
}

export default HeaderComponent;