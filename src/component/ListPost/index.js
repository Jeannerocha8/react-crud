import React, { useEffect, useState } from 'react';
import { firebaseFirestore } from '../../config/firebase';
import './style.css';
import {FaTrash} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';


function ListPost() {
    const [posts, setPosts] = useState([]);
   

   useEffect(() => {
        loadPosts();
    }, []);

     function loadPosts() {
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
                            <h3> {post.data().post} </h3>
                            
                                <button><FaEdit/></button>
                                <button><FaTrash/></button>
                            
                        </li>
                    </div>
                ))}                
            </ul>
        </div>
    );
}

export default ListPost;