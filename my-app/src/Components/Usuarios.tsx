import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqRespListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // async y await no debe de ir en un useEffect
  useEffect(() => {
    reqResApi
      .get<ReqRespListado>("/users")
      .then((resp) => {
        console.log(resp.data.data);
        setUsuarios(resp.data.data);  
      })
      .catch(console.log);
  }, []);

  const renderItem=({id,first_name,last_name,email,avatar}:Usuario)=>{
    return (
      <tr key={id.toString()}>
        <td>
          <img style={{
            width:45,
            borderRadius:100,
            }}
          src={avatar} alt={first_name} />
        </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  }
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
            usuarios.map( renderItem )
            // usuarios.map((usuario:Usuario)=>renderItem(usuario))
          }
        </tbody>
      </table>
      <button
      className="btn btn-primary">
        Siguientes
      </button>
    </>
  );
};
