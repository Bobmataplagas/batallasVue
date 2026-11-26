<script setup lang="ts">
import { useCarrito, type productoCarrito } from '@/composables/useCarrito.ts'
import ConsoleButtons from '@/components/ConsoleButtons.vue'
import StoreCartSummary from '@/components/StoreCartSummary.vue'
import StoreGameCard from '@/components/StoreGameCard.vue'
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
    pagarCarrito,
} = useCarrito()

const tieneProducto = (gameId: string) => carrito.value.some((producto) => producto.id === gameId)
const tipoEnCarrito = (gameId: string) => carrito.value.find((producto) => producto.id === gameId)?.tipo
const agregarAlCarrito = (game: game, tipo: productoCarrito['tipo']) => agregarProducto(game, tipo)
</script>

<template>
    <main class="tienda-view">
        <ConsoleButtons v-model="activeSection" @selectSection="activeSection = $event" />
        <section class="tienda-content">
            <h1 class="store-name">Retro🪅Shop</h1>
            <div class="store-top-row">
                <StoreCartSummary
                    :total-compras="totalCompras"
                    :total-rentas="totalRentas"
                    :precio-total="precioTotal"
                    :carrito-vacio="carrito.length === 0"
                    @pay="pagarCarrito"
                />
            </div>

            <template v-if="activeSection === 'Ver todos los juegos'">
                <div class="store-heading">
                    <div>
                        <span class="store-kicker">⭐ Destacados ⭐</span>
                        <h2>Juegos favoritos del público</h2>
                    </div>
                </div>
                <div class="games-shelf featured-shelf">
                    <StoreGameCard
                        v-for="game in featuredGames"
                        :key="game.id"
                        :game="game"
                        :in-cart="tieneProducto(game.id)"
                        :cart-type="tipoEnCarrito(game.id)"
                        details-label="VER MÁS🛒"
                        rent-label="Rentar (gratis)"
                        @details="openGameDetails"
                        @add-to-cart="agregarAlCarrito(game, $event)"
                        @remove="quitarProducto"
                    />
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
                    <span class="store-kicker">🪅 Catalogo 🪅</span>
                    <h2>{{ activeSection }}</h2>
                </div>
                <span class="games-count">{{ filteredGames.length }} juegos</span>
            </div>

            <div v-if="catalogGames.length" class="games-shelf">
                <StoreGameCard
                    v-for="game in catalogGames"
                    :key="game.id"
                    :game="game"
                    :in-cart="tieneProducto(game.id)"
                    :cart-type="tipoEnCarrito(game.id)"
                    details-label="VER MÁS 🛒"
                    rent-label="Rentar gratis"
                    @details="openGameDetails"
                    @add-to-cart="agregarAlCarrito(game, $event)"
                    @remove="quitarProducto"
                />
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

}

:global(#app:has(.tienda-view)) {
    height: 100svh;
    overflow: hidden;
    background-image: url('../assets/images/rentarcomprar.png');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
