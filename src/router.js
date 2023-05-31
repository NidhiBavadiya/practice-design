import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/lIP-network',
    name: 'lIP-network',
    component: () => import('@/view/lip-network/LIPNetwork.vue'),
  },
]
  const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
  })

export default router
