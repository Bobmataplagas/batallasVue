<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { games } from '@/interfaces/games.interface.ts'

const props = defineProps<{ id: string }>()
const game = computed(() =>
    games.find((game) => game.id === props.id)
)
</script>

<template>
    <main v-if="game" class="jugar-detalle-view">
        <RouterLink to="/jugar" class="back-link"> x </RouterLink>
        <div class="video-container">
            <iframe
                v-if="game.video"
                :src="game.video"
                :title="`Video de ${game.name}`"
                class="detail-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>
    </main>

    <main v-else class="game-not-found">
        <h1 >Juego no encontrado</h1>
        <RouterLink to="/jugar">
            ← Regresar a la biblioteca
        </RouterLink>
    </main>
</template>

<style scoped>

.game-not-found{
    font-size: 150%;
    color:white
}

.game-not-found h1{
    font-size: 200%;
    color:white
}

.jugar-detalle-view {
    flex: 1;
    min-height: 0;
}

:global(#app:has(.jugar-detalle-view)) {
    height: 100svh;
    overflow-y: hidden;
    overflow-x: hidden;
    background-image: url('../assets/images/gameplay.jpg');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
}

.video-container {
    aspect-ratio: 16 / 9;
}

.detail-video {
    display: block;
    width: 70%;
    height: 70%;
    margin: auto;
    margin-top: 0.5%;
    margin-bottom: 70%;
    z-index: 4;
}

.back-link {
    position: absolute;
    margin-top: 2%;
    margin-left: -43%;
    color: #ffff;
    font-size: 4.0rem;
    font-weight: bold;
}

@media (max-width: 700px) {
    .video-container {
        width: 100%;
    }
}
</style>