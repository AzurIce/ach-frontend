<template>
  <div class="w-screen h-screen flex">
    <div class="bg-white w-min border-r">
      <div class="flex flex-col justify-center items-center p-4 border-b">
        <div class="bg-slate-300 w-14 h-14 rounded-full"></div>
      </div>
      <div class="flex flex-col justify-center items-center m-4 border-b">
        <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
        <span>Backups</span>
      </div>
      <div class="flex flex-col justify-center items-center m-4 border-b">
        <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
        <span>Projects</span>
      </div>
      <div class="flex flex-col justify-center items-center m-4 border-b">
        <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
        <span>Console</span>
      </div>
    </div>
    <div class="bg-white h-screen flex-1">
      <ConsoleView />
    </div>
  </div>
</template>

<script>
import ConsoleView from "../../components/ConsoleView.vue";
export default { components: { ConsoleView } };
</script>

<style>
</style>