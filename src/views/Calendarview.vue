<script setup lang="ts">
import Calendar from '@/components/Calendar.vue';

</script>

<template>
    <main class="calendar-view">
        <Calendar />
    </main>
</template>

<style scoped>
.calendar-view {
    display: flex;
    flex: 1;
    min-height: 0;
    width: 100%;
    height: calc(100svh - 74px);
}

:global(#app:has(.calendar-view)) {
    height: 100svh;
    overflow: hidden;
    background-image: url('../assets/images/rentarcomprar.png');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
}

:global(#app:has(.calendar-view) .site-footer) {
    display: none;
}
</style>
