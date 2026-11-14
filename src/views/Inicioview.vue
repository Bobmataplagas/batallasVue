<script setup lang="ts">
import seguir from '@/assets/images/continue.png'
import { RouterLink } from 'vue-router'
</script>

<template>
    <main class="inicio-view">
        <div class="text-left inicio-copy">
            <h1 class="color3">RetroPiñatas </h1>
        </div>

        
    </main>
</template>

<style scoped>
.inicio-view {
    flex: 1;
    min-height: 0;
}

.inicio-copy {
    padding-left: 25%;
}

.inicio-copy h1 {
    margin: 24px 0 12px;
    line-height: 1.5;
    letter-spacing: 0;
}

.inicio-copy p {
    max-width: 58%;
    line-height: 1;
}

.fechas-image {
    position: absolute;
    top: 58%;
    left: 65%;
    width: 30%;
    transform: translate(-50%, -50%);
}

.continue-button {
    position: absolute;
    top: 31.5%;
    left: 23%;
    width: 35%;
    display: block;
    text-decoration: none;
}

.continue-button img {
    display: block;
    width: 100%;
    height: auto;
}

.continue-button span {
    position: absolute;
    top: 50%;
    left: 43%;
    width: 57%;
    transform: translate(-27%, -65%);
    color: #151515;
    font-size: clamp(2.8rem,0vw, 0.2rem);
    line-height: 1;
    text-align: center;
    white-space: nowrap;
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
