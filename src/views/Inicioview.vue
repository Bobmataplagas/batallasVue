<script setup lang="ts">
import { ref } from 'vue'
import arcade from '@/assets/images/arcade.png'
import arcadeVideo from '@/assets/images/videoarcade.mp4'
import { useArcadeVideo } from '@/composables/useArcadeVideo'

const video = ref<HTMLVideoElement | null>(null)
const { toggleSound, onVideoMetadata, playbackError, soundEnabled } = useArcadeVideo(video)
</script>

<template>
    <main class="inicio-view">
        <div class="arcade-machine">
            <video
                ref="video"
                class="arcade-video"
                :src="arcadeVideo"
                autoplay
                muted
                loop
                playsinline
                @loadedmetadata="onVideoMetadata"
            ></video>
            <img class="arcade-image" :src="arcade" alt="Máquina arcade" />
            <button
                class="sound-toggle"
                type="button"
                :aria-label="soundEnabled ? 'Silenciar video' : 'Activar sonido'"
                :aria-pressed="soundEnabled"
                @click="toggleSound"
            >
                {{ soundEnabled ? '🔊' : '🔇' }}
            </button>
            <p v-if="playbackError" class="playback-error" role="status">
                {{ playbackError }}
            </p>
        </div>
    </main>
</template>

<style scoped>
.inicio-view {
    flex: 1;
    min-height: 0;
    display: grid;
    place-items: center;
    overflow: hidden;
}

.arcade-machine {
    position: relative;
    width: min(75%, 1100px);
    aspect-ratio: 16 / 9;
}

.arcade-image {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none;
}

.arcade-video {
    position: absolute;
    z-index: 1;
    top: 5.7%;
    left: 29%;
    width: 42.5%;
    height: 68.5%;
    object-fit: cover;
}

.sound-toggle {
    position:fixed;
    right: 6%;
    bottom: 4%;
    z-index: 4;
    padding: 0.45rem 0.7rem;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 0.4rem;
    background: rgba(15, 15, 25, 0.85);
    color: #fff;
    cursor: pointer;
}

.sound-toggle:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
}

.playback-error {
    position: absolute;
    top: 77%;
    left: 50%;
    z-index: 3;
    width: max-content;
    max-width: 90%;
    padding: 0.4rem 0.6rem;
    transform: translateX(-50%);
    border-radius: 0.3rem;
    background: rgba(15, 15, 25, 0.9);
    color: #fff;
    font-size: 0.8rem;
}

@media (max-width: 768px) {
    .arcade-machine {
        width: 96%;
    }

    .sound-toggle {
        right: 4%;
        bottom: 2%;
        padding: 0.3rem 0.45rem;
        font-size: 0.75rem;
    }
}

:global(#app:has(.inicio-view)) {
    height: 100svh;
    overflow: hidden;
    background-image: url('../assets/images/wallpaper.png');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
