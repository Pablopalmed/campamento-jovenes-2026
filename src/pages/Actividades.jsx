import { useState } from 'react';
import { dias } from '../data/horario';
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
        {dias.map((dia) => {
          const actividadesDelDia = actividades
            .filter((a) => a.dia === dia.id)
            .sort((a, b) => a.hora.localeCompare(b.hora));

          if (actividadesDelDia.length === 0) return null;

          return (
            <div key={dia.id}>
              <h2 style={{ margin: '6px 0 10px', color: 'var(--color-red)', fontSize: '1.1rem' }}>
                {dia.etiqueta} · {dia.fechaTexto}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 8 }}>
                {actividadesDelDia.map((act) => {
                  const estaAbierta = abierta === act.id;
                  return (
                    <div className="tarjeta" key={act.id} onClick={() => setAbierta(estaAbierta ? null : act.id)}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
                          <span className="etiqueta-hora">{act.hora}</span>
                          <div>
                            <div className="tarjeta-titulo">{act.nombre}</div>
                            <span className="texto-atenuado">{act.lugar}</span>
                          </div>
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
        })}
      </div>
    </div>
  );
}