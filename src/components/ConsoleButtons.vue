<script lang="ts" setup>
import sidebar from '@/assets/images/sidebar.png'
import shop from '@/assets/images/Eshop logo.gif'
import n64 from '@/assets/images/n64.jpg'
import gameCube from '@/assets/images/gamecube.jpg'
import gameBoyAdvance from '@/assets/images/gba.jpg'
import ds from '@/assets/images/ds.jpg'
import wii from '@/assets/images/wii.gif'
import threeDs from '@/assets/images/3ds.jpg'
import playStation from '@/assets/images/ps1.gif'
import type { consola } from '@/interfaces/games.interface'

export interface consoleButton {
    section: consola
    image: string
    alt: string
}

const consoleButtons: consoleButton[] = [
    { section: 'Nintendo 64', image: n64, alt: 'Nintendo 64' },
    { section: 'Nintendo GameCube', image: gameCube, alt: 'Nintendo GameCube' },
    { section: 'Game Boy Advance', image: gameBoyAdvance, alt: 'Game Boy Advance' },
    { section: 'Nintendo DS', image: ds, alt: 'Nintendo DS' },
    { section: 'Nintendo Wii', image: wii, alt: 'Nintendo Wii' },
    { section: 'Nintendo 3DS', image: threeDs, alt: 'Nintendo 3DS' },
    { section: 'PlayStation 1', image: playStation, alt: 'PlayStation 1' },
]

const activeSection = defineModel<consola | 'Ver todos los juegos'>({
    required: true,
})

const emit = defineEmits<{
    selectSection: [section: consola | 'Ver todos los juegos']
}>()

const selectSection = (section: consola | 'Ver todos los juegos') => {
    activeSection.value = section
    emit('selectSection', section)
}
</script>

<template>
    <header>
        <nav>
            <aside class="console-sidebar" aria-label="Consolas disponibles">
                <img class="sidebar-background" :src="sidebar" alt="" aria-hidden="true" />
                <div class="section-buttons">
                    <button
                        class="shop-button"
                        type="button"
                        :aria-label="'Ver todos los juegos'"
                        :aria-pressed="activeSection === 'Ver todos los juegos'"
                        @click="selectSection('Ver todos los juegos')"
                    >
                        <img :src="shop" alt="Ver todos los juegos" />
                    </button>
                    <button
                        v-for="consoleButton in consoleButtons"
                        :key="consoleButton.section"
                        class="console-button"
                        type="button"
                        :aria-label="consoleButton.alt"
                        :aria-pressed="activeSection === consoleButton.section"
                        @click="selectSection(consoleButton.section)"
                    >
                        <img :src="consoleButton.image" :alt="consoleButton.alt" />
                    </button>
                </div>
            </aside>
        </nav>
    </header>
</template>


<style scoped>
header,
nav,
.console-sidebar {
    height: 100%;
}

header,
nav {
    display: block;
}

.console-sidebar {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1%;
}

.section-buttons {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.70rem;
}

.sidebar-background {
    position: absolute;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    pointer-events: none;
}

.section-buttons > button {
    position: relative;
    z-index: 1;
}

.shop-button {
    place-items: center;
    width: 100%;
    height: clamp(0px, 8vh, 68px);
    border: 0;
    cursor: pointer;
}

.shop-button img {
    position: relative;
    left: -3%;
    top: -8%;   /* Arriba */
    width: 60%;
    object-fit: contain;
}

.shop-button:hover img {
    transform: scale(1.08);
}

.console-button {
    flex: 0 0 clamp(48px, 8vh, 68px);
    display: grid;
    place-items: center;
    width: 100%;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    top: 10%;  
}

.console-button img {
    width: 60%;
    position: relative;
    left: -3%;
}

.console-button:hover img {
    transform: scale(1.04);
}
</style>