<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import themePlugin from "@fullcalendar/vue3/themes/monarch"; // YOUR THEME
import dayGridPlugin from "@fullcalendar/vue3/daygrid";
import interactionPlugin from "@fullcalendar/vue3/interaction";
import { ref } from "vue";
import type { EventClickInfo } from "@fullcalendar/vue3";

  // stylesheets
import '@fullcalendar/vue3/skeleton.css'; // ALWAYS NEED SKELETON
import '@fullcalendar/vue3/themes/monarch/theme.css'; // YOUR THEME
import '@fullcalendar/vue3/themes/monarch/palettes/purple.css'; // YOUR THEME'S PALETTE

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
    eventClick: handleEventClick,
    events: [
    {
        title: "Pokémon Sol y Luna",
        date: "2026-11-18",
        extendedProps: {
            consola: "Nintendo 3DS",
            lanzamiento: "18 de noviembre de 2016",
            descripcion: "Información sobre Pokémon Sol y Luna...aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            imagen: "https://nintendoeverything.com/wp-content/uploads/pokemon-refresh.png"
        }
    },
    {
        title: "12 años de Pokémon ORAS",
        date: "2026-11-21",
        extendedProps: {
            consola: "Nintendo 3DS",
            lanzamiento: "21 de noviembre de 2014",
            descripcion: "Información sobre...",
            imagen: "https://static.oraswiki.com/assets/media/2024/08/oras-concept-art.jpg"
        }
    }
    ],
};

</script>

<template>
    <div>
        <FullCalendar :options="calendarOptions" />
    </div>

    <div v-if="selectedEvent" class="modal-overlay">
        <div class="modal">
            <button class="close-button" @click="closeModal"> × </button>
            <h2> {{ selectedEvent.event.title }} </h2>
            <p class="text-left color4"> <strong>Consola:</strong> {{ selectedEvent.event.extendedProps.consola }} </p>
            <p class="text-left color4"><strong>Lanzamiento:</strong> {{ selectedEvent.event.extendedProps.lanzamiento }}</p>
            <p class="text-left descripcion"> {{ selectedEvent.event.extendedProps.descripcion }} </p>
            <img :src="selectedEvent.event.extendedProps.imagen" :alt="selectedEvent.event.title" class="game-image">
            <button class="close-modal" @click="closeModal"> Cerrar </button>

        </div>
    </div>
</template>

<style scoped>

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    padding: 20px;
    box-sizing: border-box;
}

.modal {
    position: relative;
    width: 450px;
    max-width: 90%;
    max-width: 100%;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    padding: 30px;
    background: #e2e2e2;
    border: 5px solid #31bdf7;
    border-radius: 15px;
    box-shadow: 8px 8px 0px #2898c9;
    text-align: center;
}

.game-image {
    width: 100%;
    max-height: 250px;
    object-fit: contain;
    margin-bottom: 15px;
    max-width: 100%;
    height: auto;
    object-fit: contain;
}

.modal h2 {
    margin-bottom: 2%;
    font-size: 250%;
}

.modal p {
    font-size: 140%;
    margin: 1%;
    overflow-wrap: anywhere;
    word-break: normal;
    max-width: 100%;
}

.descripcion {
    text-align: left;
    padding-top: 5%;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    border: none;
    background: none;
    font-size: 200%;
    cursor: pointer;
}

.close-modal {
    margin-top: 20px;
    padding: 10px 25px;
    border: none;
    border-radius: 8px;
    background: #08bdff;
    color: white;
    font-size: 150%;
    cursor: pointer;
}

.close-modal:hover {
    transform: scale(1.05);
}

</style>
