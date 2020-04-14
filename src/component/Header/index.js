import React from 'react';
import './style.css';
import { FaUserCircle } from 'react-icons/fa';
import {IoMdPower} from 'react-icons/io';
function Header () {

    return(
        <header className='headerOnDiary'>
            <h1>OnDiary</h1>
            <h3><FaUserCircle className ="icon"/> User</h3>      
            <button><IoMdPower className='iconUser'/></button>
        </header>
    );
}

export default Header;
