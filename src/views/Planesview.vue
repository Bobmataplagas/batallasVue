<script setup lang="ts">
import { computed } from 'vue';
import { plans, type plan } from '@/bases/plan'

const props = defineProps<{ id: string }>()
function buscarPlan(id: string): plan {
    for (const planActual of plans) {
        if (planActual.id === id) {
            return planActual
        }
    }
    return plans[0]
}
const plan = computed(() => buscarPlan(props.id))

</script>

<template>
    <main class="plan-view">
        <section class="plan-card">
            <h1>{{ plan.name }}</h1>
            <p>{{ plan.description }}</p>
            <strong class="plan-price">{{ plan.price }} / mes</strong>
                <div v-for="feature in plan.features" :key="feature">
                    {{ feature }}
                </div>
        </section>
    </main>
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
}

.plan-card p {
    margin-bottom: 1rem;
    line-height: 1.5;
}

.plan-price {
    font-size: 1.25rem;
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
