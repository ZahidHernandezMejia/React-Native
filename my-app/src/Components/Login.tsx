import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}
// La accion usamos un tipo de typescript porque no se expanden ,son planos a comparacion de una interfaz
// Las acciones tienen 2 propiedades el tipo y payload
type AuthAction = { type: "logout" };

// Como va a ser mi estado inicial
const initalState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};
// Debe de retornar siempre un estado del mismo tipo del initalState
// En un reducer el state no se debe mutar ,si fuera un arreglo no hacemos un push porque modifica el estado
// si hacemos eso tenemos que regrear otro estado

// Auth reducer tiene que regresar algo de Authstate
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      // Tiene que cumplir con la interfaz
      return {
        validando: false,
        token: null,
        nombre: "",
        username: "",
      };
    default:
      return state;
  }
};

// El useReducer cuando hay un estado mas elaborado y puede cambiar de distintas maneras
export const Login = () => {
  const [{validando}, dispatch] = useReducer(authReducer, initalState);
//   Para disparar efectos secundarios , cuando no le ponemos dependencia solo se ejecuta 
//   una vez cuando se renderea por primera vez el componente
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <div className="alert alert-danger">No autenticado</div>
      <div className="alert alert-success">Autenticado :D</div>

      <button className="btn btn-primary">Login</button>

      <button className="btn btn-danger">Logout</button>
    </>
  );
};
