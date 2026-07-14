import { useState } from 'react';
import { dias, horario } from '../data/horario';
import { responsables } from '../data/responsables';

export default function Horario() {
  const [diaSeleccionado, setDiaSeleccionado] = useState(dias[0].id);
  const eventos = horario[diaSeleccionado] || [];
  const dia = dias.find((d) => d.id === diaSeleccionado);
  const responsable = responsables[diaSeleccionado];

  return (
    <div className="pantalla">
      <div className="cabecera">
        <span className="eyebrow">Cronograma</span>
        <h1>Horario</h1>
      </div>

      <div className="selector-dias">
        {dias.map((d) => (
          <button
            key={d.id}
            className={'dia-boton' + (d.id === diaSeleccionado ? ' activo' : '')}
            onClick={() => setDiaSeleccionado(d.id)}
          >
            {d.etiqueta}
          </button>
        ))}
      </div>

      <div className="contenido">
        <div className="tarjeta">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <div className="texto-atenuado">{dia?.fechaTexto}</div>
            {responsable && <span className="chip">Responsable: {responsable}</span>}
          </div>
          {eventos.map((ev, i) => (
            <div className="franja-horaria" key={i}>
              <span className="etiqueta-hora">{ev.hora}</span>
              <div>
                <div className="franja-texto">{ev.actividad}</div>
                <span className="franja-lugar">{ev.lugar}</span>
              </div>
            </div>
          ))}
          {eventos.length === 0 && (
            <p className="texto-atenuado">Todavia no hay eventos cargados para este dia.</p>
          )}
        </div>
      </div>
    </div>
  );
}