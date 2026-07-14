import { useState } from 'react';
import { dias } from '../data/horario';
import { laudes, completas } from '../data/oraciones';
import { lecturas, lecturaPorDefecto } from '../data/lecturas';

const pestanas = [
  { id: 'laudes', etiqueta: 'Laudes' },
  { id: 'completas', etiqueta: 'Completas' },
  { id: 'lecturas', etiqueta: 'Lecturas' }
];

export default function Oracion() {
  const [diaSeleccionado, setDiaSeleccionado] = useState(dias[0].id);
  const [tab, setTab] = useState('laudes');

  const dia = dias.find((d) => d.id === diaSeleccionado);
  const lecturaDelDia = lecturas[dia?.fechaISO] || lecturaPorDefecto;

  return (
    <div className="pantalla">
      <div className="cabecera">
        <span className="eyebrow">Momento de oracion</span>
        <h1>Oracion</h1>
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

      <div className="tabs-oracion">
        {pestanas.map((p) => (
          <button
            key={p.id}
            className={'tab-oracion' + (tab === p.id ? ' activo' : '')}
            onClick={() => setTab(p.id)}
          >
            {p.etiqueta}
          </button>
        ))}
      </div>

      <div className="contenido">
        <div className="texto-atenuado" style={{ marginTop: -6 }}>{dia?.fechaTexto}</div>

        {tab === 'laudes' && (
          <div className="tarjeta">
            {laudes.map((bloque, i) => (
              <div className="bloque-oracion" key={i}>
                <h3>{bloque.titulo}</h3>
                <p>{bloque.texto}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 'completas' && (
          <div className="tarjeta">
            {completas.map((bloque, i) => (
              <div className="bloque-oracion" key={i}>
                <h3>{bloque.titulo}</h3>
                <p>{bloque.texto}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 'lecturas' && (
          <div className="tarjeta">
            <div className="bloque-oracion">
              <h3>Primera lectura</h3>
              <p>{lecturaDelDia.primera}</p>
            </div>
            <div className="bloque-oracion">
              <h3>Salmo responsorial</h3>
              <p>{lecturaDelDia.salmo}</p>
            </div>
            <div className="bloque-oracion">
              <h3>Evangelio</h3>
              <p>{lecturaDelDia.evangelio}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}