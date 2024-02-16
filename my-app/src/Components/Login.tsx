import { useReducer } from "react"

interface initialState{
    
}

// Como va a ser mi estado inicial 
const initalState = {
    validando:true,
    token:null,
    username:'',
    nombre:'',
}
// Debe de retornar siempre un estado del mismo tipo del initalState
const authReducer=():initalState=>{

}

// El useReducer cuando hay un estado mas elaborado y puede cambiar de distintas maneras
export const Login = () => {
    const [state, dispatch] = useReducer(reducer,initalState);
  return (
    <>
    <h3>Login</h3>

    <div className="alert alert-info">
        Validando...
    </div>
    <div className="alert alert-danger">
        No autenticado
    </div>
    <div className="alert alert-success">
        Autenticado :D
    </div>

    <button className="btn btn-primary">
        Login 
    </button>

    <button className="btn btn-danger">
        Logout 
    </button>


    </>
  )
}
