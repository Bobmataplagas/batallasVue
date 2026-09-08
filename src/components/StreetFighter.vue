<script setup lang="ts">
import { ref } from 'vue';
import Carrusel from './Carrusel.vue';
import streetFighterLogo from '../assets/SFIII3Strike-Logotipo.png';
const activeCardSection = ref<'batallas' | 'historia' | 'controles' | 'opiniones'>('batallas');

const carouselImages1 = [
  {
    src: 'https://www.youtube.com/embed/FCN7QBekjk8?si=d83AktEnHUS9Ts0Q',
    alt: 'intro',
    type: 'youtube' as const,
  },
  {
    src: 'https://www.youtube.com/embed/pS5peqApgUA',
    alt: 'ken',
    type: 'youtube' as const,
  },
  {
    src: 'https://www.youtube.com/embed/FLX_QVAT4Go?si=g3ePVLa8-brxQACZ',
    alt: 'makoto',
    type: 'youtube' as const,
  },
  {
    src: 'https://www.youtube.com/embed/ShMZHlpTfS0?si=JY9eQIOf0ZXX65rY',
    alt: 'dudley',
    type: 'youtube' as const,
  },
];

const carouselImages2 = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOfWrCNGXdch2i1iCamuu6Uf0wJUsKkGX1JU2nYrk1g&s=10',
    alt: 'stick',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbFdwemdKZFvJ1lVURF5IRjGpEM7eekrawfzPqb_bdlr67z7v64w8Slca&s=10',
    alt: 'golpes',
  },
];

</script>

<template>
<img
    :src="streetFighterLogo"
    alt="Street Fighter III: Third Strike"
    class="street-fighter-logo"
>

<div class="text-left color1">
    <p>Street Fighter III: Third Strike es un videojuego de lucha desarrollado por Capcom. Los jugadores pueden competir en combates uno contra uno, utilizando una combinación de ataques, movimientos especiales y técnicas defensivas para derrotar a su oponente. Third Strike es conocido por su sistema de parry, que permite a los jugadores contrarrestar los ataques enemigos con precisión y habilidad. Además de un bonito pixel art y sobre todo su gran soundtrack, compuesto por  Hideki Okugawa, que trae una combinación entre  hip-hop beats, drum and bass, jazz, y rock</p>
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
            <p>El retador sistema de combate incentiva paciencia por encima de los reflejos, los jugadores se enfrentarán a una variedad de enemigos y jefes desafiantes, cada uno con sus propios patrones de ataque y habilidades únicas. El modo de pelear de Hornet es acrobático y permite realizar combinaciones de ataques letales contra los enemigos.La curación por seda permite restaurar 3 puntos de vida, aún estando en movimiento, sin Sin embargo consume toda la sección de seda. </p>
            </div>
            <Carrusel :images="carouselImages1" />
            <div class="text-left color2">
            <p>El juego cuenta con un total de 20 personajes en su plantilla general. De estos, 19 son personajes seleccionables desde el principio y 1 (Gill) funciona como el jefe final no seleccionable de manera estándar en la versión arcade. </p>
            <img src="https://thirdstreetbattle.net/user/pages/01.home/_presentation/charaselect.png" alt="personajes jugables" class="image-center" width="80%" style="padding-left: 8.5%; padding-top: 2.5%;">
            </div>
    </div>

    <div v-if="activeCardSection === 'historia'" class="card-content" role="tabpanel">
      <div class="color2 title-center">
        <h2>Historia </h2>
      </div>
      <div class="text-left color2">
        <p>3rd Strike cuenta la historia de lo que sucedió después de los eventos de Street Fighter III: 2nd Impact y la conclusión del Torneo New World Warrior (el Torneo World Warrior original organizado por M. Bison ). Entre las batallas que ocurrieron durante este tiempo:</p>
        <p>_</p>
        <p><strong>Alex contra Ryu:</strong> Ryu se enfrenta a Alex y lo derrota de forma contundente, lo que provoca que Alex se obsesione con volver a luchar contra Ryu y convertirse en un mejor luchador.</p>

        <p><strong>Ryu contra Ken:</strong> Los dos amigos se enfrentan una vez más y Ryu vuelve a derrotar a Ken por un estrecho margen, elogiándolo como su oponente más digno.</p>

        <p><strong>Chun-Li contra Urien:</strong> Chun-Li exige la devolución de un niño secuestrado y Urien accede a cumplir con la condición de que Chun-Li le ofrezca un combate entretenido. Se desconoce quién ganó, aunque se da a entender que Chun-Li fue la vencedora, ya que el niño fue devuelto.</p>
        
        <p><strong>Necro contra Twelve:</strong> Al enterarse de que Necro y su compañera, Effie, sobrevivieron a los eventos del Segundo Impacto , Gill o Urien ordenan a Twelve, el sucesor de Necro, que los persiga y los elimine. Si bien se desconoce el resultado oficial de esta batalla, el final de Necro revela que él y Effie probablemente sobrevivieron al encuentro. Mientras tanto, Twelve regresa al laboratorio del Dr. Woo para recuperarse, y se insinúa que ha adquirido consciencia, ya que sus ojos huecos se tornan rojos.</p>

        <p><strong>Akuma contra Oro:</strong> Ambos se enfrentaron tras un encuentro, pero decidieron cesar el combate ya que no había un ganador claro y ambos creían que, de haber continuado, se produciría una muerte mutua.</p>
      </div>
    </div>

    <div v-if="activeCardSection === 'controles'" class="card-content" role="tabpanel">
      <div class="color2 title-center">
        <h2>Controles </h2>
      </div>
      <div class="text-left color2">
        <p>Está es la asignación de controles para el juego. Depende de la persona, es el orden de los botones. De igual manera dependiendo del personaje son las combinaciones para sus especiales.</p>
      </div>
      <Carrusel :images="carouselImages2" />
    </div>

    <div v-if="activeCardSection === 'opiniones'" class="card-content" role="tabpanel">
      <div class="color2 title-center">
        <h2>Opiniones</h2>
      </div>
      <div class="text-left color2">
        <p>Street Fighter III: Third Strike es considerado por la crítica y los aficionados como una de las cimas de los juegos de lucha en 2D y una obra maestra atemporal de Capcom.</p>
        <p><strong>Audiovisual:</strong> Posee sprites en dos dimensiones dibujados y animados a mano con un nivel de detalle fluido y brillante, acompañado de una banda sonora de estilo hip-hop y jazz moderno muy elogiada.</p>
        <p><strong>El sistema de Parry:</strong> La mecánica de desviar ataques al tocar hacia adelante o hacia abajo en el momento exacto revolucionó la intensidad de los duelos y dio pie al icónico y legendario momento de Daigo en el torneo Evo.</p>
        <p><strong>Desbalance de personajes:</strong> Aunque cuenta con 19 luchadores llenos de personalidad, parte de la comunidad señala que el elenco competitivo real se reduce a unos pocos personajes altamente viables (como Chun-Li o Ken), dejando al resto en desventaja</p>
        <p><strong>Curva de aprendizaje muy alta:</strong> La exigencia técnica del parry y el conocimiento profundo de frames pueden frustrar a los jugadores más novatos.</p>
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
