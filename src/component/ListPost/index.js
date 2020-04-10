import React, { useEffect, useState } from 'react';
import { firebaseFirestore } from '../../config/firebase';
import './style.css';
function ListPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);

    function loadPosts() {
        console.log('Carregando posts ...');
        firebaseFirestore.collection("post")
            .get()
            .then(({ docs }) => {
                console.log(docs);
                setPosts(docs);
            })
            .catch((error) => {
                console.log('error', error.message);
            });
    }

    return (
        <div className ="listaPost">

            <ul> 
                {posts.map(post => (
                    <div key={post.id}>
                        <li className ='posts'>
                            <h3> {post.id} </h3>
                            <div>
                                <button>Editar</button>
                                <button>Excluir</button>
                            </div>
                        </li>
                    </div>
                ))}                
            </ul>
        </div>
    );
}

export default ListPost;