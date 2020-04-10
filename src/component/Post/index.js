import React, { useState } from 'react';
import './style.css';
import { firebaseFirestore } from '../../config/firebase';

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
            console.log('Scesso')
        }).catch(error => {
            console.log('Erro: ' + error.message)
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
                <button>Postar</button>
            </form>
        </div>
    );
}

export default Post;