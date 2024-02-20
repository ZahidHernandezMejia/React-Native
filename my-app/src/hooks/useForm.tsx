import { useState } from "react";

export const useForm = <T extends Object> (formulario: T ) => {
    const [state, setState] = useState(formulario);
    // funcion 
    const onChange = (value:string,campo:keyof T)=>{
        // Actualizar el estado
        setState({
            // Desestructuro el formulario con el opreador spread 
            ...state,
            [campo]:value
        });
    }

    return {
        ...state ,
        formulario: state,
        onChange,
    }
}
