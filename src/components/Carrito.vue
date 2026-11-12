<script setup lang="ts">
const emit=defineEmits<{
    (x: 'comprar'): void
    (x: 'quitar'): void
}>()

defineProps<{
    cantidad: number
}>()
</script>

<template>
<article class="comida-card">
        <div class="comida-actions">
            <button type="button" :disabled="cantidad === 0" @click="emit('quitar')">−</button>
            <span aria-live="polite">{{ cantidad }}</span>
            <button type="button" @click="emit('comprar')">+</button>
        </div>
    </article>
</template>

<style scoped>
.car-card {
    display: grid;
    grid-template-columns: 96px 1fr auto;
    align-items: center;
    gap: 1rem;
}

@media (max-width: 560px) {
    .car-card {
        grid-template-columns: 72px 1fr;
    }

    .car-actions {
        grid-column: 2;
    }
}
</style>
