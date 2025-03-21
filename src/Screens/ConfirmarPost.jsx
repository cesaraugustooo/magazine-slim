import React,{useEffect,useState} from "react";
import Evento from "../assets/evento.png";
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
            <div id="view-posts" className="view-posts">
                {materias.map((post)=>
                                    <div className="card-post-view" key={post.id_post}>
                                    <div className="image-post-view">
                                        <img src={post.foto_post} alt="" />
                                    </div>
                                    <div className="info-post-view">
                                            <div className="title">
                                                <p>
                                                    {post.titulo_post}
                                                </p>
                                                <div className="btnn">
                                                    <button className="btn btn-success" onClick={()=>updateNull(post.id_post)}>Aceitar</button>
                                                    <button className="btn btn-danger" >Recusar</button>
                                                </div>
                                               
                                            </div>
                
                                    </div>
                                    
                                </div>
                )}
            </div>
            </>
        
    );
}
