import React from "react";
import Evento from "../Components/Evento";
import Destaques from "../Components/Destaques";
import Lembrancas from "../Components/Lembrancas"
export default function Home(){
    return(
        <>
            <Evento></Evento>
            <Destaques></Destaques>
            <Lembrancas></Lembrancas>
        </>
    );
}