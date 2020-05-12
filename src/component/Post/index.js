import React, { useState } from 'react';
import './style.css';
import { firebaseFirestore } from '../../config/firebase';
import { FaSave } from 'react-icons/fa';


function Post() {
    const [user, setUser] = useState('');
    const [post, setPost] = useState('');

   async function addPost(e)  {
        e.preventDefault();
      await  firebaseFirestore.collection(`post`).add({
            date: Date.now(),
            user,
            post
        }).then(() => {
            alert('Salvo com sucesso');
           
        }).catch(error => {
            alert('Erro: ' + error.message)
        });    

    }
   

    return (
        <div>
            <form className='formPost' onSubmit={addPost}>
                <input
                    type="text"
                    placeholder="Usuário"
                    value={user}
                    onChange={e => setUser(e.target.value)}>
                </input>
                <textarea placeholder="Em que você está pensando?"
                    value={post}
                    onChange={e => setPost(e.target.value)}>
                </textarea>
                <div>
                    <div></div>
                    <div>
                        <button ><FaSave className='icon' /> Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}


export default Post;