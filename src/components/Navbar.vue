<script setup lang="ts">
import { ref } from 'vue'
import home from '@/assets/images/home.png'
import calendar from '@/assets/images/calendar.png'
import play from '@/assets/images/play.png'
import shop from '@/assets/images/Eshop logo.gif'
import planes from '@/assets/images/planes.png'
import help from '@/assets/images/help.png'
import sesion from '@/assets/images/profile.png'

const showMenu1 = ref(false)
const showMenu2 = ref(false)

const emit = defineEmits<{
    toggleHelp: []
}>()
</script>

<template>
    <nav class="navbar">
        <div class="nav-section nav-left">
            <RouterLink class="nav-icon icon-home" to="/inicio" aria-label="Inicio">
                <img :src="home" alt="Inicio" />
            </RouterLink>
        </div>

        <div class="nav-section nav-center">
            <RouterLink class="nav-icon icon-calendar" to="/noticias" aria-label="Noticias">
                <img :src="calendar" alt="Noticias" />
            </RouterLink>

            <div class="dropdown"
            @mouseenter="showMenu1=true"
            @mouseleave="showMenu1=false">
                <RouterLink class="nav-icon icon-play" to="/jugar" aria-label="Jugar">
                    <img :src="play" alt="Jugar" />
                </RouterLink>
                <div v-if="showMenu1" class="dropdown-content">
                    <RouterLink to="/constants">Reciente</RouterLink>
                    <RouterLink to="/objectLiterals">Nuevo</RouterLink>
                    <RouterLink to="/headerComponent">Al azar</RouterLink>
                </div>
            </div>

            <RouterLink class="nav-icon icon-shop" to="/tienda" aria-label="Tienda">
                <img :src="shop" alt="Tienda" />
            </RouterLink>
        </div>

        <div class="nav-section nav-right">
            <div class="dropdown"
            @mouseenter="showMenu2=true"
            @mouseleave="showMenu2=false">
                <div class="nav-icon" aria-label="Planes">
                    <img :src="planes" alt="Planes" />
                </div>
                <div v-if="showMenu2" class="dropdown-content">
                    <RouterLink to="/planes/perla">Plan Perla</RouterLink>
                    <RouterLink to="/planes/diamante">Plan Diamante</RouterLink>
                    <RouterLink to="/planes/platino">Plan Platino</RouterLink>
                </div>
            </div>

            <button class="nav-icon icon-help" type="button" aria-label="Abrir ayuda" @click="emit('toggleHelp')">
                <img :src="help" alt="Ayuda" />
            </button>
            <RouterLink class="nav-icon icon-profile" to="/sesion" aria-label="Iniciar sesión">
                <img :src="sesion" alt="Iniciar sesión" />
            </RouterLink>
        </div>
    </nav>
</template>

<style scoped>
.navbar a,
.navbar button {
    flex-shrink: 0;
}

.navbar {
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem 1.25rem;
    width: 100%;
    padding: 0.75rem clamp(1rem, 4vw, 2rem);
    box-sizing: border-box;
    background-color: rgba(15, 15, 25, 0.45);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.nav-section {
    display: flex;
    align-items: center;
    gap: 1.25rem;
}

.nav-center {
    justify-content: center;
}

.nav-right {
    justify-content: flex-end;
}

.nav-icon img {
    display: block;
    width: 48px;
    height: 48px;
    object-fit: contain;
}

.nav-icon {
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
}

.icon-home img {
    transform: scale(130%);
}

.icon-calendar img {
    transform: scale(220%);
    padding-top: 4.2%;
}

.icon-play img {
    transform: scale(200%);
}

.icon-shop img {
    transform: scale(235%);
    padding-left: 5%;
}

.icon-help img {
    transform: scale(200%);
    padding-top: 3%;
}

.icon-profile img {
    transform: scale(265%);
    padding-bottom: 1%;
    padding-left: 10%;
}

.icon-calendar:hover img {
    transform: scale(200%);
}

.icon-play:hover img,
.icon-shop:hover img,
.icon-help:hover img {
    transform: scale(180%);
}

.icon-profile:hover img {
    transform: scale(240%);
}
.icon-home:hover img {
    transform: scale(120%);
}

.nav-icon img {
    transition: transform 0.2s ease;
}

.log {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
}

.nav-links a,
a,
.menu-title {
    color: white;
    text-decoration: none;
    cursor: pointer;
}

.navbar a {
    white-space: nowrap;
}

.dropdown {
    position: relative;
}

.nav-right > .dropdown {
    padding-bottom: 0;
}

.dropdown-content {
    position: absolute;
    top: 100%;
    z-index: 100;
    min-width: 10rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0.4rem;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 0.75rem;
    background: rgba(26, 27, 38, 0.96);
    box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(10px);
}

.nav-right > .dropdown .dropdown-content {
    right: 0;
    left: auto;
}

.dropdown-content a {
    padding: 0.65rem 0.85rem;
    border-radius: 0.45rem;
    font-size: 0.9rem;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.dropdown-content a:hover {
    background: rgba(110, 198, 204, 0.25);
    transform: translateX(0.15rem);
}

@media (max-width: 768px) {
    .navbar {
        position: relative;
        gap: 0.35rem;
        padding: 0.5rem;
    }

    .nav-section {
        gap: 0.45rem;
    }

    .nav-icon img {
        width: clamp(28px, 9vw, 40px);
        height: clamp(28px, 9vw, 40px);
    }

    .icon-calendar img,
    .icon-play img,
    .icon-shop img,
    .icon-help img,
    .icon-profile img {
        transform: scale(1.25);
    }
}
</style>
