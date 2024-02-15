import React from "react";

export const TiposBasicos = () => {
    const nombre: string = "Zahid";
    const edad: number = 20;
    const estaActivo: Boolean = true;

    const poderes: String[] = ["Correr", "Volar"];

    return (
    <>
    <h3>Tipos basicos</h3>
        {nombre} {edad} {(estaActivo)? 'Esta on' : 'Esta Off'}
        <br />
        {poderes.join(', ')}
    
    </>
    );
};
