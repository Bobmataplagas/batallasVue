import { useCarrito } from '@/composables/useCarrito.ts'
import { games, type consola } from '@/interfaces/games.interface.ts'
import { computed, ref } from 'vue'

const activeSection = ref<consola | 'Ver todos los juegos'>('Ver todos los juegos')
const selectedGameId = ref<string | null>(null)

export function useLibrary() {
    const { biblioteca, errorBiblioteca } = useCarrito()
    
    const juegosAdquiridos = computed(() =>
        games.filter((game) => biblioteca.value.some((producto) => producto.id === game.id))
    )
    
    const juegosFiltrados = computed(() =>
        activeSection.value === 'Ver todos los juegos' ? 
        juegosAdquiridos.value : juegosAdquiridos.value.filter((game) => game.console === activeSection.value)
    )
    
    const seleccionarJuego = (gameId: string) => {
        selectedGameId.value = selectedGameId.value === gameId ? null : gameId
    }

    return { 
        activeSection,
        juegosFiltrados,
        seleccionarJuego,
        juegosAdquiridos,
        errorBiblioteca,
        selectedGameId
    }
}