<template>
 <div class="login">
   <h3>Login</h3>
    <input type="text" placeholder="email" v-model="email"> <br />
    <input type="password" placeholder="pass" v-model="password"> <br />
    <button @click="login" class="button">Lesgo</button>
   <p>You don't have an account? <router-link to="/signup"> Create one! </router-link></p>
 </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login () {
      this.$fbase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$store.commit('SET_USER', user)
          this.$router.replace('home')
        },
        (err) => {
          alert('Whoops. ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 40px;
  text-align: center !important;
}
input {
  margin:10px 0;
  width: 200px;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 100px;
  cursor: pointer;
}
p{
  margin-top: 10px;
}
</style>
