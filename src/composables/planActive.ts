import { computed, ref } from 'vue'
import { plans, type plan } from '@/bases/plan'

const activePlanId = ref<plan['id'] | null>(null)

export function usePlanActive() {
    const activePlan = computed(() =>
        plans.find((planActual) => planActual.id === activePlanId.value) ?? null
    )

    function activatePlan(id: plan['id']) {
        activePlanId.value = id
    }

    return { activePlanId, activePlan, activatePlan }
}
