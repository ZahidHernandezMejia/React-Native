import { useForm } from '../hooks/useForm';

export const Formularios = () => {
    const {formulario,email,password,onChange}=useForm({
        email: 'test@gmail.com',
        password:'12354'
    }); 
   
    return (
    <>
    <h3>Formularios</h3>

    <input
    type="text"
    className="form-control"
    placeholder="email"
    value={email}
    onChange={({target})=>onChange(target.value,'email')}
    // onChange={(evento)=>onChange(evento.target.value,'email')}
    />
    <input
    type="text"
    className="form-control mt-2 mb-2"
    placeholder="password"
    value={password}
    onChange={({target})=>onChange(target.value,'password')}
    />
    <code>
        <pre>{JSON.stringify(formulario,null,2)}</pre>
    </code>
    </>
  )
}
