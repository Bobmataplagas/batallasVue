<script setup lang="ts">
import { ref } from 'vue';
import Carrusel from './Carrusel.vue';
import splatcontrol1 from '../assets/splatcontrol1.png';
import splatcontrol2 from '../assets/splatcontrol2.png';
import splatcontrol3 from '../assets/splatcontrol3.png';
import splatcontrol4 from '../assets/splatcontrol4.png';
import splatopin1 from '../assets/splatopin1.png';
import splatopin2 from '../assets/splatopin2.png';
import splatopin3 from '../assets/splatopin3.png';
import splatopin4 from '../assets/splatopin4.png';
const activeCardSection = ref<'batallas' | 'historia' | 'controles' | 'opiniones'>('batallas');

const carouselImages1= [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzp8_r7Ogws4j5GZjGQCS2Tmcu2Rpy0MptZKOVv9jeqRfQh497_flA-f1&s=10',
    alt: 'armas',
  },
  {
    src: 'https://www.spriters-resource.com/media/assets/180/183566.png?updated=1755487449',
    alt: 'golpes',
  },
];

const carouselImages2 = [
  {
    src: 'https://www.youtube.com/embed/sGrXNgmJrUo?si=EFCcyLEaH0OsVgMd',
    alt: 'splatershot',
    type: 'youtube' as const,
  },
  {
    src: 'https://www.youtube.com/embed/0Ii3TRaMw1Y?si=aNdjPkNjQBPloDU2',
    alt: 'metralleta',
    type: 'youtube' as const,
  },
  {
    src: 'https://www.youtube.com/embed/g1aeSmQie9s?si=dVWSyIaFLI8JdBGu',
    alt: 'makoto',
    type: 'youtube' as const,
  },
];

const carouselImages3 = [
  {
    src: splatcontrol1,
    alt: 'Controles de movimiento1',
  },
  {
    src: splatcontrol2,
    alt: 'Controles de movimiento2',
  },
  {
    src: splatcontrol3,
    alt: 'Controles de habilidades1',
  },
  {
    src: splatcontrol4,
    alt: 'Controles de habilidades2',
  }
];

const carouselImages4 = [
  {
    src: splatopin1,
    alt: 'Opinión 1',
  },
  {
    src: splatopin2,
    alt: 'Opinión 2',
  },
  {
    src: splatopin3,
    alt: 'Opinión 3',
  },
  {
    src: splatopin4,
    alt: 'Opinión 4',
  }
];
</script>

