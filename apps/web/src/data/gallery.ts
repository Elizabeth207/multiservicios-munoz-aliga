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
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Sistema de alarma para vehículos',
    category: 'productos',
  },
  {
    id: '2',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Instalación profesional de alarmas',
    category: 'instalaciones',
  },
  {
    id: '3',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Alarma con sensor de movimiento',
    category: 'productos',
  },
  {
    id: '4',
    imageSrc: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    caption: 'Control remoto de alarma',
    category: 'productos',
  },
  {
    id: '5',
    imageSrc: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
    caption: 'Sistema de seguridad completo',
    category: 'productos',
  },
  // GPS
  {
    id: '6',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Sistema de rastreo GPS',
    category: 'productos',
  },
  {
    id: '7',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Sistema de rastreo GPS instalado',
    category: 'instalaciones',
  },
  {
    id: '8',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'GPS rastreo en tiempo real',
    category: 'productos',
  },
  {
    id: '9',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Sistema GPS avanzado',
    category: 'productos',
  },
  {
    id: '10',
    imageSrc: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    caption: 'GPS con geolocalización precisa',
    category: 'productos',
  },
  {
    id: '11',
    imageSrc: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
    caption: 'Monitoreo GPS 24/7',
    category: 'productos',
  },
  // Focos neblineros
  {
    id: '12',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Focos neblineros de alta calidad',
    category: 'productos',
  },
  {
    id: '13',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Focos neblineros LED',
    category: 'productos',
  },
  {
    id: '14',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Iluminación auxiliar LED',
    category: 'productos',
  },
  {
    id: '15',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Focos neblineros halógenos',
    category: 'productos',
  },
  {
    id: '16',
    imageSrc: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    caption: 'Kit de neblineros completo',
    category: 'productos',
  },
  {
    id: '17',
    imageSrc: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
    caption: 'Neblineros de alta potencia',
    category: 'productos',
  },
  {
    id: '18',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Instalación de neblineros',
    category: 'instalaciones',
  },
  {
    id: '19',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Neblineros LED blancos',
    category: 'productos',
  },
  // Cierres centralizados
  {
    id: '20',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Sistema de cierre centralizado',
    category: 'instalaciones',
  },
  {
    id: '21',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Cierre centralizado con control remoto',
    category: 'instalaciones',
  },
  {
    id: '22',
    imageSrc: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    caption: 'Actuador de puerta',
    category: 'productos',
  },
  {
    id: '23',
    imageSrc: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
    caption: 'Módulo de cierre centralizado',
    category: 'productos',
  },
  {
    id: '24',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Control remoto universal',
    category: 'productos',
  },
  {
    id: '25',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Sistema de cierre inteligente',
    category: 'productos',
  },
  // Duplicados de llaves
  {
    id: '26',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Duplicado de llaves originales',
    category: 'llaves',
  },
  {
    id: '27',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Copia de llaves con precisión',
    category: 'llaves',
  },
  {
    id: '28',
    imageSrc: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    caption: 'Llaves duplicadas con chip',
    category: 'llaves',
  },
  {
    id: '29',
    imageSrc: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
    caption: 'Corte láser de llaves',
    category: 'llaves',
  },
  {
    id: '30',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Llaves transpondedor',
    category: 'llaves',
  },
  {
    id: '31',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Duplicado de llaves de alta seguridad',
    category: 'llaves',
  },
  // Alternadores
  {
    id: '32',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Reparación de alternadores',
    category: 'electricidad',
  },
  {
    id: '33',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Alternador de alta potencia',
    category: 'electricidad',
  },
  {
    id: '34',
    imageSrc: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    caption: 'Diagnóstico de alternadores',
    category: 'electricidad',
  },
  {
    id: '35',
    imageSrc: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
    caption: 'Rebobinado de alternadores',
    category: 'electricidad',
  },
  {
    id: '36',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Alternador reacondicionado',
    category: 'electricidad',
  },
  {
    id: '37',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Prueba de alternador',
    category: 'electricidad',
  },
  // Pantallas para vehículos
  {
    id: '38',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Pantalla multimedia instalada',
    category: 'instalaciones',
  },
  {
    id: '39',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Pantalla táctil multimedia',
    category: 'productos',
  },
  {
    id: '40',
    imageSrc: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    caption: 'Pantalla Android Auto',
    category: 'productos',
  },
  {
    id: '41',
    imageSrc: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
    caption: 'Pantalla con cámara de retroceso',
    category: 'productos',
  },
  {
    id: '42',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Pantalla multimedia de 9 pulgadas',
    category: 'productos',
  },
  {
    id: '43',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Sistema de entretenimiento completo',
    category: 'productos',
  },
  // Programación de chips de llaves
  {
    id: '44',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Llave con chip programada',
    category: 'llaves',
  },
  {
    id: '45',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Programación de chips de llaves',
    category: 'llaves',
  },
  {
    id: '46',
    imageSrc: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    caption: 'Programación de chips avanzada',
    category: 'llaves',
  },
  // Alarma de retroceso
  {
    id: '47',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Sensores de alarma de retroceso',
    category: 'productos',
  },
  {
    id: '48',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Sensores de proximidad',
    category: 'productos',
  },
  {
    id: '49',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Sistema de alerta de retroceso',
    category: 'productos',
  },
  {
    id: '50',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Sensores ultrasónicos',
    category: 'productos',
  },
  {
    id: '51',
    imageSrc: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    caption: 'Display de distancia',
    category: 'productos',
  },
  {
    id: '52',
    imageSrc: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
    caption: 'Kit de sensores completo',
    category: 'productos',
  },
  // Arrancador de carro
  {
    id: '53',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Reparación de arrancadores',
    category: 'electricidad',
  },
  {
    id: '54',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Motor de arranque reparado',
    category: 'electricidad',
  },
  {
    id: '55',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Arrancador reacondicionado',
    category: 'electricidad',
  },
  {
    id: '56',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Solenoide de arranque',
    category: 'electricidad',
  },
  {
    id: '57',
    imageSrc: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    caption: 'Motor de arranque nuevo',
    category: 'electricidad',
  },
  // Cámara de retroceso
  {
    id: '58',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Cámara de retroceso HD',
    category: 'productos',
  },
  {
    id: '59',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Cámara trasera con guía',
    category: 'productos',
  },
  {
    id: '60',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Cámara impermeable',
    category: 'productos',
  },
  {
    id: '61',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Cámara con visión nocturna',
    category: 'productos',
  },
  // Manijas
  {
    id: '62',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Manijas para puertas de vehículos',
    category: 'productos',
  },
  {
    id: '63',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Manijas de alta calidad',
    category: 'productos',
  },
  {
    id: '64',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Manija exterior de puerta',
    category: 'productos',
  },
  {
    id: '65',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Manija interior de puerta',
    category: 'productos',
  },
  {
    id: '66',
    imageSrc: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    caption: 'Kit de manijas completo',
    category: 'productos',
  },
  // Mantenimiento de chapas de arranque
  {
    id: '67',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Mantenimiento de chapas de arranque',
    category: 'llaves',
  },
  {
    id: '68',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Servicio de mantenimiento de chapas',
    category: 'llaves',
  },
  {
    id: '69',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Chapa de arranque reparada',
    category: 'llaves',
  },
  {
    id: '70',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Limpieza de chapa',
    category: 'llaves',
  },
  {
    id: '71',
    imageSrc: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    caption: 'Chapa reacondicionada',
    category: 'llaves',
  },
  {
    id: '72',
    imageSrc: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
    caption: 'Sistema de ignición',
    category: 'llaves',
  },
  // Focos
  {
    id: '73',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    caption: 'Focos automotrices',
    category: 'productos',
  },
  {
    id: '74',
    imageSrc: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop',
    caption: 'Focos LED blancos',
    category: 'productos',
  },
  {
    id: '75',
    imageSrc: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    caption: 'Focos de alta calidad',
    category: 'productos',
  },
  {
    id: '76',
    imageSrc: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Focos halógenos',
    category: 'productos',
  },
];
