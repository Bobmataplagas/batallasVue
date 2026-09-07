<script setup lang="ts">
import { ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import Silksong from './components/Silksong.vue';
import StreetFighter from './components/StreetFighter.vue';
import silksongBackground from './assets/hornet bench.mp4';

const activeSection = ref<'Silksong' | 'SF3S'>('Silksong');
</script>

<template>
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

    <h1 class="title-center color2">Batallas de videojuegos</h1>
    <HeaderComponent @select-section="activeSection = $event" />

    <section v-if="activeSection === 'Silksong'" id="" class="seccion">
      <Silksong />
    </section>

    <section v-if="activeSection === 'SF3S'" id="SF3S" class="seccion">
      <StreetFighter />
    </section>
  </div>
</template>
