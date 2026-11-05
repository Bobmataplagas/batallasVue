export interface plan {
    id: string;
    name: string;
    description: string;
    price: number;
    features: string[];
}

export const plans: plan [] = [
    {
        id: 'perla',
        name: 'Plan Perla',
        description: 'Ideal para comenzar a disfrutar de todos los juegos.',
        price: 99,
        features: ['Acceso básico', '1 jugador', 'Soporte estándar']
    },
    {
        id: 'diamante',
        name: 'Plan Diamante',
        description: 'Perfecto para jugar con amigos y obtener más ventajas.',
        price: 249,
        features: ['Acceso completo', 'Hasta 3 jugadores', 'Soporte prioritario']
    },
    {
        id: 'platino',
        name: 'Plan Platino',
        description: 'La mejor experiencia para grupos y jugadores frecuentes.',
        price: 499,
        features: ['Acceso premium', 'Hasta 5 jugadores', 'Soporte prioritario 24/7']
    }
 ] as const
