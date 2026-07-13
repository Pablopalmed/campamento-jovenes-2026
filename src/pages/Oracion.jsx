import { useState } from 'react';
import { laudes, completas } from '../data/oraciones';
import { lecturas, lecturaPorDefecto } from '../data/lecturas';

const pestanas = [
  { id: 'laudes', etiqueta: 'Laudes' },
  { id: 'completas', etiqueta: 'Completas' },
  { id: 'lecturas', etiqueta: 'Lecturas' }
];

function fechaDeHoy() {
  const hoy = new Date();
  const y = hoy.getFullYear();
  const m = String(hoy.getMonth() + 1).padStart(2, '0');
  const d = String(hoy.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function Oracion() {
  const [tab, setTab] = useState('laudes');
  const lecturaHoy = lecturas[fechaDeHoy()] || lecturaPorDefecto;

  return (
    <div className="pantalla">
      <div className="cabecera">
        <span className="eyebrow">Momento de oracion</span>
        <h1>Oracion</h1>
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
              <p>{lecturaHoy.primera}</p>
            </div>
            <div className="bloque-oracion">
              <h3>Salmo responsorial</h3>
              <p>{lecturaHoy.salmo}</p>
            </div>
            <div className="bloque-oracion">
              <h3>Evangelio</h3>
              <p>{lecturaHoy.evangelio}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
