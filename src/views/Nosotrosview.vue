<script setup lang="ts">

</script>

<template>
    <div>
        <main class="nosotros-view">
            <div style="padding-left: 20%;" class="text-left">
                <h1 class="color3">Sobre nosotros</h1>
                <p>Jugar, conocer y experiencias para divertirse en videojuegos retro</p>
            </div>
        </main>
    </div>
</template>

<style scoped>
.nosotros-view {
    flex: 1;
    min-height: 0;
}

:global(#app:has(.nosotros-view)) {
    height: 100svh;
    overflow: hidden;
    background-image: url('../assets/images/nosotros.gif');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
