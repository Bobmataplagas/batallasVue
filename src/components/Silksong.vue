<script setup lang="ts">
import { ref } from 'vue';
import Carrusel from './Carrusel.vue';
import controles1 from '../assets/controles1.png';
import controles2 from '../assets/controles2.png';
import controles3 from '../assets/controles3.png';

const activeCardSection = ref<'batallas' | 'historia' | 'controles' | 'opiniones'>('batallas');

const carouselImages1 = [
  {
    src: 'https://i.blogs.es/95fb66/blason-cazadora/450_1000.jpeg',
    alt: 'cazadora',
  },
  {
    src: 'https://images.steamusercontent.com/ugc/12711835155772458025/E365DD006AA0315AE207CC87698AE3BF56642675/',
    alt: 'Perca',
  },
  {
    src: 'https://images.steamusercontent.com/ugc/9266226264849677216/D885BC0B314603F6D59B400F76727A6F6C5657FB/',
    alt: 'Errante',
  },
  {
    src: 'https://images.steamusercontent.com/ugc/12711835155772458025/E365DD006AA0315AE207CC87698AE3BF56642675/',
    alt: 'Bestia',
  },
  {
    src: 'https://images.steamusercontent.com/ugc/9804245814915529306/9807F7CA1B427B5D5CDD00C30ECD724C35EC1AE8/',
    alt: 'Bruja',
  },
  {
    src: 'https://images.steamusercontent.com/ugc/9960937124610899554/791DEB0CBED6216C47992CD4C52828654BF29101/',
    alt: 'Arquitecto',
  },
  {
    src: 'https://images.steamusercontent.com/ugc/9940429778406772274/B1A92FD3534BE5558671DFF4A8BE1682F68A0287/',
    alt: 'Chaman',
  },
];

const carouselImages2 = [
  {
    src: 'https://www.youtube.com/embed/VDn-0MMREZU',
    alt: 'Karmelita',
    type: 'youtube' as const,
  },
  {
    src: 'https://www.youtube.com/embed/iy73UyDLU1Q?si=ar14sd_FsrVhBF-W',
    alt: 'Groal the great',
    type: 'youtube' as const,
  },
  {
    src: 'https://www.youtube.com/embed/NG824icvVC0?si=QMpa---ub_glc2yQ',
    alt: 'Trobbio',
    type: 'youtube' as const,
  },
  
];

const carouselImages3 = [
  {
    src: controles1,
    alt: 'Controles de movimiento',
  },
  {
    src: controles2,
    alt: 'Controles de salto',
  },
  {
    src: controles3,
    alt: 'Controles de ataque',
  },

];
</script>

<template>
    <img src="https://smashcustommusic.net/logos/5687" alt="ekale" class="image-center" width="30%">

<div>
    <p class="text-left color2">Hollow Knight: Silksong es un videojuego metroidvania desarrollado por el estudio independiente australiano Team Cherry, es la secuela del videojuego de 2017 Hollow Knight. 
    </p>
    <p class="text-left color2">Es un metroidvania de acción y aventura en 3D y tiene lugar en un reino mordaz habitado por artrópodos antropomorfizados, controlas a Hornet, una criatura arácnida que empuña una aguja para combatir enemigos.</p>
</div>


