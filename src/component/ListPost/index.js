import React, { useEffect, useState } from 'react';
import { firebaseFirestore } from '../../config/firebase';

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
        <div>
            <h1>Minha lista de posts</h1>
            <ul>
                {posts.map(post => (
                    <div key={post.id}>
                        <h3> {post.id} </h3>
                    </div>
                    
                ))}
            </ul>
        </div>
    );
}

export default ListPost;