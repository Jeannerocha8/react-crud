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
            if (email === '') {
                alert('E-mail vazio, por favor insira um endereço de e-mail');
            } else if (password === '') {
                alert('Senha vazia, por favor insira uma senha');
            } else {
                let resultAuth = await firebaseAuth().signInWithEmailAndPassword(email, password);
                if (resultAuth) {
                    alert('usuário logado com sucesso');
                    history.push('/home');
                }
            }
        } catch (error) {

            if(error.message=='The password is invalid or the user does not have a password.'){
                alert('e-mail ou senha incorretos');
            }else if(error.message=='There is no user record corresponding to this identifier. The user may have been deleted.'){
                alert('Usuário não localizado, faça o cadastro');
            }
            
        }
    }

    async function Registrer(e) {
        e.preventDefault();
        try {
            if (email === '') {
                alert('E-mail vazio, por favor insira um endereço de e-mail');
            } else if (password === '') {
                alert('Senha vazia, por favor insira uma senha');
            } else {
                let cadAuth = await firebaseAuth().createUserWithEmailAndPassword(email, password);
                alert('Cadastrado com sucesso');
                console.log(cadAuth);
                alert('Cadastrado com sucesso!');
                history.push('/home');
            }

        } catch (error) {
            if (error.message === 'The email address is badly formatted.') {
                alert('Endereço de email invalido');
            } else if (error.message === 'Password should be at least 6 characters') {
                alert('A senha deve conter no minímo 6 caracteres');
            }else if (error.message === 'The email address is already in use by another account.') {
                alert('E-mail já cadastrado!');
            }
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