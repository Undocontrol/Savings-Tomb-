import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import UUID from 'vue-uuid';
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(UUID);
Vue.use(VModal);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
