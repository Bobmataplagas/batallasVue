<script setup lang="ts">
import carritoIcon from '@/assets/images/carrito.png'

defineProps<{
    totalCompras: number
    totalRentas: number
    precioTotal: number
    carritoVacio: boolean
}>()

const emit = defineEmits<{
    pay: []
}>()
</script>

<template>
    <aside class="cart-summary" aria-label="Resumen del carrito">
        <p>Compras <strong>{{ totalCompras }} orden(es)</strong></p>
        <p>Rentas <strong>{{ totalRentas }} orden(es)</strong></p>
        <p class="cart-total">
            <img :src="carritoIcon" alt="Carrito" />
            <strong>${{ precioTotal }} MXN</strong>
            <button type="button" :disabled="carritoVacio" @click="emit('pay')">Pagar</button>
        </p>
    </aside>
</template>

<style scoped>
.cart-summary {
    position: fixed;
    top: calc(74px + 1rem);
    right: clamp(1rem, 3vw, 3rem);
    z-index: 1;
    width: min(270px, calc(100vw - 2rem));
    box-sizing: border-box;
    padding: 0.65rem 0.8rem;
    border-radius: 10px;
    background: rgba(65, 64, 64, 0.644);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    color: #fff;
}

.cart-summary p {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    margin: 0.25rem 0;
}

.cart-summary strong {
    color: #6be9ff;
    text-align: right;
}

.cart-summary hr {
    margin: 0.55rem 0;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.cart-summary .cart-total {
    align-items: center;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid rgb(255, 253, 253);
}

.cart-total img {
    width: 25%;
    height: 25%;
    object-fit: contain;
}

.cart-total button {
    padding: 0.35rem 0.65rem;
    border: 1px solid #ffffff;
    border-radius: 6px;
    background: #ffffff;
    color: #000000;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
}

.cart-total button:hover {
    background: #24f8ff;
}

.cart-total button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

@media (max-width: 700px) {
    .cart-summary {
        top: calc(74px + 0.75rem);
        right: 1rem;
    }
}
</style>
