<script setup lang="ts">
import Calendar from '@/components/Calendar.vue';
import home from '@/assets/images/RetroPiñata_logo.png'

</script>

<template>
    <div>
        <main class="nosotros-view">
        <Calendar></Calendar>
        </main>
    </div>
</template>

<style scoped>
.calendar-view {
    flex: 1;
    min-height: 0;
}

:global(#app:has(.calendar-view)) {
    height: 100svh;
    overflow: hidden;
    background-image: url('../assets/images/calendario.gif');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
