<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const nombre = ref('')
const telefono = ref('')
const correo = ref('')
const enviado = ref(false)
const noenviado = ref(false)

function confirmarInscripcion() {
    if (!nombre.value.trim() || !telefono.value.trim() || !correo.value.trim()) {
        noenviado.value = true
    } else {
    enviado.value = true
    }
}

</script>

<template>
    <main class="text-left enrollment-page sesion-view">
        <RouterLink :to="`/inicio`" class="back-link">← Atrás</RouterLink>
        <h1 class="color3">Iniciar Sesión o Regístrate</h1>

        <form v-if="enviado==false" class="enrollment-form">
            <p>Nombre completo</p>
            <input v-model="nombre">

            <p>Teléfono</p>
            <input v-model="telefono">

            <p>Correo electrónico</p>
            <input v-model="correo">

            <button class="submit-button" @click="confirmarInscripcion">Iniciar</button>
        </form>
        <p v-if="noenviado==true" class="color1"> <strong> Por favor, complete todos los campos</strong></p>
        <p v-if="enviado==true" class="color1"> <strong> ¡Disfrute su instancia en nuestra plataforma!</strong></p>
    </main>
</template>

<style scoped>
.enrollment-page {
    width: 100%;
    max-width: 46rem;
    margin: 0 auto;
    padding-bottom: clamp(2rem, 8vw, 5rem);
}

.back-link {
    display: inline-block;
    margin-bottom: 1rem;
    color: #d1651d;
}

.notice {
    margin-bottom: 1.5rem;
}

.enrollment-form input {
    display: block;
    width: 100%;
    min-height: 2.75rem;
    margin: 0.35rem 0 1rem;
    padding: 0.65rem 0.75rem;
    border: 3px solid #0f0707;
    background-color: rgba(255, 228, 196, 0.555);
    border-radius: 0.4rem;
    font: inherit;
}

.submit-button {
    margin-top: 0.75rem;
    padding: 0.85rem 1rem;
    border: 0;
    border-radius: 0.5rem;
    background: #ff7e42;
    color: white;
    cursor: pointer;
    font: inherit;
    font-weight: 700;
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
