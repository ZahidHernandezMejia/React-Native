import { useCounter } from '../hooks/useCounter'

export const ContadorConHook = () => {
  // Desestructuramos el custom hook 
  const {valor,acumular}= useCounter();



  return (
    <>
    <h3>Contador</h3>
    <small>{valor}</small>
    <br />
    <button className='btn btn-primary' onClick={()=>{acumular(1)}}>+1</button>
    <button className='btn btn-primary' onClick={()=>{acumular(-1)}}>-1</button>

    </>
  )
}
