import { createWebHistory, createRouter } from 'vue-router'

import ProjectList from "../components/layouts/ProjectList.vue"
import ProjectForm from "../components/layouts/ProjectForm.vue"
import App from '../App.vue'

const routes = [
  { path: '/', component: App},
  { path: '/project-list', component: ProjectList},
  { path: '/project-form', component: ProjectForm },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;