import { Usuario } from "../interfaces/reqRes";
import { useUsuarios } from '../hooks/useUsuarios';

//CustomHook
export const Usuarios = () => {
  // usamos el custom hook 
  const {usuarios,paginaAnterior,paginaSiguiente}=useUsuarios();


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
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anteriores
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={paginaSiguiente}>
        Siguientes
      </button>
    </>
  );
};
