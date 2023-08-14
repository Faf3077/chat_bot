import { createRouter, createWebHistory } from 'vue-router'
import WindowChatBot from '../components/windowChat.vue'

const routes = [
  {
    path: '/',
    component: WindowChatBot
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router