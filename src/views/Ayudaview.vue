<script setup lang="ts">
import ChatMessages from '../components/chat/ChatMessages.vue';
import MessageBox from '../components/chat/MessageBox.vue';
import { useChat } from '../composables/useChat.ts'
import { ref } from 'vue';
const { messages, onMessage, frequentQuestions, onFrequentQuestion } = useChat();
const showFrequentQuestions = ref(true);

const selectQuestion = (index: number) => {
  onFrequentQuestion(index);
  showFrequentQuestions.value = false;
}

const emit = defineEmits<{
  close: []
}>()
</script>

<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="chat-page bg-gray-100 flex flex-col" role="dialog" aria-modal="true" aria-label="Chat de ayuda">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Helper</span>
      <button class="close-button" type="button" aria-label="Cerrar chat" @click="emit('close')">X</button>
    </div>

    <section v-if="showFrequentQuestions" class="frequent-questions" aria-label="Preguntas frecuentes">
      <div class="frequent-questions-list">
        <button
          v-for="(item, index) in frequentQuestions"
          :key="item.question"
          type="button"
          @click="selectQuestion(index)"
        >
          {{ item.question }}
        </button>
      </div>
    </section>

    <ChatMessages :messages="messages"/>
    <!-- Notación de tipo kebab-case -->
    <!-- Incluimos el método capturando el evento -->
    <MessageBox @send-message="onMessage($event)"/>

    
  </div>
</template>

<style scoped>
.chat-page {
  width: min(92vw, 28rem);
  height: min(70svh, 38rem);
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.45);
}

.close-button {
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: 999px;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.frequent-questions {
  padding: 0.75rem;
  border-bottom: 1px solid #d1d5db;
  background: white;
}

.frequent-questions-list {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.frequent-questions-list button {
  width: 100%;
  padding: 0.375rem 0.625rem;
  border: 1px solid #c7c7c700;
  border-radius: 999px;
  color: #000;
  background: #ff7e055d;
  cursor: pointer;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  text-align: left;
}

.frequent-questions-list button:hover {
  background: #ff7e0598;
}
</style>