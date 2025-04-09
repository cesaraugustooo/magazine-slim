import React,{useRef,useEffect,useState} from "react";
import Logo from "../assets/pinterest_profile_330x330-removebg-preview (1).png"
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cadastrarse(){
    let user = useRef(null);
    let senha = useRef(null);
    let navigate = useNavigate();
    
    async function postUser(e){
      e.preventDefault();
      try{
        const data ={
          user_usuario: user.current.value,
          senha_usuario: senha.current.value,
          nivel: 'Usuario'
        }
        const api = await fetch('http://localhost/RevistaDigital_API/users',{
          method: 'POST',
          body: JSON.stringify(data)
        })
        navigate('/login');
      }catch{

      }
     
    }
  

    

    return(
        <div className="tela">
        <div className="container">
          <div className="logo1">
            <img src={Logo} alt="Logo" />
          </div>
          <div id="login" className="login-box">
            <h2>Cadastro</h2>
            <form>
              <label>
                Usuario
                <input type="text" placeholder=" " ref={user} />
              </label>
              <label>
                Senha
                <input type="password" placeholder=" " ref={senha} />
              </label>
              <button type="submit" onClick={(e)=>postUser(e)}>Cadastrar-se</button>
            </form>
          </div>
        </div>
      </div>
      
      
    );
}