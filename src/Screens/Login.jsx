import React from "react";
import Logo from "../assets/pinterest_profile_330x330-removebg-preview (1).png"
export default function Login(){
    return(
        <div className="tela">
        <div className="container">
          <div className="logo1">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="login-box">
            <h2>Login</h2>
            <form>
              <label>
                E-mail
                <input type="email" placeholder=" " />
              </label>
              <label>
                Senha
                <input type="password" placeholder=" " />
              </label>
              <button type="submit">Conectar</button>
              <p>Não possui uma conta? <a className="cadatrarse" href="">cadastre-se</a></p>
            </form>
          </div>
        </div>
      </div>
      
      
    );
}