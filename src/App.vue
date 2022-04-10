<script>
import { mapState } from 'vuex';
import './app.css'

import LoginPage from './pages/LoginPage/LoginPage.vue';
import MainPage from './pages/MainPage/MainPage.vue';

export default {
  data() {
    return {}
  },
  computed: mapState(['isLoggedIn', 'token']),
  components: {
    LoginPage,
    MainPage
  },
  beforeMount() {
    console.log("Running in:", import.meta.env)
    var token = localStorage.getItem('azurcraftToken');
    this.$store.commit('setToken', token)
    if (token != null) {
      this.$store.commit('setLogin')
    }
  }
}
</script>

<template>
  <!-- {{isLoggedIn}} -->
  <!-- {{token}} -->
  <router-view></router-view>
  <!-- <MainPage v-if="isLoggedIn" />
  <LoginPage v-else class="h-screen"/> -->
</template>

<style>
#app {
  font-family: HYZhengYuan;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
}
</style>
