import { useContext, useEffect, useState } from "react";
import JugadoresForm from "../components/JugadoresForm";
import JugadoresTabla from "../components/JugadoresTabla";
import JugadoresContext from "../context/JugadoresContext";

const Jugadores = () => {
    //Uso del contexto
    const{handleRegister, getJugadores} = useContext(JugadoresContext)
    const [jugadores, setJugadores] = useState([]);

    //Ejecutar función al cargar el componente (hook)
    useEffect(()=>{
        getJugadores().then(async resp=>{
            let json = await resp.json();
            setJugadores(json)
        })
    }, [])

    const handleJugadores = (objJugador)=>{
        handleRegister(objJugador).then(async resp=>{
            if(resp.status == 201){
                let json = await resp.json();
                //si se crea el jugador con exito seguirá llenando el array
                let array = [...jugadores, objJugador]
                setJugadores(array);
            }
        }).catch(error=>{
            console.log(error);
        });   
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