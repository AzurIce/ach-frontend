<template>
  <div class="w-screen h-screen flex">
    <div class="bg-white w-min border-r">
      <router-link v-slot="{href, isExactActive}" to="/">
        <div class="flex flex-col justify-center items-center p-4 border-b" :class="[isExactActive ? 'bg-sky-400' : 'bg-white']" :href="href">
          <div class="bg-white bg-azurcraft w-14 h-14 rounded-full"></div>
        </div>
      </router-link>
      <router-link v-slot="{href, isExactActive}" to="/servers">
        <div class="flex flex-col justify-center items-center p-4 border-b" :class="[isExactActive ? 'bg-sky-400' : 'bg-white']" :href="href">
          <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
          <span>Servers</span>
        </div>
      </router-link>
      <!-- <router-link v-slot="{href, isExactActive}" to="/backups"> -->
        <div class="flex flex-col justify-center items-center p-4 border-b " :class="[isExactActive ? 'bg-sky-400' : 'bg-white']" >
          <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
          <span>Backups</span>
        </div>
      <!-- </router-link> -->
      <!-- <router-link v-slot="{href, isExactActive}" to="/projects"> -->
        <div class="flex flex-col justify-center items-center p-4 border-b" :class="[isExactActive ? 'bg-sky-400' : 'bg-white']">
          <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
          <span>Projects</span>
        </div>
      <!-- </router-link> -->
      <router-link v-slot="{href, isExactActive}" to="/console">
        <div class="flex flex-col justify-center items-center p-4 border-b" :class="[isExactActive ? 'bg-sky-400' : 'bg-white']" :href="href">
          <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
          <span>Console</span>
        </div>
      </router-link>
    </div>
    <div class="bg-white h-screen flex-1">
      <router-view></router-view>
      <!-- <Console /> -->
    </div>
  </div>
</template>

<script>
import Console from "./Console/Console.vue";
export default { components: { Console } };
</script>

<style>
</style>