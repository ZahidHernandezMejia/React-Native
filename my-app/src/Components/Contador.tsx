import React, { useState } from 'react'

export const Contador = () => {



    const [valor, setValor] = useState(0)

    const acumular = (numero: number) =>{
        setValor(valor+numero);
    }

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
