import React, { useState } from "react";
import '../estilos/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }
    const manejarEnvio = e => {
        e.preventDefault();//evita que la aplicacion se vuelva a cargar
        const tareaNueva = {
            id: uuidv4(),//npm id unico
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }

    return (

        <form className="tarea-formulario"
            onSubmit={manejarEnvio}>
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe una Tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar Tarea
            </button>
        </form>
    );
}
export default TareaFormulario;