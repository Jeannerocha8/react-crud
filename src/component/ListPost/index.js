import React, { useEffect, useState } from 'react';
import { firebaseFirestore } from '../../config/firebase';
import './style.css';
import { FaTrash, FaEdit } from 'react-icons/fa';
import Moment from 'moment';
import { useHistory } from "react-router";
import Loading from '../Loading';
import { firebaseAuth } from '../../config/firebase';

function ListPost() {

    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [idUser, setIdUser] = useState('');

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        setLoading(true);

        await firebaseAuth().onAuthStateChanged(user => {
            if (user) {
               firebaseFirestore.collection("post").where('user','==', user.uid).orderBy("date", "desc").get()
                .then(function (querySnapshot) {
                    var tempPosts = [];
                    querySnapshot.forEach(function (docs) {
                        tempPosts = [...tempPosts, { ...docs.data(), id: docs.id }];
                    });
                    setPosts(tempPosts);
                    setLoading(false);
                    console.log(idUser);
                })
                .catch((error) => {
                    console.log('error', `Esse erro :  ${error.message}`);
                });
                
            }else{
                history.push('/');
            }
        });
    }

    const handleDelete = async id => {
        const resultDeleteFirestore = await firebaseFirestore.collection("post").doc(id).delete();
        console.log(resultDeleteFirestore);
        alert("deletado com sucesso");
        loadPosts();
    }

    const handleEdit = id => {
        history.push(`/post${id}`);
    }

    if (loading === true) {
        return <Loading />
    } else {
        return (
            <div className="list-container">
                {posts.map(post => (
                    <div className="listaPost" key={post.id}>
                        <h3> {post.title} </h3>
                        <p>{post.post}</p>
                        <span>{Moment(post.date).format('DD/MM/YYYY hh:mm')}</span>
                        <div>
                            <div></div>
                            <div>
                                <button onClick={() => handleEdit(post.id)} ><FaEdit /></button>
                                <button onClick={() => handleDelete(post.id)}><FaTrash /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ListPost;