import React from 'react';
// import { TiposBasicos } from './Typescript/TiposBasicos';
// import { ObjetosLiterales } from './Typescript/ObjetosLiterales';
// import { Funciones } from './Typescript/Funciones';
// import { Contador } from './Components/Contador';
import { ContadorConHook } from './components/ContadorConHook';

function App() {
  return (
    <div className="m-2">
      <h1>REACT APP</h1>
      <hr />
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/> */}
      {/* <Contador/> */}
      <ContadorConHook/>
    </div>
  );
}

export default App;
