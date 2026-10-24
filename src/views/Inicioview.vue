<template>
    <main class="inicio-view">
        <div class="text-center">
            <h1 class="color3">Bienvenido a -> Piñatas🪅Gaming <- </h1>
            <p>Aquí puedes encontrar información sobre juegos retro y nuestros servicios, acompañado de las últimas novedades</p>
        </div>
    </main>
</template>

<style scoped>
.inicio-view {
    flex: 1;
    min-height: 0;
}

:global(#app:has(.inicio-view)) {
    height: 100svh;
    overflow: hidden;
    background-image: url('../assets/inciio.gif');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
