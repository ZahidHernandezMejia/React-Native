

import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import {ReqRespListado,Usuario} from "../interfaces/reqRes";
export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    // Referencia a una variable que si cambia su valor sigue
    // siendo la misma pero no dispara el procedimiento para renderizar el componente
    const paginaRef = useRef(1);
  
    // async y await no debe de ir en un useEffect
    useEffect(() => {
      // llamado de api
      return()=>{
        cargarUsuarios();
      }
    }, []);
    // Ponemos el return dentro del useEffect o bien hacemos otra funcion que ponemos en el onClick
    // const handleSiguienteClick = () => {
      // paginaRef.current++;
      // cargarUsuarios();
    // };
    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqRespListado>("/users", {
        params: {
          // :Objeto.Valor
          page: paginaRef.current,
        },
      });
  
      if (resp.data.data.length > 0) {
        setUsuarios(resp.data.data);
        console.log("Entra al set"+paginaRef.current);
      } else {
        // Se disminuye la pagina para que no vaya a una pagina donde no tiene registros 
        paginaRef.current--;
        alert("No hay mas usuarios");
        console.log("Entro al else "+paginaRef.current);
      }
      
    };


    const paginaSiguiente=()=> {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior=()=> {
        if(paginaRef.current>1){
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        // cargarUsuarios
        paginaSiguiente,
        paginaAnterior
    }
}
