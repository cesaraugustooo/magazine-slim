import React,{use, useEffect, useState} from "react";

export default function Perfil(){
    const [user,setUser] = useState([]);

    async function getUser(){
        try{
        const api = await fetch(`http://localhost/RevistaDigital_API/users/${localStorage.getItem('id')}`);
        const data = await api.json();

        setUser(data)
        }catch(error){
            console.error('Erro', error)
        }

    }
    useEffect(()=>{
        getUser();
    })
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
        </>
    );

}
