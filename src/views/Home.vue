<template>
  <div class="home">
    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <a @click="togglePost" class="button is-primary is-block is-alt is-large">New Post</a>
          <aside class="menu">
            <p class="menu-label">
              Sort Questions
            </p>
            <ul class="menu-list">
              <li>
                <a>New Questions</a>
              </li>
              <li>
                <a>Top Rated</a>
              </li>
              <li>
                <a>Hot</a>
              </li>
              <li>
                <a>Hehe</a>
              </li>
            </ul>
          </aside>

        </div>

        <div class="column is-9">
          <div class="box content" v-for="q in questions" :key="q._postid">
            <article class="post">
              <router-link :to="'home/'+q._postid"><h4>{{q.title}}</h4></router-link>
              <div class="media">
              {{ q.content.slice(0,43) }} ...
                <!-- <div class="media-left">
                  {{ q.content.slice(0,43) }} ...
                </div> -->
                <div class="media-right">
                  <div class="content">
                    <p>
                      <span class="tag">Votes: {{q.votes}}</span>
                    </p>
                  </div>
                </div>
                <!-- <div class="media-right">
                  <span class="has-text-grey-light">
                    <i class="fa fa-comments"></i> 1</span>
                </div> -->
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

  <NewQ :class="{'is-active': postModal}" @done="togglePost" @post="addPost"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NewQ from '@/components/NewQ.vue'
import { mapActions, mapState } from 'vuex'
import { qdb } from '../firebase'

export default {
  name: 'home',
  components: {
    HelloWorld,
    NewQ
  },
  computed: {
    ...mapState([
      'questions'
    ])
  },
  created () {
    qdb.onSnapshot((querySnapshot) => {
      var posts = [];
      querySnapshot.forEach(function(doc) {
        posts.push({...doc.data(), _postid: doc.id})
      })
      this.$store.commit('SET_QUESTIONS', posts)
    })
  },
  data () {
    return {
      postModal: false
    }
  },
  methods: {
    ...mapActions([
      'addPost'
    ]),
    togglePost () {
      this.postModal = !this.postModal
    }
  }
}
</script>

<style scoped>
html,
body {
  font-family: 'Open Sans', serif;
  background: #F2F6FA;
}

footer {
  background-color: #F2F6FA !important;
}

.topNav {
  border-top: 5px solid #3498DB;
}

.topNav .container {
  border-bottom: 1px solid #E6EAEE;
}

.container .columns {
  margin: 3rem 0;
}

.navbar-menu .navbar-item {
  padding: 0 2rem;
}

aside.menu {
  padding-top: 3rem;
}

aside.menu .menu-list {
  line-height: 1.5;
}

aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}

.button.is-primary.is-alt {
  background: #ffae00;
  background: -webkit-linear-gradient(to bottom, #ff8800, #ffae00);
  background: linear-gradient(to bottom, #ff8800, #ffae00);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}

.media-left img {
  border-radius: 50%;
}

.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8F99A3;
}

article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #E6EAEE;
}

article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
</style>
