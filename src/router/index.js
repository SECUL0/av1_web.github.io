import { createRouter, createWebHistory } from 'vue-router'
import CadastroView from '../views/CadastroView.vue'
import PersonagemView from '../views/PersonagemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cadastro',
      component: CadastroView
    },
    {
      path: '/personagem',
      name: 'personagem',
      component: PersonagemView
    },
  ]
})

export default router
