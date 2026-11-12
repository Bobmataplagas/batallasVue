<script setup lang="ts">
import { useCarrito, type productoCarrito } from '@/composables/useCarrito.ts'
import ConsoleButtons from '@/components/ConsoleButtons.vue'
import type { game } from '@/interfaces/games.interface.ts'
import useStoreGames from '@/composables/storeGames.ts'

const {
    activeSection,
    filteredGames,
    featuredGames,
    catalogGames,
    openGameDetails,
} = useStoreGames()

const {
    carrito,
    precioTotal,
    totalCompras,
    totalRentas,
    totalOrdenes,
    agregarProducto,
    quitarProducto,
} = useCarrito()

const tieneProducto = (gameId: string) => carrito.value.some((producto) => producto.id === gameId)
const tipoEnCarrito = (gameId: string) =>
    carrito.value.find((producto) => producto.id === gameId)?.tipo
const agregarAlCarrito = (game: game, tipo: productoCarrito['tipo']) => agregarProducto(game, tipo)
</script>

<template>
    <main class="tienda-view">
        <ConsoleButtons v-model="activeSection" @selectSection="activeSection = $event" />
        <section class="tienda-content">
            <h1 class="store-name">Retro🪅Shop</h1>
            <div class="store-top-row">
                <aside class="cart-summary" aria-label="Resumen del carrito">
                    <p>Compras <strong>{{ totalCompras }} orden(es)</strong></p>
                    <p>Rentas <strong>{{ totalRentas }} orden(es)</strong></p>
                    <hr />
                    <p>Todas las órdenes <strong>{{ totalOrdenes }} orden(es)</strong></p>
                    <p class="cart-total">Total a pagar <strong>${{ precioTotal }} MXN</strong></p>
                </aside>
            </div>

            <template v-if="activeSection === 'Ver todos los juegos'">
                <div class="store-heading">
                    <div>
                        <span class="store-kicker">⭐ Destacados ⭐</span>
                        <h2>Juegos favoritos del público</h2>
                    </div>
                </div>
                <div class="games-shelf featured-shelf">
                    <article v-for="game in featuredGames" :key="game.id" class="game-item game-card">
                        <RouterLink :to="`/tienda/${game.id}`" class="game-case" :title="game.name">
                            <img :src="game.image" :alt="`Portada de ${game.name}`" class="game-cover" />
                        </RouterLink>
                    <div class="game-info">
                            <h3>{{ game.name }}</h3>
                            <div class="game-meta">
                                <p class="game-genre">{{ game.genre }}</p>
                                <p class="game-price">${{ game.price }}</p>
                            </div>
                            <button type="button" :aria-label="`Comprar ${game.name}`" @click="openGameDetails(game.id)">VER MÁS🛒</button>
                            <div class="cart-actions">
                                <button type="button" :disabled="tieneProducto(game.id)" @click="agregarAlCarrito(game, 'compra')">
                                    Comprar ${{ game.price }}
                                </button>
                                <button type="button" :disabled="tieneProducto(game.id)" @click="agregarAlCarrito(game, 'renta')">
                                    Rentar gratis
                                </button>
                            </div>
                            <p v-if="tieneProducto(game.id)" class="cart-item-status">
                                En carrito: {{ tipoEnCarrito(game.id) === 'compra' ? 'Compra' : 'Renta' }}
                                <button type="button" @click="quitarProducto(game.id)">Quitar</button>
                            </p>
                    </div>
                    </article>
                </div>

                <div class="store-heading">
                    <div>
                        <span class="store-kicker">🪅 Catalogo 🪅</span>
                        <h2>Todos los juegos</h2>
                    </div>
                    <span class="games-count">{{ catalogGames.length }} juegos</span>
                </div>
            </template>

            <div v-else class="store-heading">
                <div>
                    <span class="store-kicker">Catalogo</span>
                    <h2>{{ activeSection }}</h2>
                </div>
                <span class="games-count">{{ filteredGames.length }} juegos</span>
            </div>

            <div v-if="catalogGames.length" class="games-shelf">
                <article v-for="game in catalogGames" :key="game.id" class="game-item game-card">
                    <RouterLink :to="`/tienda/${game.id}`" class="game-case" :title="game.name">
                        <img :src="game.image" :alt="`Portada de ${game.name}`" class="game-cover" />
                    </RouterLink>
                    <div class="game-info">
                        <h3>{{ game.name }}</h3>
                        <div class="game-meta">
                            <p class="game-genre">{{ game.genre }}</p>
                            <p class="game-price">${{ game.price }}</p>
                        </div>
                        <button type="button" :aria-label="`Comprar ${game.name}`" @click="openGameDetails(game.id)">VER MÁS 🛒</button>
                        <div class="cart-actions">
                            <button type="button" :disabled="tieneProducto(game.id)" @click="agregarAlCarrito(game, 'compra')">
                                Comprar ${{ game.price }}
                            </button>
                            <button type="button" :disabled="tieneProducto(game.id)" @click="agregarAlCarrito(game, 'renta')">
                                Rentar gratis
                            </button>
                        </div>
                        <p v-if="tieneProducto(game.id)" class="cart-item-status">
                            En carrito: {{ tipoEnCarrito(game.id) === 'compra' ? 'Compra' : 'Renta' }}
                            <button type="button" @click="quitarProducto(game.id)">Quitar</button>
                        </p>
                    </div>
                </article>
            </div>
            <div v-else class="empty-catalog">
                <strong>Esta consola aun no tiene juegos</strong>
            </div>
        </section>
    </main>
