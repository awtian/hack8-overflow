import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import { fb } from './firebase'

Vue.prototype.$fbase = fb
Vue.config.productionTip = false
Vue.use(Buefy)

fb.auth().onAuthStateChanged(function (user) {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
