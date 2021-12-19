import { useState } from "react";
import JugadoresForm from "../components/JugadoresForm";
import JugadoresTabla from "../components/JugadoresTabla";

const Jugadores = () => {

    const [jugadores, setJugadores] = useState([]);

    const handleJugadores = (objJugador)=>{
        let array = [...jugadores, objJugador]
        setJugadores(array);
    }

    return (
        <>
            <h2>Ingreso de Jugador</h2>
            <JugadoresForm handleJugadores={handleJugadores}/>
            <h2>Tabla de Puntuaciones</h2>
            <JugadoresTabla jugadores={jugadores}/>
        </>
    );
}
export default Jugadores;