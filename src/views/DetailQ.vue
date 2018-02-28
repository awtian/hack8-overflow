<template>
  <div>
    <section class="container"> 
      <div class="columns">
        <div class="column is-offset-3 is-6 is-full-mobile">          
          <h1>{{ details.title }} </h1><br />
          <span class="right">creator: {{details.user}} || votes: {{details.votes}} <button @click="voteQUp">voteup</button> <button @click="voteQDown">votedown</button></span> <br />
          <h2>Problems: </h2>
          {{ details.content }} <br/>
          <form>
          <h1>Help this guy!</h1>
          <textarea class="textarea" placeholder="add solution" v-model="answer"></textarea> <br />
          <button class="button" @click.prevent="addAnswer"> submit</button>
          </form>
          <br/>
          ANSWERS:
          {{answers}}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {qdb} from '../firebase'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      id: this.$route.params.id,
      details: {
        title: null,
        user: null,
        votes: null,
        voters: [],
      },
      answers: [],
      answer: null
    }
  },
  computed : {
    ...mapState(['user'])
  },
  created () {
    qdb.doc(this.id).onSnapshot(doc =>{
      if(doc.exists) {
        this.details = doc.data()
      } else {
      }
    })
    qdb.doc(this.id).collection('comment').onSnapshot((querySnap) => {
      querySnap.forEach((doc) => {
        this.answers.push({id: doc.id, ...doc.data()})
      })
    })
  },
  methods: {
    addAnswer () {
      qdb.doc(this.id).collection('comment').add({
        content: this.answer,
        uid: this.user.uid,
        voters: ['init'],
        votes: 0
      })
    },
    voteQUp () {
      if (this.details.voters === undefined) this.details.voters = []
      if (this.details.voters.indexOf(this.user.uid) === -1) {
        this.details.voters.push(this.user.uid)
        qdb.doc(this.id).set({
          voters: this.details.voters,
          votes: this.details.votes + 1
        }, {merge: true})
      } else {
        alert('you only can vote once')
      }
    },
    voteQDown () {
      if (this.details.voters === undefined) this.details.voters = []
      if (this.details.voters.indexOf(this.user.uid) === -1) {
        this.details.voters.push(this.user.uid)
        qdb.doc(this.id).set({
          voters: this.details.voters,
          votes: this.details.votes - 1
        }, {merge: true})
      } else {
        alert('you only can vote once')
      }
    }
  }
}
</script>

<style>
.container {
  margin-top: 40px;
}
h1 {
  font-size: 30px;
  margin-top: 10px;
}
h2 {
  font-size: 20px;
  font-weight: bold;
}
</style>
