import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Horario from './pages/Horario';
import Actividades from './pages/Actividades';
import Grupos from './pages/Grupos';
import Oracion from './pages/Oracion';
import Cancionero from './pages/Cancionero';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/oracion" element={<Oracion />} />
        <Route path="/cancionero" element={<Cancionero />} />
      </Routes>
      <Navbar />
    </HashRouter>
  );
}
