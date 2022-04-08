<script>
import './app.css'

import LoginPage from './pages/LoginPage/LoginPage.vue';
import MainPage from './pages/MainPage/MainPage.vue';

export default {
  data() {
    return {
      isLoggedIn: false
    }
  },
  components: {
    LoginPage,
    MainPage
  }
}
</script>

<template>
  <MainPage v-if="isLoggedIn" />
  <LoginPage v-else class="h-screen"/>
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
