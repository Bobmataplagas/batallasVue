import { ref } from "vue";
import type { ChatMessage } from "../interfaces/chat-message.interface";
import type { YesNoResponse } from "../interfaces/yes-no.response";
import { sleep } from "../helpers/sleep";

export const useChat = () => {

    const frequentQuestions = [
        {
            question: '¿Cómo puedo iniciar sesión?',
            answer: 'Haz clic en el icono de perfil para abrir la sección de inicio de sesión.'
        },
        {
            question: '¿Cómo encuentro los juegos?',
            answer: 'Entra en "Jugar" desde el menú principal para ver los juegos disponibles.'
        },
        {
            question: '¿Cómo funcionan los planes?',
            answer: 'Puedes consultar las opciones disponibles desde el menú "Planes".'
        },
        {
            question: '¿Cómo puedo comprar en la tienda?',
            answer: 'Abre la tienda desde el menú principal y elige el producto que quieras consultar.'
        },
    ];

   const messages=ref<ChatMessage[]>([]);

    const getHerResponse = async() => {
        const resp = await fetch('https://yesno.wtf/api');
        const data = (await resp.json()) as YesNoResponse;
        return data;
    }

    const onMessage = async (text: string) => {
        if (text.length === 0) return;
        messages.value.push({
            id: new Date().getTime(),
            itsMine: true,
            message: text,
        });
        // Evaluar si termina con un signo de ?
        if(!text.endsWith('?')) return;
        // Hacemos que la respuesta tarde un segundo
        await sleep(1.5);
        const {answer, image} = await getHerResponse();
        messages.value.push({
            id: new Date().getTime(),
            itsMine: false,
            message: answer,
            image: image,
    });
}

    const onFrequentQuestion = (questionIndex: number) => {
        const selectedQuestion = frequentQuestions[questionIndex];
        if (!selectedQuestion) return;

        messages.value.push({
            id: new Date().getTime(),
            itsMine: true,
            message: selectedQuestion.question,
        });
        messages.value.push({
            id: new Date().getTime() + 1,
            itsMine: false,
            message: selectedQuestion.answer,
        });
    }


    return {
        messages,
        onMessage,
        frequentQuestions,
        onFrequentQuestion,
    }
}