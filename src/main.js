import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAqwaUrW-NbCLY1_WiYvR-_fKHpZvjPJ04',
  authDomain: 'hacktiv8-195202.firebaseapp.com',
  databaseURL: 'https://hacktiv8-195202.firebaseio.com',
  projectId: 'hacktiv8-195202',
  storageBucket: 'hacktiv8-195202.appspot.com',
  messagingSenderId: '95002214418'
};
firebase.initializeApp(config)

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
