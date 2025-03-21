import React,{useEffect,useState} from "react";
import Evento from "../assets/evento.png";
export default function Confirmar(){

    const [materias,setMateria] = useState([]);


    const backend = 'http://localhost/RevistaDigital_API';
    
    
    
    useEffect(()=>{
        const card = document.getElementById('view-posts')
        async function getNull() {
            const api = await fetch(`${backend}/posts/null`);

            const data = await api.json();

            setMateria(data)
            console.log(materias);
        }

        getNull()
    },[]);
    return(
        
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
                                                    <button className="btn btn-success">Aceitar</button>
                                                    <button className="btn btn-danger">Recusar</button>
                                                </div>
                                               
                                            </div>
                
                                    </div>
                                    
                                </div>
                )}
            </div>
        
    );
}
