import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { games, type consola } from '@/interfaces/games.interface.ts'

type StoreSection = consola | 'Ver todos los juegos'

export default function useStoreGames() {
    const router = useRouter()
    const activeSection = ref<StoreSection>('Ver todos los juegos')

    const filteredGames = computed(() =>
        activeSection.value === 'Ver todos los juegos' ? games : games.filter((game) => game.console === activeSection.value)
    )

    const featuredGames = computed(() =>
        games.filter((game) => ['2', '9', '13', '1', '11'].includes(game.id))
    )

    const catalogGames = computed(() => filteredGames.value)
    const openGameDetails = (gameId: string) => router.push(`/tienda/${gameId}`)

    return {
        activeSection,
        filteredGames,
        featuredGames,
        catalogGames,
        openGameDetails,
    }
}