<template>
  <div class="sign-up">
    <p>Let's create a new account!</p>
    <input type="email" placeholder="email" v-model="email"> <br />
    <input type="password" placeholder="password" v-model="password"><br />
    <button @click="signUp" class="button">Sign Up</button>
    <span><router-link to="/login"> go back to login</router-link></span>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    signUp () {
      this.$fbase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            this.$store.commit('SET_USER', user)
            this.$router.replace('home')
          }, (err) => {
            alert('Whooops ' + err.message)
          }
        )
    }
  }
}
</script>

<style scoped>
.sign-up {
  margin-top: 40px;
  text-align: center !important;
}
input {
  margin: 10px 0;
  width: 200px;
  padding: 15px;
}
button {
  margin-top: 10px;
  width: 100px;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 18;
}

</style>
