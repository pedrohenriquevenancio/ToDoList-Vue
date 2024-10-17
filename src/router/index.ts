import TasksView from '@/views/TasksView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TasksView
    },
    {
      path: '/:id',
      name: 'GroupTasks',
      component: TasksView
    }
  ]
})

export default router
