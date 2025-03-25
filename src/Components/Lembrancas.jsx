import React from "react";
import Evento from "../assets/evento.png";
import Literario from "../assets/evento-literario.png"
export default function Lembrancas(){

    return(
        <div className="destaques">
            <div className="row-destaques">
                <h3>Lembranças</h3>
                <div className="hr-destaques"></div>
            </div>
                <div className="carrosel">

               
                <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Literario} alt="" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src={Literario} alt="" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src={Literario} alt="" className="d-block w-100" />
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
        </div>
        

        
    );
}