import React from "react";

export default function Footer(){
    return(
                
        <footer class="footer text-center">
            <div className="container c">
                <div class="row5">
                    <div className="colum">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-geo-alt-fill b " viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                        <p className="mb-0 b"> Endereço: R. José Gomes, 1341 - Reg. Feijó, SP, 19570-000 </p>
                    </div>
                    <div className="colum">
                    <i class="fa-solid fa-scale-balanced icon-font b"></i>
                        <p className="mb-0 b"> SLIM | © 2025 Todos os direitos reservados.    </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}