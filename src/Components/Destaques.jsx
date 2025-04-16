import React,{useState,useEffect} from "react";
import Evento from "../assets/evento.png";
import { Link } from "react-router-dom";
export default function Destaques(){
    const [data,innerData] = useState([]);
    useEffect(()=>{
        async function getDestaques(){
            const api = await fetch('http://10.188.34.134:8000/cesar-ferreira/RevistaDigital_API/posts');
    
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
                {data.slice(0,4).map((noticia) => 
                     <div key={noticia.id_post} className="not">
                     <Link className="link" to={{pathname: `/noticia/${noticia.id_post}`}}><img src={noticia.foto_post} alt="" /></Link>
                     <h5  className="title-not">{noticia.titulo_post}</h5>
                 </div>

                )};
            </div>
           

        </div>
    );
}