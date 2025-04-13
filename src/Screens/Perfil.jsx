import React,{ useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";

export default function Perfil(){
    const [user,setUser] = useState([]);
    const [post,setPost] = useState([]);

    let fotoRef = useRef(null);

    async function openModal(){
        let modal = document.getElementById('modal');
        let btn = document.getElementById('btn')
        let btn2 = document.getElementById('btn2')

        btn.addEventListener("click",()=>{
            modal.style.display = 'flex';
        })
        btn2.addEventListener("click",()=>{
            modal.style.display = 'none';
        })


       
        
    }

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
    async function postImage(event){
        event.preventDefault();
        try{
            let formData = new FormData();
            formData.append('file',fotoRef.current.files[0]);


            const api = await fetch(`http://localhost/RevistaDigital_API/posts/images`,{
                method: 'POST',
                body: formData
            });
            const data = {
                foto_usuario: `http://localhost/RevistaDigital_API/images/${fotoRef.current.files[0].name}`
            }
            const api2 = await fetch(`http://localhost/RevistaDigital_API/users/${localStorage.getItem('id')}`,{
                method: 'PUT',
                body: JSON.stringify(data)
            });
            
            getUser()
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
            <button id="btn" className="btn-upload" onClick={openModal}>Atualizar Foto</button>
            </div>
        </div>
        }
        <div className="row-perfil">
            <div className="seus-posts"><h1>Seus posts</h1></div>
            <div className="espaco">
                {post.map((postagem)=>(
                    <div className="meus-posts"  key={postagem.id_post}><Link to={{pathname: `/noticia/${postagem.id_post}`}}><img src={postagem.foto_post} alt="" /></Link></div>
                    
                ))}
            </div>
            
        </div>
        <div id="modal" className="modal">
        <h5 id="btn2">X</h5>
        <form method="post" id="uploadForm" enctype="multipart/form-data">
          <div className="mb-3">
            <h4>Escolha uma foto</h4>
            <input className="form-control" type="file" id="foto" name="foto" ref={fotoRef}  required />
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={postImage}>Carregar</button>
        </form>
        </div>
        </>

    );

}
