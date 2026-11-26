<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { game } from '@/interfaces/games.interface.ts'
import type { productoCarrito } from '@/composables/useCarrito.ts'

defineProps<{
    game: game
    inCart: boolean
    cartType?: productoCarrito['tipo']
    detailsLabel: string
    rentLabel: string
}>()

const emit = defineEmits<{
    details: [gameId: string]
    addToCart: [tipo: productoCarrito['tipo']]
    remove: [gameId: string]
}>()
</script>

<template>
    <article class="game-item game-card">
        <RouterLink :to="`/tienda/${game.id}`" class="game-case" :title="game.name">
            <img :src="game.image" :alt="`Portada de ${game.name}`" class="game-cover" />
        </RouterLink>
        <div class="game-info">
            <h3>{{ game.name }}</h3>
            <div class="game-meta">
                <p class="game-genre">{{ game.genre }}</p>
                <p class="game-price">${{ game.price }}</p>
            </div>
            <button type="button" :aria-label="`Comprar ${game.name}`" @click="emit('details', game.id)">
                {{ detailsLabel }}
            </button>
            <div class="cart-actions">
                <button type="button" :disabled="inCart" @click="emit('addToCart', 'compra')">
                    Comprar ${{ game.price }}
                </button>
                <button type="button" :disabled="inCart" @click="emit('addToCart', 'renta')">
                    {{ rentLabel }}
                </button>
            </div>
            <p v-if="inCart" class="cart-item-status">
                En carrito: {{ cartType === 'compra' ? 'Compra' : 'Renta' }}
                <button type="button" @click="emit('remove', game.id)">Quitar</button>
            </p>
        </div>
    </article>
</template>

<style scoped>
.game-card {
    display: grid;
    width: 110%;
    text-align: left;
    background: rgba(34, 99, 129, 0.692);
    border-radius: 8px;
    padding: 0.75rem;
    color: #050505;
    box-sizing: border-box;
}

.game-case {
    position: relative;
    width: 136px;
    height: 190px;
    margin: 0 auto 0.8rem;
    filter: drop-shadow(10px 12px 8px rgba(0, 0, 0, 0.35));
    transition: transform 180ms ease, filter 180ms ease;
}

.game-case:hover {
    transform: translateY(-10px) rotate(-1deg);
    filter: hue-rotate();
}

.game-cover {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top;
}

.game-info {
    color: #fff;
    position: relative;
}

.game-info h3 {
    height: 3.2em;
    margin: 0 0 0.2rem;
    overflow: hidden;
    font-size: 1.35rem;
    line-height: 1.2;
}

.game-info p {
    margin-bottom: 0.45rem;
    text-align: right;
    color: #ffffff;
    font-size: 1.45rem;
}

.game-meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 0.25rem;
}

.game-meta p {
    margin-bottom: 0.45rem;
}

.game-meta .game-price {
    text-align: right;
}

.game-meta .game-genre {
    text-align: left;
}

.game-info button {
    width: 100%;
    padding: 0.35rem 0.5rem;
    border: 2px solid #d7e7ff;
    border-radius: 6px;
    background: #ffffff;
    color: #000000;
    font-family: inherit;
    cursor: pointer;
}

.game-info > button:hover {
    transform: translate(1px, 1px);
    background: #308ec49f;
}

.cart-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.35rem;
    margin-top: 0.5rem;
}

.game-info .cart-actions button {
    padding: 0.35rem 0.2rem;
    font-size: 0.85rem;
}

.game-info .cart-actions button:first-child {
    background-color: #d6d6d6;
    border-color: #bdbdbd;
}

.game-info .cart-actions button:last-child {
    background-color: #a5a5a5;
    border-color: #888888;
}

.game-info .cart-actions button:first-child:hover {
    background-color: #bcbcbc;
}

.game-info .cart-actions button:last-child:hover {
    background-color: #858585;
}

.cart-item-status {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.35rem;
    min-height: 42px;
    margin-top: 5px;
    font-size: 0.9rem !important;
}

.game-info .cart-item-status button {
    width: auto;
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
}
</style>
