import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqRespListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
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
      paginaRef.current++;
      console.log(paginaRef.current);
    } else {
      alert("No hay mas usuarios");
    }
    
  };
  const renderItem = ({
    id,
    first_name,
    last_name,
    email,
    avatar,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            style={{
              width: 45,
              borderRadius: 100,
            }}
            src={avatar}
            alt={first_name}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Usuarios</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Avatar</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(renderItem)
            // usuarios.map((usuario:Usuario)=>renderItem(usuario))
          }
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={cargarUsuarios}>
        Siguientes
      </button>
    </>
  );
};
