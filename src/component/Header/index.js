import React from 'react';
import './style.css';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdPower } from 'react-icons/io';


function Header() {
    return (
        <header className='headerOnDiary'>
            <div>
                <h1>OnDiary</h1>
            </div>

            <nav>
                <FaUserCircle className="icon-user" />
                <h3>User</h3>
                <button><IoMdPower className="icon-button"/></button>
            </nav>
        </header>
    );
}

export default Header;
