import { ImageType } from './types';

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
    name: 'Contacto',
    path: 'Contacto',
    hash: '#contacto',
  },
] as const;

export const treatments = [
  {
    name: 'manicura',
    image: '/support-3.jpeg',
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

export const dataInfoCard = [
  {
    icon: 'BiSolidPhoneCall',
    content: '645 044 485 | 931 059 346',
  },
  {
    icon: 'BiSolidMap',
    content: 'C/ de Ramon Turró, 69 Esquina, 08005 Barcelona, España',
  },
  {
    icon: 'BiSolidEnvelope',
    content: 'lookartbcn@gmail.com',
  },
];

export const platoImages1: ImageType[] = [
  {
    src: '/plato-1.jpeg',
    content: 'Mujer en cuclillas con una sonrisa, vistiendo ropa oscura y sobre un fondo blanco.',
  },
  {
    src: '/plato-2.jpeg',
    content:
      'Mujer saltando con una pose dinámica, vistiendo un top rojo y pantalones verdes, con la suela de su zapato visible hacia la cámara.',
  },
  {
    src: '/plato-3.jpeg',
    content:
      'Mujer con cabello rizado oscuro, vistiendo una blusa con un diseño que parece una nube roja, sobre fondo blanco.',
  },
  {
    src: '/plato-4.jpeg',
    content:
      'Hombre posando con una mano extendida hacia la cámara, vistiendo una camisa con un patrón repetido y gafas de sol, sobre fondo blanco.',
  },
  {
    src: '/plato-5.jpeg',
    content:
      'Mujer parada, vistiendo una camiseta sin mangas blanca y jeans azules rasgados, mostrando un pequeño tatuaje en su brazo, sobre fondo blanco.',
  },
  {
    src: '/plato-6.jpeg',
    content:
      'Mujer en una pose dinámica, inclinada hacia el suelo, vistiendo una blusa sin mangas y pantalones rosados, sobre fondo blanco.',
  },
  {
    src: '/plato-7.jpeg',
    content:
      'Primer plano del rostro de una mujer con maquillaje brillante y trenzas en el cabello, sobre fondo blanco.',
  },
  {
    src: '/plato-8.jpeg',
    content:
      'Mujer con cabello rizado oscuro, riendo con la boca abierta, vistiendo una blusa con un diseño similar al de la tercera imagen, sobre fondo blanco.',
  },
];

export const platoImages2: ImageType[] = [
  {
    src: '/plato-9.jpeg',
    content:
      'Se muestra un estudio fotográfico espacioso y bien iluminado. Hay un fondo blanco montado en una pared y varios tipos de iluminación distribuidos por el lugar, incluyendo una caja de luz rectangular y un reflector con paraguas. El suelo está cubierto con láminas de madera clara y hay una cortina oscura a la izquierda. En la esquina superior derecha, hay un letrero luminoso que dice "ON STAGE".',
  },
  {
    src: '/plato-10.jpeg',
    content:
      'En este encuadre, se enfoca una parte más específica del estudio. Hay una mesa cubierta con un paño gris, sobre la que reposa un espejo con luces LED circulares (conocido como espejo de anillo o ring light). Al lado, hay otro reflector con paraguas y al fondo, las luces del letrero "ON STAGE" se ven ligeramente. La ambientación es más tenue y cálida en esta imagen en comparación con la primera.',
  },
  {
    src: '/plato-11.jpeg',
    content:
      'La tercera imagen presenta otra perspectiva del estudio. Se destaca una pared con fondo blanco, y hay una caja de luz y un espejo de anillo en primer plano. La iluminación, proveniente del espejo, es brillante y domina la escena. A la derecha, hay un mostrador con algunos objetos y un espejo rectangular. El suelo mantiene el mismo patrón de madera clara.',
  },
];
