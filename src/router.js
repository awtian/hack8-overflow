import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Blank from './views/Blank.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import DetailQ from './views/DetailQ.vue'
import SignUp from './views/SignUp.vue'
import firebase from 'firebase'
import store from './store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/home',
      component: Blank,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: ':id',
          props: {default: true},
          name: 'detail',
          component: DetailQ
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (currentUser) store.commit('SET_USER', {email: currentUser.email, uid: currentUser.uid})

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router
