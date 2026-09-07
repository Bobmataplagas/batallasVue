<script setup lang="ts">
import streetFighterLogo from '../assets/SFIII3Strike-Logotipo.png';
</script>

<template>
<img
    :src="streetFighterLogo"
    alt="Street Fighter III: Third Strike"
    class="street-fighter-logo"
>

<div class="text-left color1">
    <p>Street Fighter III: Third Strike es un videojuego de lucha desarrollado por Capcom. Los jugadores pueden competir en combates uno contra uno, utilizando una combinación de ataques, movimientos especiales y técnicas defensivas para derrotar a su oponente. Third Strike es conocido por su sistema de parry, que permite a los jugadores contrarrestar los ataques enemigos con precisión y habilidad. Además de un bonito pixel art y sobre todo su gran soundtrack, compuesto por  Hideki Okugawa, que trae una combinación entre  hip-hop beats, drum and bass, jazz, y rock</p>

    <div class="video-container">
        <iframe
            src="https://www.youtube.com/embed/pS5peqApgUA"
            title="Street Fighter III: Third Strike"
            frameborder="0"
            allow="accelerometer; autoplay=1; mute=1; related=0;"
        ></iframe>
    </div>
</div>

<template>
  <div class="game-card-layout">
    <article class="game-card">
      <!-- Información principal -->
    </article>

    <article class="game-card">
      <!-- Características del juego -->
    </article>

    <article class="game-card">
      <!-- Tráiler -->
    </article>
  </div>
</template>

<!--personajes jugables: https://thirdstreetbattle.net/user/pages/01.home/_presentation/charaselect.png-->

</template>



<style scoped>
.video-container {
    width: min(100%, 900px);
    aspect-ratio: 16 / 9;
    margin: 1.5rem auto;
}

.video-container iframe {
        width: 100%;
        height: 100%;
        border: 0;
}

</style>
