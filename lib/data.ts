export const links = [
  {
    name: 'Inicio',
    path: '',
    hash: '#home',
  },
  {
    name: 'Look Art',
    path: 'LookArt',
    hash: '#lookArt',
  },
  {
    name: 'Plató Fotográfico',
    path: 'Plato',
    hash: '#plato',
  },
  {
    name: 'Tratamientos',
    path: 'Tratamientos',
    hash: '#tratamientos',
  },
  {
    name: 'Reserva tu cita',
    path: 'Reservaciones',
    hash: '#reservaciones',
  },
] as const;

export const treatments = [
  {
    name: 'manicura',
    image: '/tratamientos-1.jpeg',
  },
  {
    name: 'pedicura',
    image: '/tratamientos-2.jpeg',
  },
  {
    name: 'otros servicios',
    image: '/tratamientos-3.jpeg',
  },
  {
    name: 'diseño de cejas',
    image: '/tratamientos-4.jpeg',
  },
  {
    name: 'pestañas',
    image: '/tratamientos-5.jpeg',
  },
  {
    name: 'depilación facial',
    image: '/tratamientos-6.jpeg',
  },
  {
    name: 'masajes',
    image: '/tratamientos-7.jpeg',
  },
  {
    name: 'gua sha facial',
    image: '/tratamientos-8.jpeg',
  },
  {
    name: 'joyería dental',
    image: '/tratamientos-9.jpeg',
  },
] as const;

export const accordionData = [
  {
    position: 1,
    title: 'Más sobre nosotros',
    content: `En Lookart BCN somos un exclusivo centro de belleza y centro artístico, donde el encanto y la creatividad e irreverencia se fusionan para brindar una experiencia inigualable de belleza, bienestar y arte. Con un ambiente acogedor y sofisticado, nuestro espacio está diseñado para que nuestros clientes se sumerjan en un oasis de relajación y deleite.

    Contamos con un amplio estudio de manicura y pedicura, para el cuidado de tus manos y pies, en el que llevamos a cabo tratamientos rejuvenecedores y diseños que reflejen tu estilo personal: diseño de mirada, lifting, extensión de pestañas y depilación. Además, para aquellos que deseen añadir un toque de brillo y estilo, nuestra joyería dental es la elección perfecta.`,
  },
  {
    position: 2,
    title: 'Relajación y equilibrio',
    content: `En el ámbito del bienestar, nuestros masajes son el camino perfecto hacia la relajación y el equilibrio. Contamos con terapeutas altamente capacitados que emplean técnicas ancestrales y modernas para liberar tensiones y revitalizar el cuerpo y la mente.

    Además, en Lookart BCN, alquilamos espacios completamente habilitados para la realización de fotos profesionales, grabación, o espacio de trabajo artístico, donde podrás inmortalizar momentos especiales o destacar tu imagen personal o profesional.
    
    Nuestro principal enfoque además de la salud es el arte; nos apasiona la idea de un espacio multifuncional que se combina de manera integral con un enfoque holístico, donde el arte, la estética y la fotografía se entrelazan para ofrecerte una experiencia incomparable. Esta influencia artística trajo también dentro de Lookart nuestro primer plató fotográfico para capturar momentos especiales y reflejar la belleza que emana de las personas.`,
  },
];
