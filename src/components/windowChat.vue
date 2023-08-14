<template>
  <div class="chat-widget">
    <div class="chat-messages" ref="chatMessages">
      <div v-for="message in messages" :key="message.id" class="message-container">
        <div v-if="message.user === 'user'" class="user-message">{{ message.text }}</div>
        <div class="bot" v-else><img src="../assets/robot.png" alt="">
          <div class="bot-message">{{ message.text }}</div>
        </div>
      </div>
    </div>
    <div class="options">
      <button v-for="option in options" :key="option.id" @click="selectOption(option)" class="option">{{ option.text
      }}</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const messages = ref([]);
    const options = [
      { id: 1, text: 'Как дела?', response: 'У меня всё хорошо, спасибо за вопрос!' },
      { id: 2, text: 'Пока', response: 'До свидания! Приходите ещё!' }
    ];

    const chatMessages = ref(null); // Референс на элемент с сообщениями

    const selectOption = async (option) => {
      messages.value.push({ text: option.text, user: 'user' });

      // Анимация печатания для бота
      messages.value.push({ text: '...', user: 'bot', isTyping: true });
      await new Promise(resolve => setTimeout(resolve, 500));

      messages.value.pop(); // Удаляем многоточие

      messages.value.push({ text: option.response, user: 'bot' });

      scrollToBottom(); // Прокрутка чата вниз
    };

    const scrollToBottom = () => {
      if (chatMessages.value) {
        chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
      }
    };

    messages.value.push({ text: 'Здравствуйте! Чем я могу вам помочь?', user: 'bot' });

    onMounted(() => {
      scrollToBottom(); // Прокрутка вниз при загрузке компонента
    });

    return {
      messages,
      options,
      selectOption,
      chatMessages
    };
  }
};
</script>

<style lang="scss" scoped>
$primary-color: #4caf50;
$user-message-bg: #f0f0f0;
$bot-message-bg: #4caf50;
$bot-message-text-color: white;
$primary-hover-color: #45a049;

.chat-widget {
  width: 100%;
  max-width: 400px;
  max-height: 500px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .chat-messages {
    flex: 1;
    overflow-y: scroll;
    padding: 10px;

    .message-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 10px;

      .user-message {
        align-self: flex-end;
        background-color: $user-message-bg;
        padding: 10px;
        border-radius: 5px;
        word-wrap: break-word;
      }

      .bot {
        display: flex;
        gap: 10px;
        align-items: center;

        .bot-message {
          background-color: $bot-message-bg;
          color: $bot-message-text-color;
          padding: 10px;
          border-radius: 5px;
          word-wrap: break-word;
        }
      }
    }
  }

  .options {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background: #dddcdc;

    .option {
      margin: 5px;
      padding: 8px 15px;
      background-color: $primary-color;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: $primary-hover-color;
      }
    }
  }
}
</style>






