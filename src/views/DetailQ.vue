<template>
  <div>
    <section class="container"> 
      <div class="columns">
        <div class="column is-offset-3 is-6 is-full-mobile">          
          <h1>{{ details.title }} </h1><br />
          <span class="right">creator: {{details.user}} || votes: {{details.votes}} <button>voteup</button> <button>votedown</button></span> <br />
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
        voters: null,
      },
      answers: [],
      answer: null
    }
  },
  computed : {
    ...mapState(['user'])
  },
  created () {
    qdb.doc(this.id).get().then(doc =>{
      if(doc.exists) {
        // console.log("data:", doc.data())
        this.details = doc.data()
      } else {
        // console.log("failed")
      }
    })
    qdb.doc(this.id).collection('comment').onSnapshot((querySnap) => {
      querySnap.forEach((doc) => {
        this.answers.push({id: doc.id, ...doc.data()})
        // console.log(doc.id, "=>", doc.data())
      })
    })
  },
  methods: {
    addAnswer () {
      qdb.doc(this.id).collection('comment').add({
        content: this.answer,
        uid: this.user.uid,
        voters: [],
        votes: 0
      })
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
