<template>
    <div v-if="itsMine" class="flex justify-end">
        <div class="chat-bubble bg-blue-200 text-black p-2 rounded-lg max-w-xs">
            {{ message }}
            <img
                v-if="image"
                :src="image"
                alt="YesNoImage"
                class="w-52 h-52 object-cover rounded-md"
            >
        </div>
    </div>

    <!-- Example Received Message -->
    <div v-else class="flex">
        <div class="chat-bubble bg-gray-300 text-black p-2 rounded-lg max-w-xs">
            {{ message }}
            <img
            v-if="image"
            :src="image"
            alt="YesNoImage"
            class="w-52 h-52 object-cover rounded-md"
            >
        </div> 
    </div>
</template>
<style scoped>
.chat-bubble {
    font-size: 0.8125rem;
    line-height: 1.25rem;
}
</style>
<script setup lang="ts">
    interface Props {
        message: string;
        itsMine: boolean;
        image?:string;
    }

    defineProps<Props>();
</script>