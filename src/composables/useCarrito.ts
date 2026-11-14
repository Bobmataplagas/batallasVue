import { computed, ref } from 'vue'
import type { game } from '@/interfaces/games.interface.ts'

export type productoCarrito = {
    id: string
    nombre: string
    precio: number
    tipo: 'compra' | 'renta'
}

const carrito = ref<productoCarrito[]>([])

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

export function vaciarCarrito() {
    carrito.value.splice(0)
}

export function useCarrito() {
    return {
        carrito,
        precioTotal,
        totalCompras,
        totalRentas,
        totalOrdenes,
        agregarProducto,
        quitarProducto,
        vaciarCarrito,
    }
}
