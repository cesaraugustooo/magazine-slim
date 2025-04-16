import React,{useEffect, useState} from "react";
import menu from '../assets/menu.png';
import logo from '../assets/image-removebg-preview (10).png';
import { BrowserRouter, Link } from "react-router-dom";

export default function Menu() {
    const [user,setUser] = useState([]);
    async function getUser(){
        try{
        const api = await fetch(`http://localhost/RevistaDigital_API/users/${localStorage.getItem('id')}`);
        const data = await api.json();

        setUser(data)
        }catch(error){
            console.error('Erro', error)
        }

    }
    useEffect(()=>{
        getUser();
    },[])
    return (
        <>
            <div className="menu-div">
                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                </a>
            </div>
           
            <Link to='/perfil'><div className="logo">
                <img className="profile-pic2" src={user.foto_usuario} alt="" />
            </div>
            </Link>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="column">
                        <ul className="list-group">
                            <li className="list-group-item hover"><Link to='/'>Inicio</Link> </li>
                            <li className="list-group-item hover"><Link to='/postar'>Postar</Link> </li>
                            <li className="list-group-item hover"><Link to='/confirmar'>Confirmar Posts</Link></li>
                        </ul>
                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Materias
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to='noticias/1' className="dropdown-item">Historia</Link></li>
                            <li><Link to='noticias/2' className="dropdown-item" >Matematica</Link></li>
                            <li><Link to='noticias/3' className="dropdown-item" >Ciencias</Link></li>
                            <li><Link to='noticias/4' className="dropdown-item" >Quimica</Link></li>
                            <li><Link to='noticias/5' className="dropdown-item" >Fisica</Link></li>
                            <li><Link to='noticias/6' className="dropdown-item" >Linguagens</Link></li>
                            <li><Link to='noticias/7' className="dropdown-item" >Geografia</Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}