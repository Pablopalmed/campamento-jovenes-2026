// Datos de EJEMPLO. En la version definitiva, Pablo subira aqui
// las lecturas reales de cada fecha del campamento.
export const lecturas = {
  '2026-08-15': {
    primera: 'Texto de ejemplo de la primera lectura del dia 1.',
    salmo: 'Texto de ejemplo del salmo responsorial.',
    evangelio: 'Texto de ejemplo del evangelio del dia 1.'
  },
  '2026-08-16': {
    primera: 'Texto de ejemplo de la primera lectura del dia 2.',
    salmo: 'Texto de ejemplo del salmo responsorial.',
    evangelio: 'Texto de ejemplo del evangelio del dia 2.'
  },
  '2026-08-17': {
    primera: 'Texto de ejemplo de la primera lectura del dia 3.',
    salmo: 'Texto de ejemplo del salmo responsorial.',
    evangelio: 'Texto de ejemplo del evangelio del dia 3.'
  }
};

// Lectura que se muestra si la fecha de hoy no tiene entrada
// (por ejemplo, cuando pruebas la app fuera de las fechas del campamento)
export const lecturaPorDefecto = {
  primera: 'Aun no hay lectura cargada para hoy.',
  salmo: '-',
  evangelio: 'Cuando se acerque el campamento, Pablo subira aqui las lecturas reales de cada dia.'
};
