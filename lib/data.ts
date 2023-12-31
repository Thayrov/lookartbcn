import { ImageType } from './types';

export const links = [
  {
    name: 'Inicio',
    path: '',
    hash: '#home',
  },
  {
    name: 'Look Art',
    path: 'lookArt',
    hash: '#lookArt',
  },
  {
    name: 'Plató Fotográfico',
    path: 'plato',
    hash: '#plato',
  },
  {
    name: 'Tratamientos',
    path: 'tratamientos',
    hash: '#tratamientos',
  },
  {
    name: 'Contacto',
    path: 'contacto',
    hash: '#contacto',
  },
] as const;

export const treatments = [
  {
    name: 'manicura',
    image: '/support-3.jpeg',
    path: '#belleza-manos',
  },
  {
    name: 'pedicura',
    image: '/tratamientos-2.jpeg',
    path: '#belleza-pies',
  },
  {
    name: 'otros servicios',
    image: '/tratamientos-3.jpeg',
    path: '',
  },
  {
    name: 'diseño de cejas',
    image: '/tratamientos-4.jpeg',
    path: '#mirada',
  },
  {
    name: 'pestañas',
    image: '/tratamientos-5.jpeg',
    path: '#mirada',
  },
  {
    name: 'depilación facial',
    image: '/tratamientos-6.jpeg',
    path: '#mirada',
  },
  {
    name: 'masajes',
    image: '/tratamientos-7.jpeg',
    path: '#masajes',
  },
  {
    name: 'gua sha facial',
    image: '/tratamientos-8.jpeg',
    path: '#gua-sha',
  },
  {
    name: 'joyería dental',
    image: '/tratamientos-9.jpeg',
    path: '#dental',
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

export const treatmentsImages: ImageType[] = [
  {
    src: '/manicuras-1.jpeg',
    content: 'Mano con uñas largas pintadas en tonos de azul y decoradas con perlas y gemas.',
  },
  {
    src: '/manicuras-2.jpeg',
    content:
      'Mano con uñas alargadas mostrando un diseño transparente con detalles florales y adornos lineales.',
  },
  {
    src: '/manicuras-3.jpeg',
    content:
      'Mano con uñas largas decoradas con diseños abstractos y colores neón sobre una base transparente.',
  },
  {
    src: '/manicuras-4.jpeg',
    content:
      'Mano con uñas cortas con punta francesa en tonos naranja y detalles dorados que imitan el efecto de fuego.',
  },
  {
    src: '/manicuras-5.jpeg',
    content:
      'Mano con uñas extra largas en color verde neón y detalles de estampado de serpiente en dos uñas de cada mano.',
  },
];

export const treatmentsImages2: ImageType[] = [
  {
    src: '/pedicura-1.jpeg',
    content:
      'Pies descalzos con uñas pintadas de un suave tono beige, descansando sobre una alfombra rosa.',
  },
  {
    src: '/pedicura-2.jpeg',
    content:
      'Pies con uñas pintadas de rojo brillante, una persona sentada con jeans y una chaqueta naranja.',
  },
  {
    src: '/pedicura-3.jpeg',
    content: 'Pies sumergidos en un baño de hidromasaje para pies, con burbujas de agua alrededor.',
  },
  {
    src: '/pedicura-4.jpeg',
    content:
      'Pies con uñas pintadas de rosa, tocando un piso de azulejos con un diseño geométrico.',
  },
  {
    src: '/pedicura-5.jpeg',
    content:
      'Mujer sonriente en una silla blanca, con pies descalzos y uñas pintadas de rosa, con una chaqueta naranja y jeans.',
  },
];

export const treatmentsImages3: ImageType[] = [
  {
    src: '/cejas-1.jpg',
    content:
      'Primer plano de cejas con incrustaciones de joyería y brillantina bajo las cejas, en una cara con maquillaje natural.',
  },
  {
    src: '/cejas-2.jpg',
    content:
      'Persona recostada con una máscara facial, mostrando cejas naturales y espesas con ojos cerrados.',
  },
  {
    src: '/cejas-3.jpg',
    content: 'Rostro de cerca con cejas bien definidas y maquillaje suave, destacando ojos verdes.',
  },
  {
    src: '/cejas-4.jpg',
    content:
      'Persona con camisa blanca, maquillaje sencillo y cejas naturales y definidas, mirando a la cámara.',
  },
  {
    src: '/cejas-5.jpg',
    content:
      'Primer plano de un rostro con cejas estilizadas, maquillaje de ojos audaz y una cadena dorada en la cabeza.',
  },
];

export const treatmentsImages4: ImageType[] = [
  {
    src: '/masajes-1.jpeg',
    content: 'Manos realizando un masaje en la espalda de una persona tatuada.',
  },
  {
    src: '/masajes-2.jpeg',
    content:
      'Masajista aplicando técnicas de masaje en la espalda de un cliente en una sala de terapia.',
  },
  {
    src: '/masajes-3.jpeg',
    content:
      'Vista superior de una persona recibiendo un masaje en la espalda en un ambiente relajado con luz suave.',
  },
  {
    src: '/masajes-4.jpeg',
    content:
      'Primer plano de manos realizando un masaje de pies, enfocándose en los dedos y el arco del pie.',
  },
  {
    src: '/masajes-5.jpeg',
    content:
      'Manos de terapeuta masajeando el brazo de una mujer recostada y relajada en una camilla de spa.',
  },
];

export const treatmentsImages5: ImageType[] = [
  {
    src: '/guasha-1.jpeg',
    content: 'Mujer utilizando una herramienta de gua sha en su mejilla para masaje facial.',
  },
  {
    src: '/guasha-2.jpeg',
    content: 'Mujer sonriente aplicando una máscara de ojos de piedra negra sobre su rostro.',
  },
  {
    src: '/guasha-3.jpeg',
    content: 'Mujer aplicando un rodillo facial de jade alrededor del área de los ojos.',
  },
  {
    src: '/guasha-4.jpeg',
    content: 'Persona recibiendo un masaje facial profesional con énfasis en el área del cuello.',
  },
  {
    src: '/guasha-5.jpeg',
    content:
      'Mujer con los ojos cerrados disfrutando de una máscara de ojos de piedra mientras se realiza un masaje facial.',
  },
];

export const treatmentsImages6: ImageType[] = [
  {
    src: '/dental-1.jpeg',
    content: 'Mujer utilizando una herramienta de gua sha en su mejilla para masaje facial.',
  },
  {
    src: '/dental-2.jpeg',
    content: 'Mujer sonriente aplicando una máscara de ojos de piedra negra sobre su rostro.',
  },
  {
    src: '/dental-3.jpeg',
    content: 'Mujer aplicando un rodillo facial de jade alrededor del área de los ojos.',
  },
  {
    src: '/dental-4.jpeg',
    content: 'Persona recibiendo un masaje facial profesional con énfasis en el área del cuello.',
  },
  {
    src: '/dental-5.jpeg',
    content:
      'Mujer con los ojos cerrados disfrutando de una máscara de ojos de piedra mientras se realiza un masaje facial.',
  },
];

export const accordionHandsData = [
  {
    position: 1,
    title: 'ESMALTADO SEMIPERMANENTE',
    content: `Semipermanente : 15€
    Semipermanente COMPLETA/SPA : 21,50€
    Semipermanente fortalecedora : 17,50€
    Semipermanente fortalecedora UÑAS MEDIANAS : 22,50€
    Semipermanente fortalecedora UÑAS LARGAS : 25€
    Retirar semi + belleza de uñas : 8€
    Retirar semi + Manicura tradicional : 18€
    Retirar semi + manicura SPA : 15€
    Retirar semi + manicura SPA + esmaltado tradicional : 25€
    
    Esmaltar una uña : 2€
    Tratamiento de cutículas : 3€`,
  },
  {
    position: 2,
    title: 'ESMALTADO TRADICIONAL',
    content: `Esmaltado tradicional : 12€
    Esmaltado tradicional O.P.I : 14€
    Manicura COMPLETA/SPA + esmalte tradicional : 18€
    Tratamiento de cutículas : 3€`,
  },
];

export const accordionHandsData2 = [
  {
    position: 1,
    title: 'BARRIDOS DE ACRÍLICO & POLYGEL',
    content: `Barrido : 20€
    Barrido uñas medianas : 22,50€
    Barrido uñas largas : 25€`,
  },
  {
    position: 2,
    title: 'EXTENSIÓN UÑAS GEL & ACRILICO',
    content: `GEL X «S» : 30€
    GEL X «M» : 35€
    GEL X «L» : 40€
    GEL X «XL» : 45€
    UÑAS NUEVAS ACRÍLICO «S» : 35€
    UÑAS NUEVAS ACRÍLICO «M» : 45€
    UÑAS NUEVAS ACRÍLICO «L» : 55€
    UÑAS NUEVAS ACRÍLICO «XL» : 65€
    Retirar GEL/ACRÍLICO : 20€
    
    UÑAS ESCULPIDAS ACRÍLICO (S) : 45€
    
    UÑAS ESCULPIDAS ACRÍLICO (M) : 55€
    
    UÑAS ESCULPIDAS ACRÍLICO (L) : 65€
    
    UÑAS ESCULPIDAS ACRÍLICO (XL) : 75€
    
    UÑAS MORDIDAS desde 40€`,
  },
  {
    position: 3,
    title: 'OTROS SERVICIOS',
    content: `Manicura medicinal reparadora : 14,50€
    Manicura flah : 10€
    Manicura infantil : 10€
    Manicura + pedicura infantil : 15€`,
  },
];

export const accordionManicureData = [
  {
    position: 1,
    title: 'MANICURA DE DISEÑO',
    content: `Nail art básico (incluye 2 uñas) : 2,50€
    Nail art premium (incluye 2 uñas) : 3,50€
    Nail art 3D (incluye 2 uñas) : 4,50€
    Nail art combo (10 uñas) : 12€
    Multidot simple (10 uñas) : 10€
    Multidot complejo (10 uñas) : 14,50€
    Multidot premium (10 uñas) : 18€
    Texturas simples (10 uñas) : 15€
    Texturas complejas (10 uñas) : 20€
    Francesa básica : 5€
    Doble francesa : 8€
    Francesa en pico : 10€
    Francesa efecto carey : 12€`,
  },
  {
    position: 2,
    title: 'ESMALTADO TRADICIONAL',
    content: `Esmaltado tradicional : 12€
    Esmaltado tradicional O.P.I : 14€
    Manicura COMPLETA/SPA + esmalte tradicional : 18€
    Tratamiento de cutículas : 3€`,
  },
];

export const accordionFeetData = [
  {
    position: 1,
    title: 'ESMALTADO SEMIPERMANENTE',
    content: `Pedicura EXPRESS + semi : 18,50€
    Pedicura SPA + semi : 31,50€
    Pedicura SPA & RELAX semi : 35,50€
    Retirar semi : 8€
    Retirar semi + esmaltado tradicional : 21€
    Retirar semi + pedicura SPA con esmaltado tradicional : 35€
    Retirar semi + pedicura SPA sin esmaltado : 30€`,
  },
  {
    position: 2,
    title: 'ESMALTADO TRADICIONAL',
    content: `Pedicura EXPRESS + esmaltado : 18€
    Pedicura SPA + esmaltado : 30€
    Pedicura SPA & RELAX + esmaltado : 34€`,
  },
  {
    position: 3,
    title: 'OTROS SERVICIOS',
    content: `Barrido de acrílico + esmaltado semi : 25€
    Pedicura SPA sin esmaltado : 25€
    Pedicura con capa de refuerzo : 25€
    Retirada cutículas : 8€
    Francesa desde : 5€`,
  },
];

export const accordionEyeBrowsesData = [
  {
    position: 1,
    title: 'CEJAS',
    content: `Perfilado de cejas con hilo : 12€

    Depilación de cejas con hilo : 12€
    
    Diseño de cejas + depilación : 20€
    
    Depilación con hilo + tinte : 20€
    
    Depilación con hilo + laminado : 35€
    
    Laminado de cejas : 25€
    
    Adicional diseño de cejas : 8€
    
    Adicional tinte de cejas : 8€`,
  },
  {
    position: 2,
    title: 'PESTAÑAS',
    content: `Lifting de pestañas : 35€
    Lifting + tinte : 38€
    
    Adicional tinte de pestañas : 10€
    
    Extensión de pestañas EXPRESS : 45€
    Extensión de pestañas FULL SET (pelo a pelo) : 60€
    Extensión de pestañas 2D : 80€
    Relleno de pestañas (dentro de las 3 semanas) : 40€
    Retirada de pestañas hechas en Look Art BCN : 10€
    Retirada de pestañas hechas en otro centro : 20€`,
  },
  {
    position: 3,
    title: 'DEPILACIÓN FACIAL CON HILO',
    content: `Nariz : 2,50€
    Labio : 6€
    Frente : 6€
    Menton : 6€
    Patillas : 6€
    Barbilla : 6€`,
  },
];

export const accordionMassageData = [
  {
    position: 1,
    title: 'VER MÁS',
    content: `Lomi Lomi Nui 30 minutos : 30€
    Lomi Lomi Nui 50 minutos : 50€
    Lomi Lomi Nui 1 hora 30 minutos : 70€`,
  },
];

export const accordionGuaShaData = [
  {
    position: 1,
    title: 'LEER MÁS',
    content: `El Gua Sha es una milenaria técnica de msaje de la medicina tradicional china que se realiza deslizando sobre la piel una piedra de jade, cuarzo u otros materiales.
    Este ritual beneficia nuestra salud y belleza, mejora el aspecto de nuestra piel, aumenta su tersura y reduce arrugas, mejora la circulación, libera tensiones, favorece la eliminación natural de desechos y toxinas.
    Nos reconforta y genera una sensación de relajación completa.
    
    Gua Sha facial 40 minutos : 40€
    Gua Sha facial 1 hora 15 minutos : 65€`,
  },
];
export const accordionDentalData = [
  {
    position: 1,
    title: 'VER MÁS',
    content: `1 Gema pequeña : 30€
    2 Gemas pequeñas : 46€
    3 Gemas pequeñas : 58€
    4 Gemas pequeñas : 66€
    
    1 Gema mediana : 35€
    2 Gemas medianas : 50€
    3 Gemas medianas : 62€
    4 Gemas medianas : 70€
    
    1 Gema especial : 46€
    2 Gemas especiales : 62€
    3 Gemas especiales : 74€
    4 Gemas especiales : 80€`,
  },
];
