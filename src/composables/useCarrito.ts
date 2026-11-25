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
const errorBiblioteca = ref('')

function esProductoCarrito(value: unknown): value is productoCarrito {
    if (typeof value !== 'object' || value === null) return false
    return 'id' in value
        && typeof value.id === 'string'
        && 'nombre' in value
        && typeof value.nombre === 'string'
        && 'precio' in value
        && typeof value.precio === 'number'
        && 'tipo' in value
        && (value.tipo === 'compra' || value.tipo === 'renta')
}

function cargarBiblioteca(): productoCarrito[] {
    try {
        const almacenada = localStorage.getItem(bibliotecaStorageKey)
        if (!almacenada) return []

        const productos: unknown = JSON.parse(almacenada)
        if (!Array.isArray(productos) || !productos.every(esProductoCarrito)) {
            throw new Error('El formato guardado no es válido')
        }
        return productos
    } catch (error) {
        console.error('No se pudo cargar la biblioteca de juegos.', error)
        errorBiblioteca.value = 'No se pudo cargar la biblioteca de juegos guardada.'
        return []
    }
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

export function vaciarCarrito() {
    carrito.value.splice(0)
}

export function pagarCarrito() {
    if (carrito.value.length === 0) return false

    const productosActualizados = [...biblioteca.value]
    for (const producto of carrito.value) {
        if (!productosActualizados.some((adquirido) => adquirido.id === producto.id)) {
            productosActualizados.push(producto)
        }
    }

    try {
        localStorage.setItem(bibliotecaStorageKey, JSON.stringify(productosActualizados))
    } catch (error) {
        console.error('No se pudo guardar la biblioteca de juegos.', error)
        errorBiblioteca.value = 'No se pudo completar la compra o renta. Inténtalo de nuevo.'
        return false
    }

    biblioteca.value = productosActualizados
    carrito.value.splice(0)
    errorBiblioteca.value = ''
    return true
}

export function useCarrito() {
    return {
        carrito,
        biblioteca,
        errorBiblioteca,
        precioTotal,
        totalCompras,
        totalRentas,
        totalOrdenes,
        agregarProducto,
        quitarProducto,
        vaciarCarrito,
        pagarCarrito,
    }
}
