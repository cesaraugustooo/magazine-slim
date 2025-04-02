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
                {data.slice(0,3).map((noticia) => 
                     <div key={noticia.id_post} className="not">
                     <img src={noticia.foto_post} alt="" />
                     <h5  className="title-not">{noticia.titulo_post}</h5>
                 </div>

                )};
            </div>
           

        </div>
    );
}