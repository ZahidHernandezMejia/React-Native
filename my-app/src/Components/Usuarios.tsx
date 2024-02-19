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
      })
      .catch(console.log);
  }, []);

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
          <tr>
            <td>Yoyo</td>
            <td>Fuck</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
