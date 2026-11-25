<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import themePlugin from "@fullcalendar/vue3/themes/monarch";
import dayGridPlugin from "@fullcalendar/vue3/daygrid";
import interactionPlugin from "@fullcalendar/vue3/interaction";
import { ref } from "vue";
import type { EventClickInfo } from "@fullcalendar/vue3";

import "@fullcalendar/vue3/skeleton.css";
import "@fullcalendar/vue3/themes/monarch/theme.css";
import "@fullcalendar/vue3/themes/monarch/palettes/blue.css";

const selectedEvent = ref<EventClickInfo | null>(null);

function handleEventClick(info: EventClickInfo) {
    selectedEvent.value = info;
}

function closeModal() {
    selectedEvent.value = null;
}

const calendarOptions = {
    plugins: [themePlugin, dayGridPlugin, interactionPlugin],
    initialView: "dayGridMonth",
    height: "100%",
    expandRows: true,
    fixedWeekCount: false,
    locale: "es",
    firstDay: 1,
    headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "",
    },
    prevText: "‹",
    nextText: "›",
    todayText: "Hoy",
    prevHint: "Mes anterior",
    nextHint: "Mes siguiente",
    dayMaxEvents: false,
    eventClick: handleEventClick,
    eventColor: "#a9e3f5",
    eventContrastColor: "#183746",
    events: [
        {
            title: "Pokémon Sol y Luna",
            date: "2026-11-18",
            extendedProps: {
                consola: "Nintendo 3DS",
                lanzamiento: "18 de noviembre de 2016",
                descripcion: "Información sobre Pokémon Sol y Luna...aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                imagen: "https://nintendoeverything.com/wp-content/uploads/pokemon-refresh.png",
            },
        },
        {
            title: "12 años de Pokémon ORAS",
            date: "2026-11-21",
            extendedProps: {
                consola: "Nintendo 3DS",
                lanzamiento: "21 de noviembre de 2014",
                descripcion: "Información sobre...",
                imagen: "https://static.oraswiki.com/assets/media/2024/08/oras-concept-art.jpg",
            },
        },
    ],
};
</script>

<template>
    <section class="calendar-page" aria-labelledby="calendar-title">
        <header class="calendar-heading">
            <div class="calendar-heading-copy">
                <span class="calendar-eyebrow">Próximos lanzamientos y aniversarios</span>
                <h1 id="calendar-title" class="calendar-title">Retro🪅News</h1>
            </div>
        </header>

        <div class="calendar-container">
            <FullCalendar :options="calendarOptions" />
        </div>
    </section>

    <div v-if="selectedEvent" class="modal-overlay" @click.self="closeModal">
        <section class="modal" role="dialog" aria-modal="true" :aria-label="selectedEvent.event.title">
            <button class="close-button" type="button" aria-label="Cerrar" @click="closeModal">×</button>
            <h2>{{ selectedEvent.event.title }}</h2>
            <p class="modal-detail"><strong>Consola:</strong> {{ selectedEvent.event.extendedProps.consola }}</p>
            <p class="modal-detail"><strong>Lanzamiento:</strong> {{ selectedEvent.event.extendedProps.lanzamiento }}</p>
            <p class="descripcion">{{ selectedEvent.event.extendedProps.descripcion }}</p>
            <img
                v-if="selectedEvent.event.extendedProps.imagen"
                :src="selectedEvent.event.extendedProps.imagen"
                :alt="selectedEvent.event.title"
                class="game-image"
            >
            <button class="close-modal" type="button" @click="closeModal">Cerrar</button>
        </section>
    </div>
</template>

<style scoped>
.calendar-page {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: clamp(0.5rem, 1.5vh, 1rem);
    min-height: 0;
    padding: clamp(0.65rem, 1.8vh, 1.25rem) clamp(0.75rem, 4vw, 3rem);
    box-sizing: border-box;
}

.calendar-heading {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    color: #243b49;
}

.calendar-heading-copy {
    min-width: 0;
    text-align: left;
}

