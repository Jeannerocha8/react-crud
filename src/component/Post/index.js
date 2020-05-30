import React, { useEffect, useState } from 'react';
import './style.css';
import { firebaseFirestore } from '../../config/firebase';
import { FaSave } from 'react-icons/fa';
import Loading from '../Loading';
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router";
import { firebaseAuth } from '../../config/firebase';

function Post(props) {
    const [user, setUser] = useState('');
    const [post, setPost] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    var { id } = props.match.params;
   

    useEffect(() => {
        loadPosts();
        loadUser();
    }, []);

    const loadPosts = async () => {
        if (id) {
            const doc = await firebaseFirestore.collection("post").doc(id).get();
            var tempPost = { ...doc.data(), id: doc.id };
            setPost(tempPost.post);
            setTitle(tempPost.title);
            console.log(post);
        } else {
            console.log("não possui id");
        }
    }

    const loadUser = async () => {
        await firebaseAuth().onAuthStateChanged(user => {
            if (user) {
                setUser(user.uid);
            }
        });
    }

    async function addPost(e) {
        e.preventDefault();
        setLoading(true);
        if (id) {
            console.log("caiu no props  edição");
            const resultStorageUpdate = await firebaseFirestore.collection('post').doc(id).update({
                date: Date.now(),
                user,
                title,
                post
            }).then(() => {
                alert('Alterado com sucesso');
                history.push('/home');
                setLoading(false);
            }).catch(error => {
                alert('Erro: ' + error.message)
            });
        } else {
            firebaseFirestore.collection(`post`).add({
                date: Date.now(),
                user,
                title,
                post
            }).then(() => {
                alert('Salvo com sucesso');
                window.location.reload();
            }).catch(error => {
                alert('Erro: ' + error.message)
            });
        }
    }

    if (loading === true) {
        return <Loading />
    } else
        return (
            <div>
                <form className='formPost' onSubmit={addPost}>
                    <input
                        id="text"
                        required="required"
                        type="text"
                        placeholder="Titulo"
                        value={title}
                        onChange={e => setTitle(e.target.value)}>
                    </input>
                    <textarea placeholder="Em que você está pensando?"
                        id='textarea'
                        type="text"
                        value={post}
                        onChange={e => setPost(e.target.value)}>
                    </textarea>
                    <div>
                        <div></div>
                        <div>
                            <button><FaSave className='icon' /> Save</button>
                        </div>
                    </div>
                </form>
            </div>
        );
}
export default withRouter(Post);