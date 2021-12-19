import { useState } from "react";
import JugadoresForm from "../components/JugadoresForm";

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
        </>
    );
}
export default Jugadores;