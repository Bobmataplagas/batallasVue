<script setup lang="ts">
import { computed } from 'vue'
import ConsoleButtons from '@/components/ConsoleButtons.vue'
import { useLibrary } from '@/composables/useLibrary';
import shelf from '@/assets/images/shelf.png'

const {
    activeSection,
    juegosFiltrados,
    seleccionarJuego,
    juegosAdquiridos,
    errorBiblioteca,
    selectedGameId
} = useLibrary()

const juegosPorEstante = 5
const juegosEnEstantes = computed(() => {
    const estantes = []
    for (let i = 0; i < juegosFiltrados.value.length; i += juegosPorEstante) {
        estantes.push(
            juegosFiltrados.value.slice(i, i + juegosPorEstante)
        )
    }
    return estantes
})
</script>

<template>
    <main class="jugar-view">
        <ConsoleButtons v-model="activeSection" @selectSection="activeSection = $event" />
        <section class="juegos-content" aria-label="Biblioteca de juegos">
            <header class="library-heading">
                <div>
                    <span class="library-kicker">Retro🪅Biblioteca</span>
                    <h1>{{ activeSection === 'Ver todos los juegos' ? 'Mis juegos' : activeSection }}</h1>
                </div>
            </header>

            <p v-if="errorBiblioteca" class="library-error" role="alert">{{ errorBiblioteca }}</p>
            
            <div v-if="juegosFiltrados.length" class="shelves-container">
                <div v-for="(estante, index) in juegosEnEstantes" :key="index" class="shelf-row">
                    <img class="shelf-display" :src="shelf" alt="" aria-hidden="true" />
                    <div class="games-shelf">
                            <RouterLink
                                v-for="game in estante"
                                :key="game.id"
                                :to="`/jugar/${game.id}`"
                                class="game-cover-button"
                                :title="game.name"
                                :aria-label="`Ver ${game.name}`"
                                @click="seleccionarJuego(game.id)"
                                >
                                <img
                                    :src="game.image"
                                    :alt="`Portada de ${game.name}`"
                                />
                            </RouterLink>
                    </div>
                </div>
            </div>

            <div v-else class="empty-library">
                <strong> {{ juegosAdquiridos.length ? 'No tienes juegos adquiridos para esta consola.' : 'Tu biblioteca está vacía.' }}
                </strong>
                <p v-if="!juegosAdquiridos.length">
                    Renta o compra juegos en Retro🪅Shop para adquirirlos
                </p>
            </div>
        </section>
    </main>
</template>

<style scoped>
.jugar-view {
    flex: 1;
    min-height: 0;
    display: grid;
    grid-template-columns: clamp(190px, 16vw, 240px) 1fr;
    height: calc(100svh - 74px);
    overflow: hidden;
}

.juegos-content {
    min-width: 0;
    padding: 1.5rem clamp(1rem, 3vw, 3rem);
    overflow-y: auto;
    overflow-x: hidden;
}

.library-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.4rem;
    padding-bottom: 0.7rem;
    border-bottom: 2px solid rgba(8, 10, 16, 0.18);
}

.library-kicker {
    display: block;
    color: #000;
    font-size: 1rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}

.library-heading h1 {
    margin: 0;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
}

.shelves-container {
    width: 100%;
    padding: 0 0 3rem;
}

.shelf-row {
    position: relative;
    width: 100%;
    min-height: 310px;
    margin-bottom: 1rem;
    overflow: visible;
}

.shelf-display {
    position: absolute;
    width: 120%;
    height: 200%;
    left: -8.5%;
    top: -36%;
    max-width: none;
    object-fit: fill;
    z-index: 0;
    pointer-events: none;
}

.games-shelf {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    align-items: end;
    gap: clamp(0.5rem, 1.5vw, 1.5rem);
    padding: 3.5rem 4rem 1.5rem;
    box-sizing: border-box;
}

/* PORTADAS */
.game-cover-button {
    position: relative;
    width: 100%;
    max-height: 230px;
    aspect-ratio: 136 / 190;
    padding: 0;
    border: 3px solid transparent;
    border-radius: 8px;
    background: transparent;
    cursor: pointer;
    filter: drop-shadow( 10px 12px 8px rgba(0, 0, 0, 0.35) );
    transition: transform 180ms ease, filter 180ms ease, border-color 180ms ease;
    display: block;
    text-decoration: none;
}

.game-cover-button img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom;
}

.game-cover-button:hover {
    transform: translateY(-8px);
    filter: drop-shadow( 10px 15px 9px rgba(0, 0, 0, 0.5));
}

.empty-library {
    display: grid;
    place-content: center;
    min-height: 280px;
    padding: 1.5rem;
    border: 2px dashed rgba(255, 255, 255, 0.45);
    border-radius: 12px;
    color: #050505;
    text-align: center;
    background: rgba(20, 28, 53, 0.55);
}

.empty-library strong {
    font-size: 1.35rem;
}

.empty-library p {
    margin-bottom: 0;
}

.library-error {
    color: #8d1717;
    font-weight: 700;
}

.loading-panel {
    width: min(100%, 34rem);
    text-align: center;
    animation: panel-appear 0.45s ease-out both;
}

.loading-gem {
    display: grid;
    width: 5rem;
    height: 5rem;
    place-items: center;
    margin: 0 auto 1.5rem;
    border: 1px solid rgba(187, 211, 255, 0.55);
    border-radius: 1.5rem;
    color: #c6d9ff;
    background: rgba(165, 190, 255, 0.12);
    box-shadow: 0 0 2.5rem rgba(127, 149, 255, 0.28);
    font-size: 2.5rem;
    animation: gem-float 1.4s ease-in-out infinite alternate;
}

.loading-kicker {
    color: #a9d8ff;
    font-size: 0.95rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.loading-panel h1 {
    margin: 0.5rem 0 0.75rem;
    color: #fff;
    font-size: clamp(2rem, 7vw, 3.25rem);
}

.loading-panel > p:not(.loading-kicker, .loading-note) {
    color: rgba(255, 255, 255, 0.78);
}

.loading-progress {
    width: min(100%, 20rem);
    height: 0.65rem;
    overflow: hidden;
    margin: 2rem auto 0.85rem;
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
}

.loading-progress span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #70d7d1, #a9d8ff, #d6b7ff);
    transform: scaleX(0);
    transform-origin: left;
    animation: loading-fill 1.8s linear forwards;
}

.loading-note {
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.9rem;
}

@keyframes loading-fill {
    to { transform: scaleX(1); }
}

@keyframes gem-float {
    to { transform: translateY(-0.45rem) rotate(8deg); }
}

@keyframes panel-appear {
    from { opacity: 0; transform: translateY(0.75rem); }
    to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
    .loading-panel,
    .loading-gem,
    .loading-progress span {
        animation-duration: 0.01ms;
        animation-iteration-count: 1;
    }
}


:global(#app:has(.jugar-view)) {
    height: 100svh;
    overflow: hidden;
    background-image: url('../assets/images/tienda.png');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
