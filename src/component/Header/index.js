import React, { useState, useEffect } from 'react';
import './style.css';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdPower } from 'react-icons/io';
import { firebaseAuth } from '../../config/firebase';
import { useHistory } from "react-router";
function Header() {

    const [name, setName] = useState('');
    const history = useHistory();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        await firebaseAuth().onAuthStateChanged(user => {
            if (user) {
                setName(user.email);
                console.log(user);
                document.getElementById('iconsnav').style.display = 'flex';
            } else {
                document.getElementById('iconsnav').style.display = 'none';
            }
        });
    }

    const singOut = () => {

        try {
            const singout = firebaseAuth().signOut();
            if(singOut){
                history.push('/')
            }
                
        } catch (erro) {
            console.log(erro);
        }
    }

    return (
        <header className='headerOnDiary'>
            <div>
                <h1>OnDiary</h1>
            </div>

            <nav id='iconsnav'>
                <FaUserCircle className="icon-user" />
                <h3>{name}</h3>
                <button onClick={singOut}><IoMdPower className="icon-button" /></button>
            </nav>
        </header>
    );
}

export default Header;
