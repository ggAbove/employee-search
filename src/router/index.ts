import { createRouter, createWebHistory } from 'vue-router'
import UserProfile from '@/components/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'userProfile',
      component: UserProfile,
    },
  ],
})

export default router
