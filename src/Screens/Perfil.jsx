import React,{use, useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function Perfil(){
    const [user,setUser] = useState([]);
    const [post,setPost] = useState([]);

    async function getUser(){
        try{
        const api = await fetch(`http://localhost/RevistaDigital_API/users/${localStorage.getItem('id')}`);
        const data = await api.json();

        setUser(data)
        }catch(error){
            console.error('Erro', error)
        }

    }
    async function uploadFoto(){

        try{
            const api = await fetch(`http://localhost/RevistaDigital_API/user/${localStorage.getItem('id')}`,{
                method: 'POST'
                 
            });
    
        }catch(error){
            console.error('Erro', error)
        }
    }
    async function getPosts(){
        try{
            const api = await fetch(`http://localhost/RevistaDigital_API/posts/user/${localStorage.getItem('id')}`);
            const data = await api.json();
    
            setPost(data)
        }catch(error){
            console.error('Erro', error)
        }
    }
    useEffect(()=>{
        getUser();
        getPosts();
    },[])
    return(
        <>
        {
        <div class="profile-card">
            <img className="profile-pic" src={user.foto_usuario} alt="" />
            <div className="profile-info">
            <h2>{user.user_usuario}</h2>
            <button className="btn-upload">Atualizar Foto</button>
            </div>
        </div>
        }
        <div className="row-perfil">
            <div className="seus-posts"><h1>Seus posts</h1></div>
            <div className="espaco">
                {post.map((postagem)=>(
                    <div className="meus-posts"><Link to={{pathname: `/noticia/${postagem.id_post}`}}><img src={postagem.foto_post} alt="" /></Link></div>
                    
                ))}
            </div>
        </div>
        <div className="modal">
            
        </div>
        </>

    );

}
