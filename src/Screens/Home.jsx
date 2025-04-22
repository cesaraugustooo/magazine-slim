import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Evento from "../Components/Evento";
import Destaques from "../Components/Destaques";
import Lembrancas from "../Components/Lembrancas"
import Footer from "../Components/Footer";
import Swal from "sweetalert2";

export default function Home(){
    const [token,setToken] = useState([]);
    let navigate = useNavigate();
    async function verifyToken(){
        try{
            
            if(localStorage.getItem('token')){
                console.log('ok')
            }else{
                Swal.fire({
                    title: "Login não realizado",
                    icon: "error",
                    confirmButtonText: "OK"
                  })
                navigate('/')
            }
        }catch(error){
            console.error('Erro',error);
        }
    }
    useEffect(()=>{
        verifyToken();
    })
    return(
        <>
            <Evento></Evento>
            <Destaques></Destaques>
            <Lembrancas></Lembrancas>
        </>
    );
}