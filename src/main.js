import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import Notifications from 'vue-notification'

Vue.use(Notifications)



Vue.config.productionTip = false

import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
