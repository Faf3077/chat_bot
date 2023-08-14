<template>
  <div class="chat-widget">
    <div class="chat-messages">
      <div v-for="message in messages" :key="message.id" class="message" :class="{ 'user-message': message.user === 'user', 'bot-message': message.user === 'bot' }">{{ message.text }}</div>
    </div>
    <div class="options">
      <button v-for="option in options" :key="option.id" @click="selectOption(option)" class="option">{{ option.text }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      options: [
        { id: 1, text: 'Привет', response: 'Здравствуйте! Как я могу помочь вам?' },
        { id: 2, text: 'Как дела?', response: 'У меня всё хорошо, спасибо за вопрос!' },
        { id: 3, text: 'Пока', response: 'До свидания! Приходите ещё!' }
      ]
    };
  },
  methods: {
    selectOption(option) {
      this.messages.push({ text: option.text, user: 'user' });
      this.messages.push({ text: option.response, user: 'bot' });
    }
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
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chat-messages {
  flex: 1;
  overflow-y: scroll;
  padding: 10px;
}

.message {
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
  word-wrap: break-word;

  &.user-message {
    align-self: flex-end;
    background-color: $user-message-bg;
  }

  &.bot-message {
    align-self: flex-start;
    background-color: $bot-message-bg;
    color: $bot-message-text-color;
  }
}

.options {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}

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
</style>