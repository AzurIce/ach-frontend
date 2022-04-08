<script setup>
import './app.css'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import LoginPage from './pages/LoginPage/LoginPage.vue';
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <LoginPage class="h-screen"/>
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
