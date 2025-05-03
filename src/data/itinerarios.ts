export interface Paquete {
    nombre: string;
    dias: string[];
  }
  
  export const itinerarios: Record<string, Paquete> = {
    'camino-inca': {
      nombre: 'Camino Inca 4D/3N',
      dias: [
        'Día 1: Cusco - KM82 - Wayllabamba',
        'Día 2: Wayllabamba - Warmiwañusca - Pacaymayo',
        'Día 3: Pacaymayo - Wiñay Wayna',
        'Día 4: Machu Picchu - Cusco',
      ],
    },
    'valle-sagrado': {
      nombre: 'Valle Sagrado + Machu Picchu',
      dias: [
        'Día 1: Cusco - Pisac - Ollantaytambo',
        'Día 2: Machu Picchu - Cusco',
      ],
    },
  };
  