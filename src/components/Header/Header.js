import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, signOutGoogle } = useContext(AuthContext)
    return (
        <div className="header">

            <img className="logo" src={logo} alt="" />

            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {user.email && <span style={{ color: 'white' , marginRight:'10px' }}>{user.displayName}</span>}

                {
                    user.email ? <button className='btn-regular' onClick={signOutGoogle}>Sign-out</button> : <NavLink to="/login">Log in</NavLink>
                }


            </nav>
        </div>
    );
};

export default Header;