<div class="game-card-layout">
  <article class="game-card">
    <div class="card-tabs" role="tablist" aria-label="Información de Silksong">
      <button
        type="button"
        class="card-tab"
        :class="{ 'card-tab--active': activeCardSection === 'batallas' }"
        :aria-selected="activeCardSection === 'batallas'"
        role="tab"
        @click="activeCardSection = 'batallas'"
      >
        Batallas
      </button>
    
      <button
        type="button"
        class="card-tab"
        :class="{ 'card-tab--active': activeCardSection === 'historia' }"
        :aria-selected="activeCardSection === 'historia'"
        role="tab"
        @click="activeCardSection = 'historia'"
      >
        Historia
      </button>

      <button
        type="button"
        class="card-tab"
        :class="{ 'card-tab--active': activeCardSection === 'controles' }"
        :aria-selected="activeCardSection === 'controles'"
        role="tab"
        @click="activeCardSection = 'controles'"
      >
        Controles
      </button>

        <button
        type="button"
        class="card-tab"
        :class="{ 'card-tab--active': activeCardSection === 'opiniones' }"
        :aria-selected="activeCardSection === 'opiniones'"
        role="tab"
        @click="activeCardSection = 'opiniones'"
        >
        Opiniones
        </button>
        </div>

        <div v-if="activeCardSection === 'batallas'" class="card-content"            role="tabpanel">
            <div class="color2 title-center">
                <h2>Batallas</h2>
            </div> 

            <div class="text-left color2">
            <p>El retador sistema de combate incentiva paciencia por encima de los reflejos, los jugadores se enfrentarán a una variedad de enemigos y jefes desafiantes, cada uno con sus propios patrones de ataque y habilidades únicas. El modo de pelear de Hornet es acrobático y permite realizar combinaciones de ataques letales contra los enemigos.La curación por seda permite restaurar 3 puntos de vida, aún estando en movimiento, sin Sin embargo consume toda la sección de seda. </p>

            <p>Los blasones o crestas, son el sistema que permite equipar habilidades, herramientas y modifica el estilo de ataques. Cada blasón tiene una capacidad pasiva distinta y una distribución distinta de tipo de herramientas. </p>

            <Carrusel :images="carouselImages1" />

        <p>Las herramientas disponibles se catalogan en 3 grupos rojas, azules y amarillas. Las herramientas rojas proveen de un ataque arrojable con munición limitada, las azules aportan efectos defensivos; las amarillas ofrecen soporte general, como mostrar la ubicación en el mapa.</p>
      </div>

        <img src="https://tierradegamers.com/wp-content/uploads/2026/01/Silksong-todas-las-herramientas.jpg" alt="Perca" class="image-center" width="60%" style="padding-top: 2.5%;">

        <h3 class="text-left">Algunas batallas contra jefes:</h3>
        <Carrusel :images="carouselImages2" />
      
     
    </div>

    <div v-if="activeCardSection === 'historia'" class="card-content" role="tabpanel">
      <div class="color2 title-center">
        <h2>Historia</h2>
      </div>
      <div class="text-left color2">
        <p>Hornet se encuentra cautiva en el reino desconocido y mordaz de Telalejana, del cual se dice que está embrujado por La Gran Madre Seda. Hornet debe subir hasta la superficie, una ciudadela brillante, para descubrir por qué fue llevada a ese misterioso lugar. </p>
        <p>Al comienzo del juego, Hornet es emboscada y alejada de su hogar, despierta prisionera en una tierra extraña. Para recuperar su libertad y descubrir los motivos de su captura, Hornet debe abrirse paso luchando y ascender desde las profundidades del reino hasta la imponente Ciudadela ubicada en la cima.</p>
        <p> El reino está dominado por una entidad superior conocida como la Gran Madre Seda, un ser pálido similar al Rey Pálido o a Radiance de la entrega anterior, esta diosa usa su poderosa seda ligada al alma de los insectos para someter a los habitantes y peregrinos de Telalejana. Muchos pierden la razón debido a este embrujo y atacan a otros.</p>
        <p> En el pasado, la Gran Madre Seda transformó a criaturas menores en las primeras tejedoras para construir su civilización y la gran Ciudadela.</p>
      </div>
    </div>

    <div v-if="activeCardSection === 'controles'" class="card-content" role="tabpanel">
      <div class="color2 title-center">
        <h2>Controles</h2>
      </div>
      <div class="text-left color2">
        <p>Dependiendo de si se está usando teclado o control cambia la asignación de botones. De igual manera puede diferir si es un control de Xbox, PlayStation o Nintendo Switch.</p>
      </div>
      <Carrusel :images="carouselImages3" />
    </div>

    <div v-if="activeCardSection === 'opiniones'" class="card-content" role="tabpanel">
      <div class="color2 title-center">
        <h2>Opiniones</h2>
      </div>
      <div class="text-left color2">
        <p>Silksong ha sido elogiado por su jugabilidad, diseño de niveles y banda sonora, consolidando su lugar como un título destacado en el género metroidvania.</p>
      </div>
    </div>
  </article>
</div>

</template>

<style scoped>
.video-container {
    width: 100%;
    aspect-ratio: 16 / 9;
}

.video-container iframe {
    width: 100%;
    height: 100%;
    border: 0;
}

.card-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.card-tab {
  padding: 0.65rem 1rem;
  border: 0;
  border-bottom: 3px solid transparent;
  background: transparent;
  color: #c8d0da;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

.card-tab:hover,
.card-tab--active {
  color: #ffffff;
  border-bottom-color: #9ed8ff;
}

.card-tab:focus-visible {
  outline: 2px solid #9ed8ff;
  outline-offset: 2px;
}

.card-content h2 {
  margin-bottom: 0.75rem;
}

</style>
