<template>
  <div class="sign-up">
    <p>Let's create a new account!</p>
    <input type="email" placeholder="email"> <br />
    <input type="password" placeholder="password"><br />
    <button class="button">Sign Up</button>
    <span><router-link to="/login"> go back to login</router-link></span>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.signUp {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 10px;
  width: 20%;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 18;
}

</style>
