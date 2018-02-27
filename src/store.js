import Vue from 'vue'
import Vuex from 'vuex'
import { qdb, auth } from './firebase'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: null,
    questions: []
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    },
    SET_QUESTIONS (state, payload) {
      state.questions = payload
    }
  },
  actions: {
    addPost ({commit}, post) {
      let user = auth.currentUser
      qdb.add({
        title: post.title,
        content: post.content,
        uid: user.uid,
        user: user.email,
        votes: 0
      })
        .then(docRef => console.log('Your new question has been posted with id: ' + docRef.id))
        .catch(err => console.error('doc error: ', err))
    }
  }
})
