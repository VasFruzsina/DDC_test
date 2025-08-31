import { createWebHistory, createRouter } from 'vue-router'

import ProjectList from "../components/layouts/ProjectList.vue"
import ProjectForm from "../components/layouts/ProjectForm.vue"
import App from '../App.vue'

const routes = [
  { path: "/", component: App },
  { path: "/projects", component: ProjectList },
  { path: "/projects/new", component: ProjectForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;