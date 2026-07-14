// Datos de EJEMPLO para probar la app. Se sustituiran por las actividades reales.
// El campo "dia" usa el mismo id que en horario.js (dia1, dia2, dia3...)
// para poder agrupar y ordenar las actividades por dia.
export const actividades = [
  {
    id: 'gymkana-nocturna',
    nombre: 'Gymkana nocturna',
    dia: 'dia1',
    hora: '23:00',
    lugar: 'Campamento',
    descripcion: 'Juegos y pruebas por equipos alrededor de la hoguera.',
    material: ['Linterna', 'Ropa de abrigo'],
    responsable: 'Todos los grupos'
  },
  {
    id: 'taller-manualidades',
    nombre: 'Taller de manualidades',
    dia: 'dia2',
    hora: '12:30',
    lugar: 'Explanada',
    descripcion: 'Taller para decorar el campamento con materiales reciclados.',
    material: ['Cartulinas', 'Tijeras', 'Pegamento', 'Rotuladores'],
    responsable: 'Grupo 2'
  },
  {
    id: 'marcha-salvaguarda',
    nombre: 'Marcha: Pico Salvaguarda',
    dia: 'dia3',
    hora: '13:30',
    lugar: 'Ruta de montana',
    descripcion: 'Marcha de dificultad media hasta el Pico Salvaguarda. Llevar calzado de montana, agua y proteccion solar.',
    material: ['Botas de montana', 'Cantimplora', 'Gorra', 'Protector solar'],
    responsable: 'Grupo 1'
  }
];