<template>
<div>
    <img src="https://splatoon.nintendo.com/_images/logos/splatoon3-logo.png" alt="Splatoon 3" class="image-center" width="30%">

    <div class="text-left color3">
        <p>Es un videojuego de disparos en tercera persona desarrollado por Nintendo EPD y publicado para la consola Nintendo Switch. Fue lanzado a nivel mundial el 9 de septiembre de 2022 y se trata del tercer título de la saga Splatoon.</p>
        <p>El juego está orientado al multijugador en línea y se desarrolla en un mundo habitado por criaturas humanoides capaces de transformarse en calamares (Inkling) o pulpos (Octoling) y disparar tinta. Los usuarios forman equipos de cuatro y deben combatir juntos para vencer a sus rivales sobre el escenario.</p>
    </div>
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
        ⚔️ Batallas
      </button>
    
      <button
        type="button"
        class="card-tab"
        :class="{ 'card-tab--active': activeCardSection === 'historia' }"
        :aria-selected="activeCardSection === 'historia'"
        role="tab"
        @click="activeCardSection = 'historia'"
      >
        📖 Historia
      </button>

      <button
        type="button"
        class="card-tab"
        :class="{ 'card-tab--active': activeCardSection === 'controles' }"
        :aria-selected="activeCardSection === 'controles'"
        role="tab"
        @click="activeCardSection = 'controles'"
      >
        🎮 Controles
      </button>

        <button
        type="button"
        class="card-tab"
        :class="{ 'card-tab--active': activeCardSection === 'opiniones' }"
        :aria-selected="activeCardSection === 'opiniones'"
        role="tab"
        @click="activeCardSection = 'opiniones'"
        >
        💭 Opiniones
        </button>
    </div>

    <div v-if="activeCardSection === 'batallas'" class="card-content"            role="tabpanel">
            <div class="color2 title-center">
                <h2>Batallas</h2>
            </div> 

            <div class="text-left color2">
            <p>En el modo amistoso, también conocido como «Territorial», el jugador participa en una batalla de dos equipos con tres minutos de duración. El objetivo es cubrir la mayor parte de superficie posible con la tinta del color del grupo, así como liquidar a los rivales. Si el personaje es eliminado, reaparecerá en unos segundos desde el punto de salida. Es necesario que haya ocho personas conectadas para poder empezar, y el reparto de equipos es completamente aleatorio. A partir del nivel 10 el jugador puede acceder al modo competitivo, llamado «Combate Caótico», en el que participan dos equipos en cuatro estilos distintos con sus propias reglas: «Pintazonas», «Torre», «Pez Dorado» y «Asalto Almeja». Las modalidades van rotando cada dos horas.</p>
            </div>
            <Carrusel :images="carouselImages2" />
            <div class="text-left color2">
            <p>Existen varios tipos de armas: Shooters, Rollers, Chargers, Sloshers, Splatlings, Dualies, Brellas, Blasters, Brushes, Stringers y Splatanas.
            Además de que tambien existen diferentes tipos de bombas que sirven como arma secundaria y al llenar una barra de carga, el jugador puede activar un ataque especial, los cuales también tienen sus propias características. Dependiendo del arma que se esté usando es su bomba y su habilidad especial.
            </p>
            <Carrusel :images="carouselImages1" />
            </div>
    </div>

    <div v-if="activeCardSection === 'historia'" class="card-content" role="tabpanel">
      <div class="color2 title-center">
        <h2>Historia </h2>
      </div>
        <div class="text-left color2">
            <p style="padding-bottom: 5%;">Splatoon 3 transcurre en la región de Tintelia, una zona desértica y abrasadora, cinco años después de la segunda entrega. De acuerdo con el propio juego, Tintelia fue la primera región colonizada por los ancestros de los Inkling y Octoling, después de que la civilización humana se hubiera extinguido por la subida del nivel del mar y fuese reemplazada por criaturas marinas evolucionadas. La ciudad de Tintelia ha sido construida de forma caótica con restos posapocalípticos de la civilización humana. Para esta trama se tuvo en cuenta el resultado del último evento de Splatoon 2, donde la opción (caos) venció a (orden).</p>
            
            <p style="padding-bottom: 5%;">El modo individual se titula «El regreso de los mamiferoides» y transcurre en Alterna, una región subterránea en las profundidades de un cráter volcánico. La historia comienza con un tutorial donde el Inkling u Octoling es reclutado en el desierto como nuevo Agente 3 por el Capitán Jibión. El personaje está acompañado por una mascota salmónida —Cenutrín o Escamita, según la traducción— que puede utilizar como arma en las misiones. Tras concluir el tutorial, todos los personajes caen por un cráter hacia Alterna. Allí el jugador se encontrará con las Calamarciñas (Mar y Tina) y el Agente 3 original.</p>
            
            <p style="padding-bottom: 5%;">La región de Alterna está formada por seis islas con un cohete gigante en la parte central. Casi toda la superficie está bloqueada por una extraña sustancia de pelo marrón, el (plasma pelificador), que transforma en un extraño mamífero a quien la toca. No obstante, los salmónidos son inmunes al plasma y pueden comérselo para despejar la zona. Guiado por las agentes y su mascota, el jugador deberá superar las distintas misiones encomendadas por O.R.C.A. (una inteligencia artificial de Alterna) para explorar todas las islas, mejorar el equipamiento, encontrar al desaparecido Capitán Jibión y llegar al cohete que permite regresar a Tintelia. Por el camino deberá enfrentarse a los tres miembros del Clan Surimi, que llevan una doble vida como bandoleros y hacen las veces de jefes de nivel.</p>
        </div>

        <div class="video-container">
            <iframe
            src="https://www.youtube.com/embed/Z4ngPsn5d5A?si=VkQ9SVlhCxZz2N61"
            title="Splatoon 3 - Tráiler"
            allowfullscreen
            ></iframe>
        </div>
    </div>

    <div v-if="activeCardSection === 'controles'" class="card-content" role="tabpanel">
      <div class="color2 title-center">
        <h2>Controles </h2>
      </div>
      <Carrusel :images="carouselImages3" />
    </div>

    <div v-if="activeCardSection === 'opiniones'" class="card-content" role="tabpanel">
      <div class="color2 title-center">
        <h2>Opiniones</h2>
      </div>
      <Carrusel :images="carouselImages4" />
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
