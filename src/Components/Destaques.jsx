import React,{useState,useEffect} from "react";
import Evento from "../assets/evento.png";

export default function Destaques(){
    const [data,innerData] = useState([]);
    useEffect(()=>{
        async function getDestaques(){
            const api = await fetch('http://localhost/RevistaDigital_API/posts');
    
            const data = await api.json();

            innerData(data);

        }
        getDestaques();
    },[]);
   

    return(
        <div className="destaques">
            <div className="row-destaques">
                <h3>Destaques</h3>
                <div className="hr-destaques"></div>
            </div>
            <div className="row-noticias" id="noticias-home">
                {data.slice(13,16).map((post) => 
                    <div className="card" key={post.id_post}>
                            <img src={post.foto_post} className="imgCard" alt={post.titulo_post} />
                            <div className="card-body">
                                <p className="card-text">{post.titulo_post}</p>
                            </div>
                        </div>

                )};
            </div>
           

        </div>
    );
}