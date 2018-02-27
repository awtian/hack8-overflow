<template>
  <div>
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/home" class="navbar-item">
            Stawt Overflow
          </router-link>
          <!-- <div class="navbar-burger burger" data-target="topNav">
            <span></span>
            <span></span>
            <span></span>
          </div> -->
        </div>

        <div id="topNav" class="navbar-menu is-active">
          <!-- <div class="navbar-start">
            <router-link to="/" class="navbar-item">
              Home
            </router-link>
            <router-link to="/about" class="navbar-item">
              About
            </router-link>
          </div> -->

          <div class="navbar-start">
            <div class="navbar-item">
              <div class="field is-grouped" v-if="user == null">
                <p class="control">
                  <router-link to="/signup">
                    <a class="button is-small">
                      <span class="icon">
                        <i class="fa fa-user-plus"></i>
                      </span>
                      <span>
                        Sign Up!
                      </span>
                    </a>
                  </router-link>
                </p>
                <p class="control">
                  <router-link to="/login">
                    <a class="button is-small is-info is-outlined">
                      <span class="icon">
                        <i class="fa fa-user"></i>
                      </span>
                      <span>
                        Login
                      </span>
                    </a>
                  </router-link>
                </p>
              </div>
              <div class="field is-grouped" v-else>
                <p class="control">
                  <a @click="logout" class="button is-small is-info is-outlined">
                    <span class="icon">
                      <i class="fa fa-sign-out"></i>
                    </span>
                    <span>Logout</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapState(['user'])
  },
  methods: {
    logout () {
      this.$fbase.auth().signOut().then(() => {
        this.$store.commit('SET_USER', null)
        this.$router.replace('login')
      }
      )
    }
  }
}
</script>

<style>
</style>
