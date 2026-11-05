<script setup lang="ts">

</script>

<template>
    <div>
        <main class="tienda-view">
            <div style="padding-left: 20%;" class="text-left">
                <h1 class="color3">sample</h1>
                <p>a</p>
            </div>
        </main>
    </div>
</template>

<style scoped>
.tienda-view {
    flex: 1;
    min-height: 0;
}

:global(#app:has(.tienda-view)) {
    height: 100svh;
    overflow: hidden;
    background-image: url('../assets/images/tienda.gif');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
