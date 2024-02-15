import React from "react";
// type: class:crea instancias interface:mas facil de expander que type
//una interfaz es para poner reglas de vaiidacion al objeto ,no sirve para crear una instancia la clase si
// Interfaces para decir como lucen los objetos
interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
}
interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  //    Objeto
  const persona: Persona = {
    nombre: "Fernando",
    edad: 35,
    direccion: {
      pais: "Canada",
      casaNo: 215,
    },
  };

  return (
    <>
      <h3>ObjetosLiterales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
