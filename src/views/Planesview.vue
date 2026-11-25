<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { plans, type plan } from '@/bases/plan'
import { usePlanActive } from '@/composables/planActive'
import { sleep } from '@/helpers/sleep'

const props = defineProps<{ id: string }>()
const router = useRouter()
const { activatePlan } = usePlanActive()
const isProcessing = ref(false)
let isViewActive = true

function buscarPlan(id: string): plan {
    for (const planActual of plans) {
        if (planActual.id === id) {
            return planActual
        }
    }
    return plans[0]
}


const plan = computed(() => buscarPlan(props.id))

async function payPlan() {
    if (isProcessing.value) return

    activatePlan(plan.value.id)
    isProcessing.value = true
    await sleep(1.8)
    if (isViewActive) await router.push('/inicio')
}

onUnmounted(() => {
    isViewActive = false
})
</script>

<template>
    <main v-if="!isProcessing" class="plan-view">
        <section class="plan-card">
            <h1>{{ plan.name }}</h1>
            <p>{{ plan.description }}</p>
            <strong class="plan-price">${{ plan.price }}/mes</strong>
                <div v-for="feature in plan.features" :key="feature">
                    {{ feature }}
                </div>
            <button class="pagar-plan" type="button" @click="payPlan">
                Obtener {{ plan.name }}
            </button>
        </section>
    </main>
    <section v-else class="payment-loading" role="status" aria-live="polite">
        <div class="loading-panel">
            <div class="loading-gem" aria-hidden="true">◆</div>
            <p class="loading-kicker">Pago simulado exitosamente</p>
            <h1>¡{{ plan.name }} activado!</h1>
            <p>Preparando tu experiencia de juego...</p>
            <div class="loading-progress" aria-hidden="true">
                <span></span>
            </div>
            <p class="loading-note">Entrando al inicio</p>
        </div>
    </section>
</template>

<style scoped>
.plan-view {
    padding: 5%;
    min-height: 0;
    display: grid;
    place-items: center;
}

.plan-card {
    width: min(90vw, 32rem);
    box-sizing: border-box;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    color: white;
    background: rgba(15, 15, 25, 0.82);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.35);
}

.plan-label {
    color: #93c5fd;
    font-size: 0.875rem;
}

.plan-card h1 {
    margin: 0.25rem 0 0.75rem;
    color: #fff;
}

.plan-card p {
    margin-bottom: 1rem;
    line-height: 1.5;
}

.plan-price {
    font-size: 1.25rem;
}

.pagar-plan {
    margin-top: 1.5rem;
    padding: 0.75rem 1rem;
    border: 0;
    border-radius: 0.5rem;
    color: #10131d;
    background: #93c5fd;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
}

.pagar-plan:hover {
    background: #bfdbfe;
}

.payment-loading {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: grid;
    place-items: center;
    overflow: hidden;
    padding: 1.5rem;
    color: #fff;
    background:
        radial-gradient(ellipse at 50% 40%, rgba(84, 87, 164, 0.48), transparent 55%),
        linear-gradient(145deg, #101323, #19152d 60%, #102331);
}

.loading-panel {
    width: min(100%, 34rem);
    text-align: center;
    animation: panel-appear 0.45s ease-out both;
}

.loading-gem {
    display: grid;
    width: 5rem;
    height: 5rem;
    place-items: center;
    margin: 0 auto 1.5rem;
    border: 1px solid rgba(187, 211, 255, 0.55);
    border-radius: 1.5rem;
    color: #c6d9ff;
    background: rgba(165, 190, 255, 0.12);
    box-shadow: 0 0 2.5rem rgba(127, 149, 255, 0.28);
    font-size: 2.5rem;
    animation: gem-float 1.4s ease-in-out infinite alternate;
}

.loading-kicker {
    color: #a9d8ff;
    font-size: 0.95rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.loading-panel h1 {
    margin: 0.5rem 0 0.75rem;
    color: #fff;
    font-size: clamp(2rem, 7vw, 3.25rem);
}

.loading-panel > p:not(.loading-kicker, .loading-note) {
    color: rgba(255, 255, 255, 0.78);
}

.loading-progress {
    width: min(100%, 20rem);
    height: 0.65rem;
    overflow: hidden;
    margin: 2rem auto 0.85rem;
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
}

.loading-progress span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #70d7d1, #a9d8ff, #d6b7ff);
    transform: scaleX(0);
    transform-origin: left;
    animation: loading-fill 1.8s linear forwards;
}

.loading-note {
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.9rem;
}

@keyframes loading-fill {
    to { transform: scaleX(1); }
}

@keyframes gem-float {
    to { transform: translateY(-0.45rem) rotate(8deg); }
}

@keyframes panel-appear {
    from { opacity: 0; transform: translateY(0.75rem); }
    to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
    .loading-panel,
    .loading-gem,
    .loading-progress span {
        animation-duration: 0.01ms;
        animation-iteration-count: 1;
    }
}

.plan-card ul {
    margin: 1rem 0 0;
    padding-left: 1.25rem;
}

.plan-card li {
    margin: 0.4rem 0;
}

:global(#app:has(.plan-view)) {
    height: 100svh;
    overflow: hidden;
    background-image: url('../assets/images/planewall.png');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
