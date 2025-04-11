import React,{useEffect,useState} from "react";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import evento2 from "../assets/evento2.jpg"
import Comentarios from "../Components/Comentarios";


export default function InNoticia(){
    const [noticia,setNoticia] = useState([]);
    const {param} = useParams();

    useEffect(()=>{
        getId(param);
    },[param])

    async function getId(id){
        const api = await fetch(`http://localhost/RevistaDigital_API/posts/${id}`)
        const response = await api.json();

        setNoticia(response);
    }
    console.log(noticia)
    return(
        <>  {
            <div className="row-not">
                <h2>{noticia.titulo_post}</h2>
                <h5>{noticia.sub_titulo_post}</h5>
                <br/>
                <img src={noticia.foto_post} alt="" />
                <br/>
                <p>{noticia.descricao_post}</p>
                <br/>
                <img src={noticia.sub_foto_post} alt="" />
                <br/>
                <p>{noticia.sub_descricao_post}</p>
                <br/>
                <div className="coment">
            </div>
            </div> 
            }
            
         
           
        </>
    );
}