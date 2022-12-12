import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../views/Dashboard.vue"
import Auth from "../views/Auth.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", 
      component: Dashboard,
    },
    {
      path: "/",
      component: Auth,
    }
  ],
})

export default router
