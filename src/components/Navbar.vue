<template>
  <div>
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            Stawt Overflow
          </router-link>
          <div class="navbar-burger burger" data-target="topNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="topNav" class="navbar-menu">
          <div class="navbar-start">
            <!-- <router-link to="/" class="navbar-item">
              Home
            </router-link> -->
            <router-link to="/about" class="navbar-item">
              About
            </router-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-small">
                    <span class="icon">
                      <i class="fa fa-user-plus"></i>
                    </span>
                    <span>
                      <router-link to="/signup"> Sign Up! </router-link>
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-small is-info is-outlined">
                    <span class="icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <span>
                    <router-link to="/login"> Login </router-link>
                    </span>
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
  export default {
    name: 'Navbar'
  }
</script>

<style>
</style>