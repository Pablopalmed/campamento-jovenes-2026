import { Link } from 'react-router-dom';
import { dias, horario } from '../data/horario';

export default function Inicio() {
  // De momento mostramos siempre el dia 1 como ejemplo.
  // En la version definitiva esto se calculara segun la fecha real de hoy.
  const diaActual = dias[0];
  const eventosHoy = horario[diaActual.id] || [];
  const proxima = eventosHoy[0];

  return (
    <div className="pantalla">
      <div className="hero-inicio">
        <span className="eyebrow">Campamento Jovenes 2026</span>
        <div className="dia-numero">{diaActual.etiqueta}</div>
        <div className="dia-fecha">{diaActual.fechaTexto}</div>
      </div>

      {proxima && (
        <div className="proxima-actividad">
          <span className="chip">Proximo</span>
          <div style={{ marginTop: 10, display: 'flex', gap: 14, alignItems: 'baseline' }}>
            <span className="etiqueta-hora">{proxima.hora}</span>
            <div>
              <div className="franja-texto">{proxima.actividad}</div>
              <span className="franja-lugar">{proxima.lugar}</span>
            </div>
          </div>
        </div>
      )}

      <div className="contenido">
        <div className="accesos-rapidos">
          <Link to="/horario" className="acceso-rapido">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M8 3v4M16 3v4M3 10h18" />
            </svg>
            <div>
              <div className="tarjeta-titulo">Horario</div>
              <span className="texto-atenuado">Ver el dia completo</span>
            </div>
          </Link>

          <Link to="/oracion" className="acceso-rapido">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-4.4-9.5-8.8C1 9 2.3 5.6 5.6 5c2-.4 3.7.6 4.4 2 .7-1.4 2.4-2.4 4.4-2 3.3.6 4.6 4 3.1 7.2C15 16.6 12 21 12 21z" />
            </svg>
            <div>
              <div className="tarjeta-titulo">Oracion</div>
              <span className="texto-atenuado">Laudes, Completas y lecturas</span>
            </div>
          </Link>

          <Link to="/grupos" className="acceso-rapido">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="8" r="3" />
              <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" />
              <circle cx="17" cy="9" r="2.5" />
              <path d="M16 14.2c2.6.5 4.5 2.5 5 5.8" />
            </svg>
            <div>
              <div className="tarjeta-titulo">Grupos</div>
              <span className="texto-atenuado">Quien esta en cada grupo</span>
            </div>
          </Link>

          <Link to="/cancionero" className="acceso-rapido">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l11-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="17" cy="16" r="3" />
            </svg>
            <div>
              <div className="tarjeta-titulo">Cancionero</div>
              <span className="texto-atenuado">Letras y acordes</span>
            </div>
          </Link>
        </div>

        <div className="badge-offline">
          <span className="punto-offline" />
          Disponible sin conexion
        </div>
      </div>
    </div>
  );
}
