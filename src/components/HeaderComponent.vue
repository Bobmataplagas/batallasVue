<script lang="ts" setup>
const emit = defineEmits<{
  selectSection: [section: 'Silksong' | 'SF3S']
}>()
</script>

<template>
    <header>
        <nav>
            <ul>
              <li><button type="button" @click="emit('selectSection', 'Silksong')">Silksong</button></li>
              <li><button type="button" @click="emit('selectSection', 'SF3S')">Street Fighter III: Third Strike</button></li>
            </ul>
        </nav>
    </header>
</template>


<style scoped>
header {
  margin-bottom: 4%;
}

nav ul {
  display: flex;
  gap: 2%;
  justify-content: center;
  flex-wrap: wrap;
}

nav button {
  display: inline-block;
  padding: 10px 10px 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #f7f9fd;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
}

nav button:hover {
  background: rgba(110, 124, 196, 0.24);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(125, 211, 252, 0.18);
}
</style>