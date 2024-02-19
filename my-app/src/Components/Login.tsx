import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

type LoginPayload = {
  username: string;
  nombre: string;
};
// La accion usamos un tipo de typescript porque no se expanden ,son planos a comparacion de una interfaz
// Las acciones tienen 2 propiedades el tipo y payload
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

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
    case "login":
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: "123",
        nombre: nombre,
        username,
        // nombre:action.payload.nombre,
        // username: action.payload.username
        // ...state
      };
    default:
      return state;
  }
};

// El useReducer cuando hay un estado mas elaborado y puede cambiar de distintas maneras
export const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initalState
  );
  //   Para disparar efectos secundarios , cuando no le ponemos dependencia solo se ejecuta
  //   una vez cuando se renderea por primera vez el componente
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login=()=>{
    dispatch({
        type:'login',
        payload:{
            nombre:'Zahid',
            username:'zahidlol',
        }
    })
  }


  const logout=()=>{
    dispatch({
        type:'logout'
    })
  }
  
  if (validando) {
    return (
      <>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado como:{nombre}</div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      ) : (
        <button className="btn btn-primary" onClick={login}>Login</button>
      )}
    </>
  );
};
