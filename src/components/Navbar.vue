<script setup lang="ts">
import { ref } from 'vue'
const showMenu1=ref(false)
const showMenu2=ref(false)
const showMenu3=ref(false)
const showMenu4=ref(false)
</script>

<template>
    <nav class="navbar">
        <RouterLink to="/inicio">
            <img src="https://media.tenor.com/AsbTS3ZgGAYAAAAj/kirby-headphones.gif" alt="home" />
        </RouterLink>
        <RouterLink to="/inicio">Inicio</RouterLink>

        <div class="dropdown"
        @mouseenter="showMenu1=true"
        @mouseleave="showMenu1=false">
            <RouterLink to="/jugar">Jugar</RouterLink>    
            <div v-if="showMenu1" class="dropdown-content">
                <RouterLink to="/constants">Reciente</RouterLink>
                <RouterLink to="/objectLiterals">Nuevo</RouterLink>
                <RouterLink to="/headerComponent">Al azar</RouterLink>
            </div>
        </div>

        <RouterLink to="/tienda">Tienda</RouterLink>
        <RouterLink to="/noticias">Noticias</RouterLink>
        <RouterLink to="/nosotros">Nosotros</RouterLink>
        <RouterLink to="/planes">Planes</RouterLink>
        <RouterLink to="/ayuda">Ayuda</RouterLink>
        <RouterLink to="/sesion">Iniciar Sesión</RouterLink>
    </nav>
</template>

<style scoped>
.navbar {
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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

.navbar > a:first-child img {
    display: block;
    width: 48px;
    height: 48px;
    object-fit: contain;
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

.dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 150px;
    background: rgb(245, 88, 174);
    color: black;
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
}

.dropdown-content a:hover {
    background: #ec84af;
}
</style>
