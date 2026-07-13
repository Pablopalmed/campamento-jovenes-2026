import { NavLink } from 'react-router-dom';

const items = [
  {
    to: '/',
    etiqueta: 'Inicio',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l9-8 9 8" />
        <path d="M5 10v10h14V10" />
      </svg>
    )
  },
  {
    to: '/horario',
    etiqueta: 'Horario',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    )
  },
  {
    to: '/actividades',
    etiqueta: 'Actividades',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3l-6 3v15l6-3 6 3 6-3V0l-6 3-6-3z" />
        <path d="M9 3v15M15 6v15" />
      </svg>
    )
  },
  {
    to: '/grupos',
    etiqueta: 'Grupos',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M16 14.2c2.6.5 4.5 2.5 5 5.8" />
      </svg>
    )
  },
  {
    to: '/oracion',
    etiqueta: 'Oracion',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.4-9.5-8.8C1 9 2.3 5.6 5.6 5c2-.4 3.7.6 4.4 2 .7-1.4 2.4-2.4 4.4-2 3.3.6 4.6 4 3.1 7.2C15 16.6 12 21 12 21z" />
      </svg>
    )
  },
  {
    to: '/cancionero',
    etiqueta: 'Canciones',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l11-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="17" cy="16" r="3" />
      </svg>
    )
  }
];

export default function Navbar() {
  return (
    <nav className="nav-inferior">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) => 'nav-item' + (isActive ? ' activo' : '')}
        >
          {item.icono}
          <span>{item.etiqueta}</span>
        </NavLink>
      ))}
    </nav>
  );
}
