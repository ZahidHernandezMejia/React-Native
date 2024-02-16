import { useState } from "react";

// Un hook es una funcion 
export const useCounter = (inicial:number=0) => {

    const [valor, setValor] = useState(0);

    const acumular = (numero: number) =>{
        setValor(valor+numero);
    }

    // objeto literal 
    return {
        valor,
        acumular
    }
}
