<script setup lang="ts">
import ChatMessages from '../components/chat/ChatMessages.vue';
import MessageBox from '../components/chat/MessageBox.vue';
import { ref } from 'vue';
import type { ChatMessage } from '../interfaces/chat-message.interface.ts';
const messages=ref<ChatMessage[]>([
    {
        id: new Date().getTime(),
        message: 'ola',
        itsMine: false
    },
    {
        id: new Date().getTime(),
        message: '¿Quieres que juguemos algo multijugador?',
        itsMine: false
    },
    {
        id: new Date().getTime() + 1,
        message: 'Siii',
        itsMine: true,
        image:'https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif'
    },
]);

const onMessage = (text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    itsMine: true,
    message: text,
  })
}

</script>

<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="chat-page bg-gray-100 flex flex-1 min-h-0 flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi amigo</span>
    </div>

    <ChatMessages :messages="messages"/>
    <!-- Notación de tipo kebab-case -->
    <!-- Incluimos el método capturando el evento -->
    <MessageBox @send-message="onMessage($event)"/>

    
  </div>
</template>

<style scoped>
:global(#app:has(.chat-page)) {
  height: 100svh;
  overflow: hidden;
}
</style>