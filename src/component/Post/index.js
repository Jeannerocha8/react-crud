import React, { useState } from 'react';
import './style.css';
import { firebaseFirestore } from '../../config/firebase';
import  {FaSave} from 'react-icons/fa';
function Post() {
    const [user, setUser] = useState('');
    const [post, setPost] = useState('');

    function addPost(e) {
        e.preventDefault();
        console.log(user + post);
        firebaseFirestore.collection(`post`).add({
            user: user,
            post: post
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
                <button><FaSave className='icon'/> Save</button>
            </form>
        </div>
    );
}

export default Post;