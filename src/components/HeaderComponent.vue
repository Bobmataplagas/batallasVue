<script lang="ts" setup>
const emit = defineEmits<{
  selectSection: [section: 'Silksong' | 'SF3S'| 'Splatoon']
}>()
</script>

<template>
    <header>
        <nav>
            <div class="section-buttons">
              <button type="button" @click="emit('selectSection', 'Silksong')">Silksong</button>
              <button type="button" @click="emit('selectSection', 'SF3S')">Street Fighter III: Third Strike</button>
              <button type="button" @click="emit('selectSection', 'Splatoon')">Splatoon 3</button>
            </div>
        </nav>
    </header>
</template>


<style scoped>
header {
  margin-bottom: 4%;
}

.section-buttons {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  padding-inline: clamp(1rem, 3vw, 2rem);
}

nav button {
  flex: 0 1 auto;
  padding: 0.625rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(161, 161, 161, 0.815);
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  font-weight: 600;
}

nav button:hover {
  background: rgba(250, 0, 62, 0.692);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.068);
}

@media (max-width: 480px) {
  .section-buttons {
    justify-content: stretch;
  }

  nav button {
    flex: 1 1 calc(50% - 0.5rem);
  }
}
</style>