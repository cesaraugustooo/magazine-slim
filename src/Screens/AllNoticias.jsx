import React,{useState,useEffect} from "react";

export default function Matematicas(){
    const [noticias,setNoticias] = useState([]);

    const backend = 'http://localhost/RevistaDigital_API';
    let url = window.location.pathname;

    let route = url.replace("/noticias")
    console.log(route)

    useEffect(()=>{
        getNoticias();
    },[])
    async function getNoticias() {
        try{

            const response = await fetch(`${backend}/posts`)
            const data = await response.json();
            setNoticias(data);

        }catch(error){
            console.error('Erro',error);
        }
    } 
    return(
        <>
        
        
        </>
    );
}