<template>
  <!-- <div>
    asd
  </div> -->
  <router-link v-slot="{ href, isExactActive }" :to="to">
    <div
      class="flex flex-col justify-center items-center p-4 border-b border-l-4"
      :class="[isExactActive ? 'bg-sky-400 bg-opacity-10 border-l-sky-400' : 'bg-white']"
      :href="href"
    >
      <span class="flex justify-center items-center h-10 w-10">
        <slot>
        </slot>
      </span>
      <!-- <div class="bg-slate-300 w-10 h-10 rounded-full"></div> -->
      <span>{{name}}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NavListItem",
  props: {
    to: String,
    name: String,
  }
};
</script>

<style>
</style>