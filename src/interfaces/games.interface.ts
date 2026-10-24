export interface juego {
    id: string;
    area: genero;
    nombre: string;
    descripcion: string;
    precio: number;
    image: string;
    temas: string[];
    video?: string;
}

export const genero = [
    'RPG',
    'Shooter',
    'Estrategia',
    'Deportes',
    'Plataformas',
    'Aventura',
    'Roguelike',
    'Metroidvania'
] as const

export type genero = typeof genero[number]
