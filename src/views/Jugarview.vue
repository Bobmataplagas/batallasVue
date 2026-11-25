<script setup lang="ts">
import ConsoleButtons from '@/components/ConsoleButtons.vue'
import { useLibrary } from '@/composables/useLibrary';
import shelf from '@/assets/images/shelf.png'
import tv from '@/assets/images/TV.png'
import effectCRT from '@/assets/images/effectCRT.png'

const {
    activeSection,
    juegosFiltrados,
    seleccionarJuego,
    juegosAdquiridos,
    errorBiblioteca,
    juegosEnEstantes,
    juegoEnTele
} = useLibrary()
</script>

<template>
    <main class="jugar-view">
        <ConsoleButtons v-model="activeSection" @selectSection="activeSection = $event" />
        <section class="juegos-content" aria-label="Biblioteca de juegos">
            <header class="library-heading">
                <div>
                    <span class="library-kicker">Retro🪅Biblioteca</span>
                    <h1>{{ activeSection === 'Ver todos los juegos' ? 'Todos los juegos' : activeSection }}</h1>
                </div>
            </header>

            <p v-if="errorBiblioteca" class="library-error" role="alert">{{ errorBiblioteca }}</p>
            
            <div v-if="juegosFiltrados.length" class="library-display">
                <section class="tv-console" aria-label="Juego seleccionado">
                    <div class="tv-stage">
                        <img class="tv-frame" :src="tv" alt="" aria-hidden="true" />
                        <div v-if="juegoEnTele" class="tv-screen">
                            <img
                                class="tv-game-cover"
                                :src="juegoEnTele.image"
                                :alt="`Portada de ${juegoEnTele.name}`"
                            />
                        </div>
                        <img class="tv-crt-effect" :src="effectCRT" alt="" aria-hidden="true" />
                    </div>
                    <div v-if="juegoEnTele" class="tv-caption">
                        <div>
                            <span class="tv-caption-label">En pantalla</span>
                            <strong>{{ juegoEnTele.name }}</strong>
                        </div>
                        <RouterLink class="tv-open-game" :to="`/jugar/${juegoEnTele.id}`">
                            Jugar
                        </RouterLink>
                    </div>
                </section>

                <section class="library-shelf" aria-label="Selecciona un juego">
                    <div class="shelf-heading">
                        <h2>Mi colección</h2>
                        <span>{{ juegosFiltrados.length }} juegos</span>
                    </div>
                    <div class="shelves-container">
                        <div v-for="(estante, index) in juegosEnEstantes" :key="index" class="shelf-row">
                            <img class="shelf-display" :src="shelf" alt="" aria-hidden="true" />
                            <div class="games-shelf">
                                <button
                                    v-for="game in estante"
                                    :key="game.id"
                                    type="button"
                                    class="game-cover-button"
                                    :class="{ 'is-selected': juegoEnTele?.id === game.id }"
                                    :title="game.name"
                                    :aria-label="`Mostrar ${game.name} en la televisión`"
                                    :aria-pressed="juegoEnTele?.id === game.id"
                                    @click="seleccionarJuego(game.id)"
                                >
                                    <img :src="game.image" :alt="`Portada de ${game.name}`" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
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
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    padding: clamp(0.5rem, 1vh, 0.85rem) clamp(1rem, 3vw, 3rem);
    overflow: hidden;
}

.library-heading {
    flex: 0 0 auto;
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
    padding-bottom: 0.4rem;
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
    display: grid;
    flex: 1;
    grid-auto-rows: clamp(175px, 29vh, 220px);
    align-content: safe center;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0.25rem 0.25rem 0.5rem;
}

.library-display {
    display: grid;
    flex: 1;
    grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.9fr);
    gap: clamp(1rem, 2vw, 2rem);
    min-height: 0;
}

.tv-console {
    display: flex;
    min-width: 0;
    flex-direction: column;
    justify-content: center;
}

.tv-stage {
    position: relative;
    isolation: isolate;
    width: min(100%, 68vh, calc(100svh - 225px));
    aspect-ratio: 1;
    margin: 0 auto;
}

.tv-screen {
    position: absolute;
    z-index: 2;
    top: 21.6%;
    left: 19%;
    width: 64%;
    height: 46%;
    overflow: hidden;
    border-radius: 6%;
    background: #07080b;
}

.tv-game-cover {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}

.tv-crt-effect {
    position: absolute;
    z-index: 3;
    inset: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
    opacity: 0.55;
    pointer-events: none;
}

.tv-frame {
    position: absolute;
    z-index: 1;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none;
}

.tv-caption {
    display: flex;
    width: min(100%, 68vh, calc(100svh - 225px));
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin: 0.25rem auto 0;
}

.tv-caption > div {
    display: grid;
    min-width: 0;
    text-align: left;
}

.tv-caption-label {
    color: #b94a00;
    font-size: 110%;
    text-transform: uppercase;
}

.tv-caption strong {
    overflow: hidden;
    color: #182b36;
    font-size: 200%;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.tv-open-game {
    flex: 0 0 auto;
    padding: 0.5rem 0.8rem;
    border: 1px solid #ffffff;
    border-radius: 6px;
    background: #ffc983;
    font-size: 1.50rem;
    text-decoration: none;
    transition: background-color 160ms ease, transform 160ms ease;
}

.tv-open-game:hover {
    transform: translateY(-2px);
    background: #ffaf54;
}

.library-shelf {
    display: flex;
    min-width: 0;
    min-height: 0;
    flex-direction: column;
}

.shelf-heading {
    display: flex;
    flex: 0 0 auto;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem;
    margin: 0 0 0.35rem;
    color: #263943;
}

.shelf-heading h2 {
    margin: 0;
    font-size: clamp(1rem, 1.6vw, 1.35rem);
}

.shelf-heading span {
    color: #536c78;
    font-size: 0.8rem;
    white-space: nowrap;
}

.shelf-row {
    position: relative;
    width: 100%;
    height: 100%;
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
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: end;
    gap: clamp(0.25rem, 0.8vw, 0.65rem);
    padding: 2.5rem clamp(1.15rem, 2.4vw, 2rem) 1.1rem;
    box-sizing: border-box;
}

.game-cover-button {
    position: relative;
    width: 100%;
    max-width: 100px;
    max-height: clamp(100px, 18vh, 140px);
    aspect-ratio: 136 / 190;
    justify-self: center;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    cursor: pointer;
    filter: drop-shadow(10px 12px 8px rgba(0, 0, 0, 0.35));
    transition: transform 180ms ease, filter 180ms ease;
    display: block;
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
    filter: drop-shadow(10px 15px 9px rgba(0, 0, 0, 0.5));
}

.game-cover-button.is-selected {
    transform: translateY(-5px);
}

.game-cover-button:focus-visible {
    outline: 2px solid #31a8d1;
    outline-offset: 3px;
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

@media (max-width: 860px) {
    .juegos-content {
        overflow-y: auto;
    }

    .library-display {
        flex: 0 0 auto;
        grid-template-columns: minmax(0, 1fr);
    }

    .tv-stage,
    .tv-caption {
        width: min(100%, 52vh, 440px, calc(100svh - 225px));
    }

    .library-shelf {
        min-height: 260px;
    }

    .shelves-container {
        max-height: 46vh;
    }
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
