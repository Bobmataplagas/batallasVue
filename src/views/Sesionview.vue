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
    <main class="text-left enrollment-page">
        <RouterLink :to="`/inicio`" class="back-link">← Atrás</RouterLink>
        <h1 class="color3">Iniciar Sesión o Regístrate</h1>

        <form v-if="enviado==false" class="enrollment-form">
            <p>Nombre completo</p>
            <input v-model="nombre">

            <p>Teléfono</p>
            <input v-model="telefono">

            <p>Correo electrónico</p>
            <input v-model="correo">

            <button class="submit-button" @click="confirmarInscripcion">Confirmar inscripción</button>
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
    color: #4f67ee;
}

.price {
    margin: 1rem 0;
    color: #4f67ee;
    font-size: 1.25rem;
    font-weight: 700;
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
    border: 1px solid #aaa;
    border-radius: 0.4rem;
    font: inherit;
}


.submit-button {
    margin-top: 0.75rem;
    padding: 0.85rem 1rem;
    border: 0;
    border-radius: 0.5rem;
    background: #4f67ee;
    color: white;
    cursor: pointer;
    font: inherit;
    font-weight: 700;
}

.submit-button:focus-visible {
    outline: 0.1875rem solid #ec84af;
    outline-offset: 0.2rem;
}

.submit-button:hover {
    background: #3e55d6;
}

</style>
