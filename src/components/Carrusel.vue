<script setup lang="ts">
import { ref } from 'vue';

const contenido = defineProps<{
  images: {
    src: string;
    alt: string;
    type?: 'image' | 'youtube';
  }[];
}>();

const activeImage = ref(0);

function nextImage() {
  activeImage.value = (activeImage.value + 1) % contenido.images.length;
}

function previousImage() {
  activeImage.value = (activeImage.value - 1 + contenido.images.length) % contenido.images.length;
}

</script>

<template>
  <div
    v-if="contenido.images.length"
    class="carousel"
    :class="contenido.images[activeImage].type === 'youtube' ? 'carousel--video' : 'carousel--image'"
    aria-label="Carrusel multimedia"
  >
    <button
      type="button"
      class="carousel-button carousel-button--previous"
      aria-label="Imagen anterior"
      @click="previousImage"
    >
      &#10094;
    </button>

    <img
      v-if="contenido.images[activeImage].type !== 'youtube'"
      :src="contenido.images[activeImage].src"
      :alt="contenido.images[activeImage].alt"
      class="carousel-image"
    >

    <iframe
      v-else
      :src="contenido.images[activeImage].src"
      :title="contenido.images[activeImage].alt"
      class="carousel-video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

    <button
      type="button"
      class="carousel-button carousel-button--next"
      aria-label="Imagen siguiente"
      @click="nextImage"
    >
      &#10095;
    </button>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: fit-content;
  max-width: 100%;
  overflow: hidden;
  margin: 1.5% auto;
  border-radius: 0%;
  background: rgba(0, 0, 0, 0);
}

.carousel--video {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.carousel-image {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}

.carousel-video {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.carousel-button {
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0);
  color: #ffffff;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  transform: translateY(-50%);
}

.carousel-button:hover {
  background: rgba(30, 115, 170, 0.9);
}

.carousel-button:focus-visible,
.carousel-indicator:focus-visible {
  outline: 2px solid #9ed8ff;
  outline-offset: 3px;
}

.carousel-button--previous {
  left: -1%;
}

.carousel-button--next {
  right: -1%;
}

.carousel-indicators {
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  display: flex;
  gap: 0.5rem;
  transform: translateX(-50%);
}

.carousel-indicator {
  width: 0.7rem;
  height: 0.7rem;
  padding: 0;
  border: 1px solid #ffffff;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}

.carousel-indicator--active {
  background: #9ed8ff;
}

</style>
