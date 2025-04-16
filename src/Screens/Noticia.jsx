import React,{useEffect,useState,useRef} from "react";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import evento2 from "../assets/evento2.jpg"
import Comentarios from "../Components/Comentarios";
import Swal from "sweetalert2";

export default function InNoticia(){
    const [noticia,setNoticia] = useState([]);
    const [comentario,setComentario] = useState([]);
    const {param} = useParams();
    let comentarioRef = useRef(null);

    const serverLinux = 'http://10.188.34.134:8000/cesar-ferreira/RevistaDigital_API';
    const serverWindows = 'http://localhost/RevistaDigital_API'
    
    useEffect(()=>{
        getId(param);
        getComentarios(param)
    },[param])

    async function getId(id){
        const api = await fetch(`${serverLinux}/posts/${id}`)
        const response = await api.json();

        setNoticia(response);

    }async function getComentarios(id){
        const api = await fetch(`${serverLinux}/comentarios/idpost/${id}`)
        const response = await api.json();

        setComentario(response);
    }
    async function postarComentarios(event){

        event.preventDefault();
        const data ={
            conteudo_comentario: comentarioRef.current.value,
            categorias_id_categoria: 1,
            usuarios_id_usuario: parseInt(localStorage.getItem('id')),
            posts_id_post: parseInt(param)
        }
            const api = await fetch(`${serverLinux}/comentarios`,{
                method: 'POST',
                body: JSON.stringify(data)
            })
            console.log(api.response);
            if(api.status == 401){
                Swal.fire({
                  title: "Comentario invalido!",
                  icon: "error",
                  confirmButtonText: "OK"
                });
              }else{
                Swal.fire({
                  title: "Comentario enviado!",
                  icon: "success",
                  confirmButtonText: "OK"
                })
              }
              getComentarios(param);

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
                <div className="comentario-container">

  <div className="barra-comentario">
    <input
      ref={comentarioRef}
      type="text"
      placeholder="Escreva um comentário..."
      className="input-comentario"
    />
    <button className="btn-comentar" onClick={(event)=>postarComentarios(event)}>Comentar</button>
  </div>

  <div className="comentario-lista">
    {comentario.length > 0 ?comentario.map((comentarios)=>(
     <div className="comentario">
     <div className="user-info">
        <div className="img-com">
            <img src={comentarios.foto_usuario} alt="" />
        </div>
        <h5>{comentarios.user_usuario}</h5>
     </div>
     <div className="conteudo">
        {comentarios.conteudo_comentario}
     </div>
     </div>
    )):<h3>Ninguem comentou ainda</h3>}
  </div>
</div>
            </div> 
            }
            
         
           
        </>
    );
}