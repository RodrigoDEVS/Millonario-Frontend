import { createContext } from "react";

const JugadoresContext = createContext();

const JugadoresProvider = ({ children }) => {

    const handleRegister = async (objJugador) => {
        //API fetch con método POST
        const resp = await fetch('https://millonario-backend.herokuapp.com/jugador', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            //convirtiendo el objeto en tipo JSON para que la BD lo reciba
            body: JSON.stringify(objJugador)
        });
        return resp;
    };

    const getJugadores = async ()=>{
        //Enviar peticion a la API
        const resp = await fetch('https://millonario-backend.herokuapp.com/jugador', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return resp;
    }

    const data = { handleRegister, getJugadores };

    return <JugadoresContext.Provider value={data}>{children}</JugadoresContext.Provider>
}
export { JugadoresProvider };
export default JugadoresContext;