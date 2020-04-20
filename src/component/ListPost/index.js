import React, { useEffect, useState } from 'react';
import { firebaseFirestore } from '../../config/firebase';
import './style.css';
import { FaTrash, FaEdit } from 'react-icons/fa';
import Moment from 'moment';


function ListPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);

    function loadPosts() {
        firebaseFirestore.collection("post").orderBy("date", "desc")
            .get()
            .then(function (querySnapshot) {
                var tempPosts = [];
                querySnapshot.forEach(function (docs) {
                    tempPosts = [...tempPosts, { ...docs.data(), id: docs.id }];
                });
                setPosts(tempPosts);
            })
            .catch((error) => {
                console.log('error', error.message);
            });
    }

    return (
        <div className="list-container">
            {posts.map(post => (
                <div className="listaPost" key={post.id}>
                    <h3> {post.user} </h3>
                    <span>{Moment(post.date).format('DD/MM/YYYY')}</span>
                    <p>{post.post}</p>
                    <div>
                        <div></div>
                        <div>
                            <button><FaEdit /></button>
                            <button><FaTrash /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListPost;