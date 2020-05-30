import React, { useState } from 'react';
import './style.css';
import { firebaseAuth } from '../../config/firebase';
import { useHistory } from "react-router";
//import { withRouter } from 'react-router-dom';

 function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function Login(e) {
        e.preventDefault();
        try {
            let resultAuth = await firebaseAuth().signInWithEmailAndPassword(email, password);
            if(resultAuth){
                history.push('/home');
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function Registrer(e){
        e.preventDefault();
        try {
            let cadAuth = await firebaseAuth().createUserWithEmailAndPassword(email, password);
            alert('Cadastrado com sucesso');
            console.log(cadAuth);
            alert('Cadastrado com sucesso!');
            history.push('/home');
        } catch (error) {
            alert('Erro, tente novamente', error);
        }
    }

    return (
        <div className="login">
            <form className="form-Login">
                <input
                    required="required"
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}></input>
                <input
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Senha" />

                <button onClick={Login}>Entrar</button>
                <button onClick={Registrer}>Cadastrar</button>
            </form>
        </div>
    );
}

export default Login;