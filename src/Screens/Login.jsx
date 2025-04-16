import React,{useRef,useEffect,useState} from "react";
import Logo from "../assets/pinterest_profile_330x330-removebg-preview (1).png"
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login(){
    let userRef = useRef(null);
    let passwordRef = useRef(null);
    let navigate = useNavigate();

    const serverLinux = 'http://localhost/RevistaDigital_API';
    const serverWindows = 'http://localhost/RevistaDigital_API'
    async function verifyToken() {
     
      const token2 = await fetch(`${serverWindows}/verify`,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    }

    async function Login(e){
      e.preventDefault();

      try{

          let user = userRef.current.value;
          let password = passwordRef.current.value;

          const data ={
            user_usuario: user,
            senha_usuario: password
          }

          const api = await fetch(`${serverWindows}/login`,{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
          });
          console.log('status',api.status)
          if(api.status == 401){
            navigate("/login");
            Swal.fire({
              title: "Login invalido!",
              icon: "error",
              confirmButtonText: "OK"
            });
          }else{
            navigate("/");
            Swal.fire({
              title: "Sucesso",
              icon: "success",
              confirmButtonText: "OK"
            })
          }
          let response = await api.json();
          let token = response.jwt.token;


          localStorage.setItem('id',response.jwt.payload.id_user)
          localStorage.setItem('token', token)

          console.log(api.status)


         
          verifyToken();

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
            <h2>Login</h2>
            <form>
              <label>
                Usuario
                <input type="text" placeholder=" " ref={userRef} />
              </label>
              <label>
                Senha
                <input type="password" placeholder=" " ref={passwordRef} />
              </label>
              <button type="submit" onClick={(e)=>Login(e)}>Conectar</button>
              <p>Não possui uma conta? <Link to='/cadastrarse'><a className="cadatrarse" href="">cadastre-se</a></Link></p>
            </form>
          </div>
        </div>
      </div>
      
      
    );
}