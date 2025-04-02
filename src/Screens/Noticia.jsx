import React,{useEffect,useState} from "react";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import evento2 from "../assets/evento2.jpg"


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
        <>  {noticia.length > 0 ?
            <div className="row-not">
                <h3>{noticia.titulo_post}</h3>
                <img src={noticia.foto_post} alt="" />
                <p>{noticia.descricao_post}</p>
                <img src={noticia.sub_foto_post} alt="" />

            </div>
:<h2>Noticia não encontrada</h2>}
        </>
    );
}