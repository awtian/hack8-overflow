<template>
 <div class="login">
   <h3>Login</h3>
    <input type="text" placeholder="email"> <br />
    <input type="password" placeholder="pass"> <br />
    <button @click="login" class="button">Lesgo</button>
   <p>You don't have an account? <router-link to="/signup"> Create one! </router-link></p>
 </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {
    login () {
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin:10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p{
  margin-top: 10px;
}
</style>
