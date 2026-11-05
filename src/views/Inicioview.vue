<script setup lang="ts">
import fechas from '@/assets/images/fechas.png'
import seguir from '@/assets/images/continue.png'
import { RouterLink } from 'vue-router'
import tomodachi from '@/assets/images/tomodachi.gif'
</script>

<template>
    <main class="inicio-view">
        <div class="text-left inicio-copy">
            <h1 class="color3">RetroPiñatas </h1>
        </div>
        <RouterLink class="continue-button" to="/jugar" aria-label="Seguir jugando">
            <img :src="seguir" alt="">
            <span>SEGUIR JUGANDO</span>
        </RouterLink>
        <RouterLink class="nosotros-button" to="/nosotros" aria-label="us">
            <img :src="tomodachi" alt="us">
            <span>NOSOTROS</span>
        </RouterLink>
        <img class="fechas-image" :src="fechas" alt="Fechas calendario">
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

.nosotros-button {
    width: 30%;
    display: block;
    text-decoration: none;
}

.nosotros-button img {
    position: absolute;
    bottom: 28.5%;
    left: 45%;
    display: block;
    width: 8%;
}

.nosotros-button span {
    position: absolute;
    top: 64%;
    left: 25%;
    width: 57%;
    transform: translate(-27%, -65%);
    color: #ff9100;
    font-size: clamp(2.8rem,0vw, 0.2rem);
    line-height: 1;
    text-align: center;
    white-space: nowrap;
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
