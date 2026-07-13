import { useState } from 'react';
import { canciones } from '../data/canciones';

// Convierte una linea tipo "[Sol]Vengo [Re7]a cantar" en fragmentos de texto
// con el acorde en superindice antes de la silaba correspondiente.
function renderizarLinea(linea, key) {
  const partes = linea.split(/(\[[^\]]+\])/g);
  return (
    <span key={key}>
      {partes.map((parte, i) => {
        const esAcorde = /^\[[^\]]+\]$/.test(parte);
        if (esAcorde) {
          return (
            <span className="acorde" key={i}>
              {parte.slice(1, -1)}
            </span>
          );
        }
        return <span key={i}>{parte}</span>;
      })}
    </span>
  );
}

export default function Cancionero() {
  const [abierta, setAbierta] = useState(canciones[0]?.id ?? null);

  return (
    <div className="pantalla">
      <div className="cabecera">
        <span className="eyebrow">Letras y acordes</span>
        <h1>Cancionero</h1>
      </div>

      <div className="contenido">
        {canciones.map((c) => {
          const estaAbierta = abierta === c.id;
          return (
            <div className="tarjeta" key={c.id} onClick={() => setAbierta(estaAbierta ? null : c.id)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="tarjeta-titulo">{c.titulo}</div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {c.categorias.map((cat, i) => (
                    <span className="chip" key={i}>{cat}</span>
                  ))}
                </div>
              </div>

              {estaAbierta && (
                <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {c.estrofas.map((estrofa, i) => (
                    <div key={i} style={{ lineHeight: 1.9, whiteSpace: 'pre-line' }}>
                      {estrofa.split('\n').map((linea, j) => (
                        <div key={j}>{renderizarLinea(linea, j)}</div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
