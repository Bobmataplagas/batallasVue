export const console = [
    'Nintendo 64',
    'Nintendo GameCube',
    'Game Boy Advance',
    'Nintendo DS',
    'Nintendo Wii',
    'Nintendo 3DS',
    'PlayStation 1',
    
] as const

export type consola = typeof console[number]
export interface game {
    id: string;
    name: string;
    genre: string;
    console: consola;
    description: string;
    price: number;
    image: string;
    video: string;
}

export const games: game[] = [
    {
        id: '1',
        name: 'Final Fantasy VII',
        genre: 'RPG',
        description: 'Es un videojuego de rol desarrollado y publicado por la empresa Square para la plataforma PlayStation. Publicado en 1997, se trata de la séptima entrega de la serie Final Fantasy y la primera de la saga en presentar gráficos tridimensionales, mostrando personajes completamente renderizados sobre escenarios prerrenderizados. El argumento de Final Fantasy VII se centra en el protagonista Cloud Strife, un mercenario que inicialmente se une al grupo ecoterrorista AVALANCHA para detener el control mundial de la corporación Shinra que está drenando la vida del planeta para usarla como fuente de energía. Conforme la historia avanza, Cloud y sus aliados se ven envueltos en un conflicto que representa una amenaza aún mayor para el mundo, enfrentándose a Sefirot, el antagonista principal del juego.',
        console: 'PlayStation 1',
        price: 299,
        image: 'https://thumb.wikimedia.org/wikipedia/en/thumb/c/c2/Final_Fantasy_VII_Box_Art.jpg/250px-Final_Fantasy_VII_Box_Art.jpg',
        video: 'https://www.youtube.com/embed/DDxikKSDtZg?si=cHmai8mOIpdMIkQ6',
    },
    {
        id: '2',
        name: 'Zelda: Ocarina of Time',
        genre: 'Aventura',
        description: 'La historia del juego se enfoca en el joven héroe Link, quien emprende una aventura en el reino de Hyrule para detener a Ganondorf, rey de la tribu Gerudo, antes de que encuentre la Trifuerza, una reliquia sagrada capaz de concederle cualquier deseo a su poseedor. Para ello, debe viajar a través del tiempo y explorar varios templos con el fin de despertar a algunos sabios que tienen el poder para aprisionar de forma definitiva a Ganondorf. Se ha de mencionar que la música juega un papel muy importante en la trama del juego, puesto que el jugador tiene que aprender a tocar varias canciones con una ocarina. ',
        console: 'Nintendo 64',
        price: 199,
        image: 'https://i.ebayimg.com/images/g/k7cAAOSwJ19kYC3u/s-l1200.jpg',
        video: 'https://www.youtube.com/embed/eGI-gIMSQMQ?si=34KC-DyCLDmpu_VL',
    },
    {
        id: '3',
        name: 'Sonic Rush Adventure',
        genre: 'Plataformas',
        description: 'Es un videojuego de plataformas en 2D, similar a los juegos anteriores de la serie como Sonic Advance, así como a los posteriores como Sonic Mania. Los niveles son de desplazamiento lateral y se muestran usando ambas pantallas del DS. Sin embargo, las batallas contra jefes, los personajes principales y un escenario especial se renderizan en 3D, creando un efecto 2.5D. La trama sigue las aventuras entrelazadas del personaje principal de la serie, Sonic the Hedgehog, y un nuevo personaje, Blaze the Cat. Luchan respectivamente contra el Doctor Eggman y su doppelgänger Eggman Nega en ciertos puntos.',
        console: 'Nintendo DS',
        price: 49,
        image: 'https://m.media-amazon.com/images/I/61tEqF7tsOL.jpg',
        video: 'https://youtu.be/4DQ9hKu6Usk?si=tv6R-7_vrG5PJkU2',
    },
    {
        id: '4',
        name: 'Zelda Wind Waker',
        genre: 'Aventura',
        description: 'La historia del juego se desarrolla, por primera vez en la serie, en un archipiélago de un vasto océano. El jugador controla a Link, quien lucha contra el malvado Ganondorf por el control de una reliquia sagrada conocida como la Trifuerza. En la mayor parte del juego, el personaje navega por el mar, viaja entre islas y atraviesa mazmorras y templos para obtener el poder necesario con el que enfrentar a Ganondorf. Su aventura comienza una vez que su pequeña hermana es secuestrada por un enorme pájaro que arriba a la isla donde el héroe habita; más tarde, Link descubre que el ave es manipulada por Ganondorf.',
        console: 'Nintendo GameCube',
        price: 500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ijxYsVIW26qs_-hwiU0164DIvNZRfFen3MYEKijHZg&s',
        video: 'https://www.youtube.com/embed/BP42wusaHJI?si=1dzE3qBOd3I8rEGP',
    },
    {
        id: '5',
        name: 'Kirby Return to Dreamland',
        genre: 'Plataformas',
        description: 'La historia del juego se desarrolla, por primera vez en la serie, en un archipiélago de un vasto océano. El jugador controla a Link, quien lucha contra el malvado Ganondorf por el control de una reliquia sagrada conocida como la Trifuerza. En la mayor parte del juego, el personaje navega por el mar, viaja entre islas y atraviesa mazmorras y templos para obtener el poder necesario con el que enfrentar a Ganondorf. Su aventura comienza una vez que su pequeña hermana es secuestrada por un enorme pájaro que arriba a la isla donde el héroe habita; más tarde, Link descubre que el ave es manipulada por Ganondorf.',
        console: 'Nintendo Wii',
        price: 200,
        image: 'https://m.media-amazon.com/images/I/913HZWRUZSL._AC_UF1000,1000_QL80_.jpg',
        video: 'https://www.youtube.com/embed/3jREtet-_ag?si=EySsOsfCfIxoRkja',
    },
    {
        id: '6',
        name: 'Wario Ware inc',
        genre: 'Microjuegos',
        description: 'La historia del juego se desarrolla, por primera vez en la serie, en un archipiélago de un vasto océano. El jugador controla a Link, quien lucha contra el malvado Ganondorf por el control de una reliquia sagrada conocida como la Trifuerza. En la mayor parte del juego, el personaje navega por el mar, viaja entre islas y atraviesa mazmorras y templos para obtener el poder necesario con el que enfrentar a Ganondorf. Su aventura comienza una vez que su pequeña hermana es secuestrada por un enorme pájaro que arriba a la isla donde el héroe habita; más tarde, Link descubre que el ave es manipulada por Ganondorf.',
        console: 'Game Boy Advance',
        price: 50,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HQ6z01Fxz2bI4zrw21anyTEXJ8UJWrnLAkrv6_kXCQ&s=10',
        video: 'https://www.youtube.com/embed/RqmddEkBNfA?si=R0kPOiZLMDUZGFKJ',
    },
    {
        id: '7',
        name: 'Super Smash Bros',
        genre: 'Lucha',
        description: 'Super Smash Bros. reúne personajes de varias sagas de Nintendo en combates donde el objetivo es expulsar a los rivales del escenario. Permite enfrentamientos individuales y multijugador con diferentes reglas y escenarios.',
        console: 'Nintendo 64',
        price: 249,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20100331153326/Car%C3%A1tula_Super_Smash_Bros.jpg',
        video: 'https://www.youtube.com/embed/K783SDTBKmg?si=9aHp2rC8FNQY6Yz3',
    },
    {
        id: '8',
        name: 'Mario Kart: Double Dash!!',
        genre: 'Carreras',
        description: 'Mario Kart: Double Dash!! permite competir con parejas de personajes que comparten un mismo kart. Los jugadores pueden cambiar entre conductores y combinar objetos especiales durante las carreras y torneos.',
        console: 'Nintendo GameCube',
        price: 299,
        image: 'https://static.wikia.nocookie.net/mario/images/7/70/Mario_Kart_Double_Dash%21%21.jpg',
        video: 'https://www.youtube.com/embed/_6FYhqGgel8?si=N1cLknHkSRuLKbt8',
    },
    {
        id: '9',
        name: 'Pokémon Emerald',
        genre: 'RPG',
        description: 'Pokémon Emerald lleva al jugador por la región de Hoenn para atrapar Pokémon, superar los gimnasios y enfrentarse al Equipo Aqua y Magma. La aventura también presenta batallas en la Frente Batalla y encuentros con legendarios.',
        console: 'Game Boy Advance',
        price: 199,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/02/latest/20211108123052/Caratula_Esmeralda.jpg/800px-Caratula_Esmeralda.jpg',
        video: 'https://www.youtube.com/embed/xwKLpAMULeg?si=H1ZKq3rEguRWHZv-',
    },
    {
        id: '10',
        name: 'Pokémon Platinum',
        genre: 'RPG',
        description: 'Pokémon Platinum continúa la aventura de Sinnoh con nuevas historias, formas regionales y desafíos. El jugador explora la región, completa la Pokédex, derrota los gimnasios y descubre a los Pokémon legendarios Giratina y el Equipo Galáctico.',
        console: 'Nintendo DS',
        price: 179,
        image: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f4/latest/20211108120853/Car%C3%A1tula_Pok%C3%A9mon_Platino_%28ESP%29.png/800px-Car%C3%A1tula_Pok%C3%A9mon_Platino_%28ESP%29.png',
        video: 'https://www.youtube.com/embed/RQS0BS0r5Kk?si=83wa0qIglVQdZVla',
    },
    {
        id: '11',
        name: 'Super Mario Galaxy',
        genre: 'Aventura',
        description: 'Super Mario Galaxy lleva a Mario por diferentes galaxias en una aventura basada en la gravedad y la exploración espacial. Cada planeta ofrece mecánicas, enemigos y desafíos distintos mientras intenta rescatar a Peach.',
        console: 'Nintendo Wii',
        price: 299,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQGLa1Ggj3E1GuYBasnhTlCx12u7mWNcFs-hXS07-y0VlyQDVWiHVuuNf&s=10',
        video: 'https://www.youtube.com/embed/rmN8DHZYNCg?si=kuZPr2PnqVFJXnOg',
    },
    {
        id: '12',
        name: 'Super Mario 3D Land',
        genre: 'Plataformas',
        description: 'Super Mario 3D Land combina plataformas en tres dimensiones con el diseño clásico en dos dimensiones de la saga Mario. El jugador explora niveles tridimensionales, recoge estrellas y utiliza nuevos objetos para superar las trampas.',
        console: 'Nintendo 3DS',
        price: 299,
        image: 'https://m.media-amazon.com/images/I/71EJsujGS+S.jpg',
        video: 'https://www.youtube.com/embed/QlniEA5o2Kw?si=BqFQaAp_9_LebbJ2',
    },
    {
        id: '13',
        name: 'Crash Bandicoot',
        genre: 'Plataformas',
        description: 'Crash Bandicoot sigue al marsupial Crash en su lucha contra el malvado Doctor Neo Cortex. El juego presenta niveles de plataformas, obstáculos, cajas rompibles y habilidades especiales para rescatar a los personajes cautivos.',
        console: 'PlayStation 1',
        price: 249,
        image: 'https://media.vandal.net/m/1420/crash-bandicoot-201610518540_1.jpg',
        video: 'https://www.youtube.com/embed/n_pwOxMhhGs?si=hfDFIQEsHwOSuHVB',
    },
    {
        id: '14',
        name: 'Resident Evil 3',
        genre: 'Terror',
        description: 'Es un videojuego de terror y supervivencia de disparos en tercera persona, desarrollado y publicado por Capcom para la PlayStation siendo la segunda entrega de la serie de videojuegos Resident Evil, el segundo título publicado originalmente para la consola PlayStation y la secuela directa del primer título, aunque con un elenco de personajes distinto al de la entrega anterior.',
        console: 'PlayStation 1',
        price: 299,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqocc4NVdrAXIlTDLXFo49Qlrp2jdz8WF08mUGpH9z7w&s',
        video: 'https://www.youtube.com/embed/NW7DmsRKrDA?si=0-Pc552EAcmXZpoX',
    }
]