import { useState } from "react"

export const Formularios = () => {
  
    const [formulario, setFormulario] = useState({
        email: 'test@gmail.com',
        password:'12354'
    });
    // funcion 
    const onChange = (value:string,campo:string)=>{
        // Actualizar el estado
        setFormulario({
            // Desestructuro el formulario con el opreador spread 
            ...formulario,
            [campo]:value
        });
    }
    return (
    <>
    <h3>Formularios</h3>

    <input
    type="text"
    className="form-control"
    placeholder="email"
    value={formulario.email}
    onChange={({target})=>onChange(target.value,'email')}
    // onChange={(evento)=>onChange(evento.target.value,'email')}
    />
    <input
    type="text"
    className="form-control mt-2 mb-2"
    placeholder="password"
    value={formulario.password}
    onChange={({target})=>onChange(target.value,'password')}
    />
    <code>
        <pre>{JSON.stringify(formulario,null,2)}</pre>
    </code>
    </>
  )
}
