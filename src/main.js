import Vue from 'vue'
import App from './App.vue'

import router from './router'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/scss/style.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

//vue select
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

Vue.component("v-select", vSelect);



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
