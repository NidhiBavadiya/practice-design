import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'my-account',
    component: () => import('@/view/MyAccount.vue'),
  },]