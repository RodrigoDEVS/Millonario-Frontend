import './App.css';
import { JugadoresProvider } from './context/JugadoresContext';
import Jugadores from './pages/Jugadores';

function App() {
  return (
    <div className="App">
      <JugadoresProvider>
        <Jugadores/>
      </JugadoresProvider>      
    </div>
  );
}

export default App;
