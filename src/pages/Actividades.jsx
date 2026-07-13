import { useState } from 'react';
import { actividades } from '../data/actividades';

export default function Actividades() {
  const [abierta, setAbierta] = useState(null);

  return (
    <div className="pantalla">
      <div className="cabecera">
        <span className="eyebrow">Detalle</span>
        <h1>Actividades</h1>
      </div>

      <div className="contenido">
        {actividades.map((act) => {
          const estaAbierta = abierta === act.id;
          return (
            <div className="tarjeta" key={act.id} onClick={() => setAbierta(estaAbierta ? null : act.id)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div className="tarjeta-titulo">{act.nombre}</div>
                  <span className="texto-atenuado">{act.dia} · {act.hora} · {act.lugar}</span>
                </div>
                <span className="chip">{act.responsable}</span>
              </div>

              {estaAbierta && (
                <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <p>{act.descripcion}</p>
                  {act.material?.length > 0 && (
                    <div>
                      <div className="texto-atenuado" style={{ marginBottom: 6 }}>Material necesario</div>
                      <ul className="lista-integrantes" style={{ margin: 0 }}>
                        {act.material.map((m, i) => (
                          <li key={i}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
