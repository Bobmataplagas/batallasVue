import { computed, ref } from 'vue'
import type { game } from '@/interfaces/games.interface.ts'

export type productoCarrito = {
    id: string
    nombre: string
    precio: number
    tipo: 'compra' | 'renta'
}

const bibliotecaStorageKey = 'gamebattles-biblioteca'
const carrito = ref<productoCarrito[]>([])

function cargarBiblioteca(): productoCarrito[] {
    const almacenada = localStorage.getItem(bibliotecaStorageKey)
    if (!almacenada) return []
    return JSON.parse(almacenada)
}

const biblioteca = ref<productoCarrito[]>(cargarBiblioteca())

export function totalPrecio(productos: productoCarrito[]) {
    return productos.reduce(
        (total, producto) => total + (producto.tipo === 'compra' ? producto.precio : 0),
        0
    )
}

export const precioTotal = computed(() => totalPrecio(carrito.value))
export const totalCompras = computed(() => carrito.value.filter((producto) => producto.tipo === 'compra').length)
export const totalRentas = computed(() => carrito.value.filter((producto) => producto.tipo === 'renta').length)
export const totalOrdenes = computed(() => carrito.value.length)

export function agregarProducto(juego: game, tipo: productoCarrito['tipo']) {
    if (carrito.value.some((producto) => producto.id === juego.id)) return false
    carrito.value.push({
        id: juego.id,
        nombre: juego.name,
        precio: juego.price,
        tipo,
    })
    return true
}

export function quitarProducto(gameId: string) {
    const index = carrito.value.findIndex((producto) => producto.id === gameId)
    if (index === -1) return
    carrito.value.splice(index, 1)
}

export function pagarCarrito() {
    if (carrito.value.length === 0) return false

    const productosActualizados = [...biblioteca.value]
    for (const producto of carrito.value) {
        if (!productosActualizados.some((adquirido) => adquirido.id === producto.id)) {
            productosActualizados.push(producto)
        }
    }

    biblioteca.value = productosActualizados
    carrito.value.splice(0)
    return true
}

export function useCarrito() {
    return {
        carrito,
        biblioteca,
        precioTotal,
        totalCompras,
        totalRentas,
        totalOrdenes,
        agregarProducto,
        quitarProducto,
        pagarCarrito,
    }
}
