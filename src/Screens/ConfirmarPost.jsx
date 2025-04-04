import React,{useEffect,useState} from "react";
import Evento from "../Components/Evento";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Confirmar(){

    const [materias,setMateria] = useState([]);


    const backend = 'http://localhost/RevistaDigital_API';

    useEffect(()=>{
        getNull()
    },[]);

    async function getNull() {
        const api = await fetch(`${backend}/posts/null`);

        const data = await api.json();

        setMateria(data)
        console.log(materias);
    }
    async function deleteNull(id){
        try{
            const response = await fetch(`${backend}/posts/${id}`,{
                method: 'DELETE',
            });

            getNull();
        }catch(error){
            console.error('Erro', error);
        }
    }
    async function updateNull(id){
        try{
            const data={
                status_post: 1,
            }
            const response = await fetch(`${backend}/posts/${id}`,{
                method: 'PATCH',
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(data),
            })
            console.log('clicou')
            getNull();
        }catch(error){
            console.error('Erro',error);
        }
      
    }
    

    return(
            <>
            <Evento></Evento>
             <div className="titulo">
            <h3>Posts a confirmar</h3>
        </div>
            <div id="view-posts" className="view-posts">
                {materias.map((post)=>
                                    <div className="card-post-view" key={post.id_post}>
                                    <div className="image-post-view">
                                        <Link to={{pathname: `/noticia/${post.id_post}`}}><img src={post.foto_post} alt="" /></Link>
                                    </div>
                                    <div className="info-post-view">
                                            <div className="title">
                                                <p className="p-confirm">
                                                    {post.titulo_post}
                                                </p>
                                                <div className="btnn">
                                                    <button className="btn btn-success btn-style" onClick={()=>updateNull(post.id_post)}>Aceitar</button>
                                                    <button className="btn btn-danger btn-style" onClick={()=>deleteNull(post.id_post)} >Recusar</button>
                                                </div>
                                               
                                            </div>
                
                                    </div>
                                    
                                </div>
                )}
            </div>

            </>
        
    );
}