</template>

<style scoped>
.tienda-view {
    flex: 1;
    min-height: 0;
    display: grid;
    grid-template-columns: clamp(190px, 16vw, 240px) 1fr;
    height: calc(100svh - 74px);
    overflow: hidden;
}

.tienda-content {
    min-width: 0;
    padding: 1.5rem clamp(1rem, 3vw, 3rem);
    overflow-y: auto;
}

.store-top-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 1.4rem;
}

.store-name {
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-bottom: 1.4rem;
    padding-bottom: 0.7rem;
}

.cart-summary {
    flex: 0 0 min(340px, 42%);
    padding: 0.8rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.45);
    border-radius: 10px;
    background: rgba(26, 25, 34, 0.88);
    color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.cart-summary p {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    margin: 0.25rem 0;
}

.cart-summary strong {
    color: #ffc96b;
    text-align: right;
}

.cart-summary hr {
    margin: 0.55rem 0;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.cart-summary .cart-total {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.store-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-bottom: 1.4rem;
    padding-bottom: 0.7rem;
    border-bottom: 2px solid rgba(8, 10, 16, 0.18);
}

.store-heading h2 {
    margin: 0;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
}

.store-kicker {
    display: block;
    color: #000000;
    font-size: 1rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}


.games-shelf {
    display: grid;
    grid-template-columns: repeat(auto-fill, 160px);
    gap: clamp(1rem, 2.5vw, 2rem);
    align-items: end;
    padding: 1rem clamp(0.25rem, 1vw, 1rem) 2rem;
}

.featured-shelf {
    margin-bottom: auto;
}

.games-count {
    color: #050505;
}

.featured-shelf {
    margin-bottom: 2rem;
}

.game-card {
    display: grid;
    width: 110%;
    text-align: left;
    background: rgba(129, 64, 34, 0.692);
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
    filter:hue-rotate();
}

.game-cover {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position:top;
}

.game-info {
    color: #fff;
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
    background: #ffa24c;
    color: rgb(8, 8, 8);
    font-family: inherit;
    cursor: pointer;
}

.game-info button:hover {
    transform: translate(1px, 1px);
    background: #ff8e24;
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

.game-info .cart-actions button:disabled {
    cursor: not-allowed;
    opacity: 0.55;
}

.cart-item-status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.35rem;
    font-size: 0.9rem !important;
}

.game-info .cart-item-status button {
    width: auto;
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
}

.empty-catalog {
    display: grid;
    place-content: center;
    min-height: 280px;
    border: 2px dashed rgba(255, 255, 255, 0.45);
    border-radius: 12px;
    color: rgb(5, 5, 5);
    text-align: center;
    background: rgba(20, 28, 53, 0.55);
}

.empty-catalog strong {
    font-size: 1.35rem;
}

@media (max-width: 700px) {
    .store-top-row {
        flex-direction: column;
    }

    .cart-summary {
        flex-basis: auto;
        width: 100%;
        box-sizing: border-box;
    }
}

:global(#app:has(.tienda-view)) {
    height: 100svh;
    overflow: hidden;
    background-image: url('../assets/images/tienda.png');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
