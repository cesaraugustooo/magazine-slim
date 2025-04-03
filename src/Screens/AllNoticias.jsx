import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";

export default function Noticia() {
    const [noticias, setNoticias] = useState([]);
    const [nomeCategoria, setCategoria] = useState([]);

    const endpointPost = "http://localhost/RevistaDigital_API/posts/categoria";
    const endpointCategoria = "http://localhost/RevistaDigital_API/categorias";

    let { id } = useParams();
    let path = `noticia/${id}` 

    useEffect(()=>{
        setTimeout(()=>{
            getNameCategoria(id)
        },500)
    },[id])

    useEffect(() => {
        setTimeout(()=>{
            getNoticias(id);

        },200)
    }, [id]);

    async function getNoticias(id) {
        try {
            const response = await fetch(`${endpointPost}/${id}`);

            const data = await response.json();

            setNoticias(data);
        } catch (error) {
            console.error("Erro", error);
        }
    }
    async function getNameCategoria(id) {
        try {
            const responseCategoria = await fetch(`${endpointCategoria}/${id}`);

            const dataCategoria = await responseCategoria.json();

            setCategoria(dataCategoria);
        } catch (error) {
            console.error("Erro", error);
        }
    }
    return (
        <>
            <div className="titulo">
                <h3>{nomeCategoria.nome_categoria || "Carregando..."}</h3>
            </div>
            <div className="row-getcate">
                {noticias.length > 0 ?  noticias.map((noticia) => (
                    <div key={noticia.id_post} className="not">
                        <Link to={{pathname: `/noticia/${noticia.id_post}`}}><img src={noticia.foto_post} alt="" />
                       </Link>
                        <h5  className="title-not">{noticia.titulo_post}</h5>
                    </div>
                )):<h3>Nenhuma noticia cadastrada</h3>}
            </div>
        </>
    );
}
