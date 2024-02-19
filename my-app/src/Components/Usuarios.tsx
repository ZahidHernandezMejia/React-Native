import { useEffect } from "react";
import { reqResApi } from "../api/reqRes";

export const Usuarios = () => {
  // async y await no debe de ir en un useEffect
  useEffect(() => {
    reqResApi
      .get("/users")
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
