import { createWebHistory, createRouter } from 'vue-router'

import ProjectList from "../components/layouts/ProjectList.vue"
import ProjectForm from "../components/layouts/ProjectForm.vue"
import Home from "../components/layouts/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: ProjectList },
  { path: "/projects/new", component: ProjectForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;