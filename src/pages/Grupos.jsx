import { grupos } from '../data/grupos';

export default function Grupos() {
  return (
    <div className="pantalla">
      <div className="cabecera">
        <span className="eyebrow">Equipos</span>
        <h1>Grupos</h1>
      </div>

      <div className="contenido">
        <div className="rejilla-grupos">
          {grupos.map((g) => (
            <div className="tarjeta" key={g.id}>
              <div className="fila-grupo">
                <div className="avatar-grupo">{g.nombre.replace('Grupo ', '')}</div>
                <div className="tarjeta-titulo">{g.nombre}</div>
              </div>
              <ul className="lista-integrantes">
                {g.integrantes.map((persona, i) => (
                  <li key={i}>{persona}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}