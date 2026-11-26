<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSesion } from '@/composables/useSesion'
import tomodachi from '@/assets/images/tomodachi.gif'

const {
    nombre,
    telefono,
    edad,
    correo,
    contraseña,
    esRegistro,
    enviado,
    noenviado,
    confirmarInscripcion,
    cambiarModo
} = useSesion()

</script>

<template>
    <main class="text-left enrollment-page sesion-view">
        <RouterLink :to="`/inicio`" class="back-link">← Volver al inicio</RouterLink>
        <section class="session-card">
            <div class="text-center">
                <h1 class="color3">{{ esRegistro ? 'Registrarse' : 'Iniciar Sesión' }}</h1>
                <button v-if="!enviado" class="mode-toggle" type="button" @click="cambiarModo">
                    <h3 class="color4">{{ esRegistro ? '¿Ya tienes cuenta? Inicia sesión' : 'Regístrate aquí para unirte' }}</h3>
                </button>
            </div>
            <form v-if="!enviado" class="enrollment-form" @submit.prevent="confirmarInscripcion">
                <input v-if="esRegistro" v-model="nombre" placeholder="Nombre" aria-label="Nombre">
                <input v-if="esRegistro" v-model="telefono" placeholder="Teléfono" aria-label="Teléfono">
                <input v-if="esRegistro" v-model="edad" placeholder="Edad" aria-label="Edad">
                <input v-model="correo" type="email" placeholder="Correo electrónico" aria-label="Correo electrónico">
                <input v-model="contraseña" type="password" placeholder="Contraseña" aria-label="Contraseña">
                <div class="submit-action">
                    <button class="submit-button" type="submit">{{ esRegistro ? 'Registrarse' : 'Iniciar sesión' }}</button>
                    <img :src="tomodachi" alt="" aria-hidden="true">
                </div>
            </form>
            <p v-if="noenviado" class="color3"><strong>Por favor, complete todos los campos</strong></p>
            <p v-if="enviado" class="color3"><strong>¡Disfrute jugar en nuestra plataforma!</strong></p>
        </section>
    </main>
</template>

<style scoped>
.enrollment-page {
    z-index: 3;
    width: 100%;
    max-width: 46rem;
    margin: 0 auto;
    padding-bottom: clamp(0.5rem, 1.5vh, 1rem);
}

.back-link {
    display: inline-block;
    font-size: 200%;
    color:rgb(0, 10, 153);;
    padding-top: clamp(0.4rem, 1vh, 0.75rem);
}

.enrollment-page > .text-center {
    margin-top: -2rem;
}

.session-card {
    width: min(80%, 36rem);
    margin: 0.75rem auto 0;
    padding: clamp(0rem, 0.5vw, 0.75rem);
    padding-top: clamp(0.0rem, 0.0vw, 0.0rem);
    box-sizing: border-box;
    border: 1px solid rgba(8, 8, 8, 0.2);
    border-radius: 12px;
    background: rgba(201, 201, 201, 0.349);
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
}

.session-card > .text-center {
    margin-top: 0;
}

.session-card .text-center h1 {
    margin-top: 0;
}

.mode-toggle {
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
}

.mode-toggle h3 {
    margin: 0;
}

.enrollment-form {
    width: 90%;
    margin: 0 auto;
}

.session-card > p {
    margin: 0.5rem 0 0;
    text-align: center;
}

.notice {
    margin-bottom: 1.5rem;
}

.enrollment-form input {
    display: block;
    width: 100%;
    min-height: 2.4rem;
    margin: 0.2rem 0 0.55rem;
    padding: 0.45rem 0.6rem;
    border: 3px solid #0f0707;
    background-color: rgba(255, 228, 196, 0.555);
    border-radius: 0.4rem;
    font: inherit;
}

.submit-button {
    margin-top: 0.25rem;
    padding: 0.55rem 0.9rem;
    border: 0;
    border-radius: 0.5rem;
    background: #ff7e42;
    color: white;
    cursor: pointer;
    font: inherit;
    font-weight: 700;
}

.submit-action {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
}

.submit-action img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: contain;
}

.submit-button:hover {
    background: #aa5217
}

.sesion-view {
    flex: 1;
    min-height: 0;
}

:global(#app:has(.sesion-view)) {
    height: 100svh;
    overflow: hidden;
    background-image: url('../assets/images/sesion.gif');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
}

</style>