.calendar-eyebrow,
.modal-eyebrow {
    display: block;
    color: #0e303d;
    font-size: clamp(0.65rem, 1.3vw, 0.85rem);
    letter-spacing: 0.08em;
    line-height: 1.3;
    text-transform: uppercase;
}

.calendar-title {
    margin: 0;
    color: #243b49;
    font-size: clamp(1.35rem, 3vw, 2.25rem);
    line-height: 1.15;
    letter-spacing: 0.02em;
    text-shadow: 2px 2px 0 #d9edf5;
}

.calendar-container {
    flex: 1;
    min-height: 0;
    overflow: hidden;
    padding: clamp(0.5rem, 1.5vw, 1.25rem);
    border: 3px solid #a9deee;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.97);
    box-shadow: 0 10px 28px rgba(57, 91, 107, 0.2);
    color: #263943;
    font-family: 'PkmnFuente', sans-serif;
    font-size: clamp(0.65rem, 1vw, 0.9rem);
    --fc-monarch-background: #ffffff;
    --fc-monarch-foreground: #263943;
    --fc-monarch-faint: #f7fafb;
    --fc-monarch-muted: #edf2f4;
    --fc-monarch-strong: #dce5e9;
    --fc-monarch-stronger: #cbd8de;
    --fc-monarch-strongest: #bacbd2;
    --fc-monarch-border: #dce5e9;
    --fc-monarch-strong-border: #bfced5;
    --fc-monarch-primary: #a9e3f5;
    --fc-monarch-primary-foreground: #183746;
    --fc-monarch-secondary: #edf2f4;
    --fc-monarch-secondary-foreground: #263943;
    --fc-monarch-event: #a9e3f5;
    --fc-monarch-event-contrast: #183746;
    --fc-monarch-highlight: rgba(116, 207, 235, 0.2);
    --fc-monarch-now: #278db5;
    --fc-monarch-selected: #d6f1f9;
    --fc-monarch-selected-foreground: #183746;
    --fc-monarch-muted-foreground: #71858f;
    --fc-border-color: #dce5e9;
    --fc-page-bg-color: transparent;
    --fc-neutral-bg-color: #f5f8f9;
    --fc-today-bg-color: rgba(116, 207, 235, 0.2);
    --fc-event-border-color: #8bcfe5;
    --fc-event-bg-color: #a9e3f5;
    --fc-event-text-color: #183746;
}

.modal-overlay {
    position: fixed;
    z-index: 9999;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;
    background: rgba(37, 54, 63, 0.42);
}

.modal {
    position: relative;
    width: min(32rem, 100%);
    max-height: calc(100svh - 2rem);
    overflow: auto;
    padding: clamp(1.25rem, 4vw, 2rem);
    box-sizing: border-box;
    border: 3px solid #a9deee;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 10px 28px rgba(57, 91, 107, 0.24);
    color: #263943;
    text-align: left;
}

.modal h2 {
    margin: 0.5rem 2rem 1rem 0;
    color: #278db5;
    overflow-wrap: anywhere;
}

.modal-detail,
.descripcion {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    line-height: 1.55;
    overflow-wrap: anywhere;
}

.modal-detail strong {
    color: #278db5;
}

.descripcion {
    margin-top: 1rem;
}

.game-image {
    display: block;
    width: 100%;
    max-height: 250px;
    margin-top: 1rem;
    border-radius: 6px;
    object-fit: contain;
}

.close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.75rem;
    border: 0;
    background: none;
    color: #263943;
    font-size: 1.75rem;
    cursor: pointer;
}

.close-modal {
    margin-top: 1.25rem;
    padding: 0.65rem 1.25rem;
    border: 1px solid #9edcf0;
    border-radius: 6px;
    background: #a9e3f5;
    color: #183746;
    font-family: inherit;
    cursor: pointer;
}

.close-modal:hover {
    background: #8bd5ed;
}

@media (max-width: 640px) {
    .calendar-container {
        padding: 0.45rem;
        border-width: 2px;
        border-radius: 8px;
        box-shadow: 0 6px 18px rgba(57, 91, 107, 0.2);
    }

}
</style>
