<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { games } from '@/interfaces/games.interface.ts'

const props = defineProps<{ id: string }>()
const game = computed(() => games.find((game) => game.id === props.id))
</script>

<template>
    <main v-if="game" class="game-detail tienda-detalle-view">
        <RouterLink to="/tienda" class="back-link">← Volver a la tienda</RouterLink>
        <section class="detail-layout">
            <div class="detail-info">
                <h1>{{ game.name }}</h1>
                <span class="detail-console">{{ game.console }}</span>
                <p class="detail-genre">Género: {{ game.genre }}</p>
                <p class="detail-description">{{ game.description }}</p>
            </div>
            <div class="media-column">
                <img :src="game.image" :alt="`Portada de ${game.name}`" class="detail-image" />
                <iframe
                    v-if=game.video
                    :src=game.video
                    title="Video del juego"
                    class="detail-image detail-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
        </section>
    </main>
</template>

<style scoped>
.game-detail {
    min-height: calc(100svh - 74px);
    height: auto;
    padding: 2rem clamp(1rem, 5vw, 5rem);
    text-align: left;
    overflow: visible;
}

.back-link {
    display: inline-block;
    margin-bottom: 1.5rem;
    color: #045bfc;
    font-size: 200%;
}

.detail-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: clamp(2rem, 6vw, 5rem);
    align-items: start;
}

.detail-info {
    z-index: 3;
    padding: clamp(1.25rem, 3vw, 2.5rem);
    border: 1px solid rgb(255 255 255 / 28%);
    border-radius: 1.25rem;
    background: rgb(10 20 35 / 58%);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    box-shadow: 0 12px 36px rgb(0 0 0 / 24%);
    color: #fff;
}

.media-column {
    z-index: 3;
    display: grid;
    gap: 2rem;
    position: sticky;
    top: 74px;
    align-self: start;
}

.detail-image,
.game-video {
    width: 100%;
    height: 100%;
}

.detail-image {
    object-fit: contain;
}

.detail-video {
    width: 100%;
    height: 150%;
}

.detail-console {
    display: inline-block;
    margin-bottom: 0.5rem;
    color: #62c0ff;
    text-transform: uppercase;
    font-size: 170%;
    padding-top: 5%;
}

.detail-info h1 {
    margin: 0 0 1rem;
    font-size: clamp(2.5rem, 6vw, 5rem);
    color: #fff;
}

.detail-description {
    max-width: 100%;
    line-height: 1.5;
    font-size: 1.6rem;
}

.detail-genre {
    color: #d7edff;
    font-size: 200%;
}

@media (max-width: 700px) {
    .detail-image {
        width: 100%;
        height: 100%;
        justify-self: center;
    }
    .game-video {
        width: 100%;
        height: 100%;
        justify-self: center;
    }
}

.tienda-detalle-view {
    flex: 1;
    min-height: 0;
}

:global(#app:has(.tienda-detalle-view)) {
    height: 100svh;
    overflow-y: auto;
    overflow-x: hidden;
    background-image: url('../assets/images/rentarcomprar.png');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
