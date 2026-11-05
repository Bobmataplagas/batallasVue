<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';

import Ayudaview from './views/Ayudaview.vue';

const showHelp = ref(false);
</script>

<template>
  <Navbar @toggle-help="showHelp = !showHelp" />
  <RouterView />
  <div v-if="showHelp" class="help-backdrop" @click.self="showHelp = false">
    <Ayudaview @close="showHelp = false" />
  </div>
  <!--
  <div class="game-background" :class="`background-${activeSection}`">
    <video
      v-if="activeSection === 'Silksong'"
      class="game-video"
      :src="silksongBackground"
      autoplay
      muted
      loop
      playsinline
    ></video>

    <div class="spacer" aria-hidden="true"></div>
    <HeaderComponent @select-section="activeSection = $event" />

    <section v-if="activeSection === 'Silksong'" id="" class="seccion">
      <Silksong />
    </section>

    <section v-if="activeSection === 'SF3S'" id="SF3S" class="seccion">
      <StreetFighter />
    </section>

    <section v-if="activeSection === 'Splatoon'" id="Splatoon" class="seccion">
      <Splatoon />
    </section>
  </div>
  -->
</template>

<style scoped>
.help-backdrop {
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.55);
}

.spacer {
  height: 2rem; /* Ajusta el espacio */
  flex: 0 0 auto;
}
</style>