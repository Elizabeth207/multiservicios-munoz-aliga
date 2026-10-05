export type GalleryCategory = 'taller' | 'instalaciones' | 'productos' | 'trabajos' | 'llaves' | 'electricidad';

export interface GalleryItem {
  id: string;
  imageSrc: string;
  caption: string;
  category: GalleryCategory;
}

export const galleryItems: GalleryItem[] = [
  // Alarmas
  {
    id: '1',
    imageSrc: '/assets/images/galeria/inicio/alarmas/img1.jpg',
    caption: 'Sistema de alarma para vehículos',
    category: 'productos',
  },
  {
    id: '2',
    imageSrc: '/assets/images/galeria/inicio/alarmas/img2.jpg',
    caption: 'Instalación profesional de alarmas',
    category: 'instalaciones',
  },
  {
    id: '3',
    imageSrc: '/assets/images/galeria/inicio/alarmas/img3.jpg',
    caption: 'Alarma con sensor de movimiento',
    category: 'productos',
  },
  {
    id: '4',
    imageSrc: '/assets/images/galeria/inicio/alarmas/img4.jpg',
    caption: 'Control remoto de alarma',
    category: 'productos',
  },
  {
    id: '5',
    imageSrc: '/assets/images/galeria/inicio/alarmas/img5.jpg',
    caption: 'Sistema de seguridad completo',
    category: 'productos',
  },
  // GPS
  {
    id: '6',
    imageSrc: '/assets/images/galeria/inicio/gps/img1.jpg',
    caption: 'Sistema de rastreo GPS',
    category: 'productos',
  },
  {
    id: '7',
    imageSrc: '/assets/images/galeria/inicio/gps/img2.jpg',
    caption: 'Sistema de rastreo GPS instalado',
    category: 'instalaciones',
  },
  {
    id: '8',
    imageSrc: '/assets/images/galeria/inicio/gps/img3.jpg',
    caption: 'GPS rastreo en tiempo real',
    category: 'productos',
  },
  {
    id: '9',
    imageSrc: '/assets/images/galeria/inicio/gps/img4.jpg',
    caption: 'Sistema GPS avanzado',
    category: 'productos',
  },
  {
    id: '10',
    imageSrc: '/assets/images/galeria/inicio/gps/img5.jpg',
    caption: 'GPS con geolocalización precisa',
    category: 'productos',
  },
  {
    id: '11',
    imageSrc: '/assets/images/galeria/inicio/gps/img6.jpg',
    caption: 'Monitoreo GPS 24/7',
    category: 'productos',
  },
  // Focos neblineros
  {
    id: '12',
    imageSrc: '/assets/images/galeria/inicio/focos-neblineros/img1.jpg',
    caption: 'Focos neblineros de alta calidad',
    category: 'productos',
  },
  {
    id: '13',
    imageSrc: '/assets/images/galeria/inicio/focos-neblineros/img2.jpg',
    caption: 'Focos neblineros LED',
    category: 'productos',
  },
  {
    id: '14',
    imageSrc: '/assets/images/galeria/inicio/focos-neblineros/img3.jpg',
    caption: 'Iluminación auxiliar LED',
    category: 'productos',
  },
  {
    id: '15',
    imageSrc: '/assets/images/galeria/inicio/focos-neblineros/img4.jpg',
    caption: 'Focos neblineros halógenos',
    category: 'productos',
  },
  {
    id: '16',
    imageSrc: '/assets/images/galeria/inicio/focos-neblineros/img5.jpg',
    caption: 'Kit de neblineros completo',
    category: 'productos',
  },
  {
    id: '17',
    imageSrc: '/assets/images/galeria/inicio/focos-neblineros/img6.jpg',
    caption: 'Neblineros de alta potencia',
    category: 'productos',
  },
  {
    id: '18',
    imageSrc: '/assets/images/galeria/inicio/focos-neblineros/img7.jpg',
    caption: 'Instalación de neblineros',
    category: 'instalaciones',
  },
  {
    id: '19',
    imageSrc: '/assets/images/galeria/inicio/focos-neblineros/img8.jpg',
    caption: 'Neblineros LED blancos',
    category: 'productos',
  },
  // Cierres centralizados
  {
    id: '20',
    imageSrc: '/assets/images/galeria/inicio/cierres-centralizados/img1.jpg',
    caption: 'Sistema de cierre centralizado',
    category: 'instalaciones',
  },
  {
    id: '21',
    imageSrc: '/assets/images/galeria/inicio/cierres-centralizados/img2.jpg',
    caption: 'Cierre centralizado con control remoto',
    category: 'instalaciones',
  },
  {
    id: '22',
    imageSrc: '/assets/images/galeria/inicio/cierres-centralizados/img3.jpg',
    caption: 'Actuador de puerta',
    category: 'productos',
  },
  {
    id: '23',
    imageSrc: '/assets/images/galeria/inicio/cierres-centralizados/img4.jpg',
    caption: 'Módulo de cierre centralizado',
    category: 'productos',
  },
  {
    id: '24',
    imageSrc: '/assets/images/galeria/inicio/cierres-centralizados/img5.jpg',
    caption: 'Control remoto universal',
    category: 'productos',
  },
  {
    id: '25',
    imageSrc: '/assets/images/galeria/inicio/cierres-centralizados/img6.jpg',
    caption: 'Sistema de cierre inteligente',
    category: 'productos',
  },
  // Duplicados de llaves
  {
    id: '26',
    imageSrc: '/assets/images/galeria/inicio/duplicados-de-llaves/img1.jpg',
    caption: 'Duplicado de llaves originales',
    category: 'llaves',
  },
  {
    id: '27',
    imageSrc: '/assets/images/galeria/inicio/duplicados-de-llaves/img2.jpg',
    caption: 'Copia de llaves con precisión',
    category: 'llaves',
  },
  {
    id: '28',
    imageSrc: '/assets/images/galeria/inicio/duplicados-de-llaves/img3.jpg',
    caption: 'Llaves duplicadas con chip',
    category: 'llaves',
  },
  {
    id: '29',
    imageSrc: '/assets/images/galeria/inicio/duplicados-de-llaves/img4.jpg',
    caption: 'Corte láser de llaves',
    category: 'llaves',
  },
  {
    id: '30',
    imageSrc: '/assets/images/galeria/inicio/duplicados-de-llaves/img5.jpg',
    caption: 'Llaves transpondedor',
    category: 'llaves',
  },
  {
    id: '31',
    imageSrc: '/assets/images/galeria/inicio/duplicados-de-llaves/img6.jpg',
    caption: 'Duplicado de llaves de alta seguridad',
    category: 'llaves',
  },
  // Alternadores
  {
    id: '32',
    imageSrc: '/assets/images/galeria/inicio/alternadores/img1.jpg',
    caption: 'Reparación de alternadores',
    category: 'electricidad',
  },
  {
    id: '33',
    imageSrc: '/assets/images/galeria/inicio/alternadores/img2.jpg',
    caption: 'Alternador de alta potencia',
    category: 'electricidad',
  },
  {
    id: '34',
    imageSrc: '/assets/images/galeria/inicio/alternadores/img3.jpg',
    caption: 'Diagnóstico de alternadores',
    category: 'electricidad',
  },
  {
    id: '35',
    imageSrc: '/assets/images/galeria/inicio/alternadores/img4.jpg',
    caption: 'Rebobinado de alternadores',
    category: 'electricidad',
  },
  {
    id: '36',
    imageSrc: '/assets/images/galeria/inicio/alternadores/img5.jpg',
    caption: 'Alternador reacondicionado',
    category: 'electricidad',
  },
  {
    id: '37',
    imageSrc: '/assets/images/galeria/inicio/alternadores/img6.jpg',
    caption: 'Prueba de alternador',
    category: 'electricidad',
  },
  // Pantallas para vehículos
  {
    id: '38',
    imageSrc: '/assets/images/galeria/inicio/pantallas-para-vehiculos/img1.jpg',
    caption: 'Pantalla multimedia instalada',
    category: 'instalaciones',
  },
  {
    id: '39',
    imageSrc: '/assets/images/galeria/inicio/pantallas-para-vehiculos/img2.jpg',
    caption: 'Pantalla táctil multimedia',
    category: 'productos',
  },
  {
    id: '40',
    imageSrc: '/assets/images/galeria/inicio/pantallas-para-vehiculos/img3.jpg',
    caption: 'Pantalla Android Auto',
    category: 'productos',
  },
  {
    id: '41',
    imageSrc: '/assets/images/galeria/inicio/pantallas-para-vehiculos/img4.jpg',
    caption: 'Pantalla con cámara de retroceso',
    category: 'productos',
  },
  {
    id: '42',
    imageSrc: '/assets/images/galeria/inicio/pantallas-para-vehiculos/img5.jpg',
    caption: 'Pantalla multimedia de 9 pulgadas',
    category: 'productos',
  },
  {
    id: '43',
    imageSrc: '/assets/images/galeria/inicio/pantallas-para-vehiculos/img6.jpg',
    caption: 'Sistema de entretenimiento completo',
    category: 'productos',
  },
  // Programación de chips de llaves
  {
    id: '44',
    imageSrc: '/assets/images/galeria/inicio/programacion-chips-llaves/img1.png',
    caption: 'Llave con chip programada',
    category: 'llaves',
  },
  {
    id: '45',
    imageSrc: '/assets/images/galeria/inicio/programacion-chips-llaves/img2.jpg',
    caption: 'Programación de chips de llaves',
    category: 'llaves',
  },
  {
    id: '46',
    imageSrc: '/assets/images/galeria/inicio/programacion-chips-llaves/img3.jpg',
    caption: 'Programación de chips avanzada',
    category: 'llaves',
  },
  // Alarma de retroceso
  {
    id: '47',
    imageSrc: '/assets/images/galeria/inicio/alarma-de-retroceso/img1.jpg',
    caption: 'Sensores de alarma de retroceso',
    category: 'productos',
  },
  {
    id: '48',
    imageSrc: '/assets/images/galeria/inicio/alarma-de-retroceso/img2.jpg',
    caption: 'Sensores de proximidad',
    category: 'productos',
  },
  {
    id: '49',
    imageSrc: '/assets/images/galeria/inicio/alarma-de-retroceso/img3.jpg',
    caption: 'Sistema de alerta de retroceso',
    category: 'productos',
  },
  {
    id: '50',
    imageSrc: '/assets/images/galeria/inicio/alarma-de-retroceso/img4.jpg',
    caption: 'Sensores ultrasónicos',
    category: 'productos',
  },
  {
    id: '51',
    imageSrc: '/assets/images/galeria/inicio/alarma-de-retroceso/img5.jpg',
    caption: 'Display de distancia',
    category: 'productos',
  },
  {
    id: '52',
    imageSrc: '/assets/images/galeria/inicio/alarma-de-retroceso/img6.jpg',
    caption: 'Kit de sensores completo',
    category: 'productos',
  },
  // Arrancador de carro
  {
    id: '53',
    imageSrc: '/assets/images/galeria/inicio/arrancador-de-carro/img1.jpg',
    caption: 'Reparación de arrancadores',
    category: 'electricidad',
  },
  {
    id: '54',
    imageSrc: '/assets/images/galeria/inicio/arrancador-de-carro/img2.jpg',
    caption: 'Motor de arranque reparado',
    category: 'electricidad',
  },
  {
    id: '55',
    imageSrc: '/assets/images/galeria/inicio/arrancador-de-carro/img3.jpg',
    caption: 'Arrancador reacondicionado',
    category: 'electricidad',
  },
  {
    id: '56',
    imageSrc: '/assets/images/galeria/inicio/arrancador-de-carro/img4.jpg',
    caption: 'Solenoide de arranque',
    category: 'electricidad',
  },
  {
    id: '57',
    imageSrc: '/assets/images/galeria/inicio/arrancador-de-carro/img5.jpg',
    caption: 'Motor de arranque nuevo',
    category: 'electricidad',
  },
  // Cámara de retroceso
  {
    id: '58',
    imageSrc: '/assets/images/galeria/inicio/camara-de-retroceso/img1.jpg',
    caption: 'Cámara de retroceso HD',
    category: 'productos',
  },
  {
    id: '59',
    imageSrc: '/assets/images/galeria/inicio/camara-de-retroceso/img2.jpg',
    caption: 'Cámara trasera con guía',
    category: 'productos',
  },
  {
    id: '60',
    imageSrc: '/assets/images/galeria/inicio/camara-de-retroceso/img3.jpg',
    caption: 'Cámara impermeable',
    category: 'productos',
  },
  {
    id: '61',
    imageSrc: '/assets/images/galeria/inicio/camara-de-retroceso/img4.jpg',
    caption: 'Cámara con visión nocturna',
    category: 'productos',
  },
  // Manijas
  {
    id: '62',
    imageSrc: '/assets/images/galeria/inicio/manijas/img1.jpg',
    caption: 'Manijas para puertas de vehículos',
    category: 'productos',
  },
  {
    id: '63',
    imageSrc: '/assets/images/galeria/inicio/manijas/img2.jpg',
    caption: 'Manijas de alta calidad',
    category: 'productos',
  },
  {
    id: '64',
    imageSrc: '/assets/images/galeria/inicio/manijas/img3.jpg',
    caption: 'Manija exterior de puerta',
    category: 'productos',
  },
  {
    id: '65',
    imageSrc: '/assets/images/galeria/inicio/manijas/img4.jpg',
    caption: 'Manija interior de puerta',
    category: 'productos',
  },
  {
    id: '66',
    imageSrc: '/assets/images/galeria/inicio/manijas/img5.jpg',
    caption: 'Kit de manijas completo',
    category: 'productos',
  },
  // Mantenimiento de chapas de arranque
  {
    id: '67',
    imageSrc: '/assets/images/galeria/inicio/mantenimiento-chapas-arranque/img1.jpg',
    caption: 'Mantenimiento de chapas de arranque',
    category: 'llaves',
  },
  {
    id: '68',
    imageSrc: '/assets/images/galeria/inicio/mantenimiento-chapas-arranque/img2.jpg',
    caption: 'Servicio de mantenimiento de chapas',
    category: 'llaves',
  },
  {
    id: '69',
    imageSrc: '/assets/images/galeria/inicio/mantenimiento-chapas-arranque/img3.jpg',
    caption: 'Chapa de arranque reparada',
    category: 'llaves',
  },
  {
    id: '70',
    imageSrc: '/assets/images/galeria/inicio/mantenimiento-chapas-arranque/img4.jpg',
    caption: 'Limpieza de chapa',
    category: 'llaves',
  },
  {
    id: '71',
    imageSrc: '/assets/images/galeria/inicio/mantenimiento-chapas-arranque/img5.jpg',
    caption: 'Chapa reacondicionada',
    category: 'llaves',
  },
  {
    id: '72',
    imageSrc: '/assets/images/galeria/inicio/mantenimiento-chapas-arranque/img6.jpg',
    caption: 'Sistema de ignición',
    category: 'llaves',
  },
  // Focos
  {
    id: '73',
    imageSrc: '/assets/images/galeria/inicio/focos/img1.jpg',
    caption: 'Focos automotrices',
    category: 'productos',
  },
  {
    id: '74',
    imageSrc: '/assets/images/galeria/inicio/focos/img2.jpg',
    caption: 'Focos LED blancos',
    category: 'productos',
  },
  {
    id: '75',
    imageSrc: '/assets/images/galeria/inicio/focos/img3.jpg',
    caption: 'Focos de alta calidad',
    category: 'productos',
  },
  {
    id: '76',
    imageSrc: '/assets/images/galeria/inicio/focos/img4.jpg',
    caption: 'Focos halógenos',
    category: 'productos',
  },
];
