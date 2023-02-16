<template>
  <div class="flex items-center mt-2">
    <!-- {{server}} -->
    <span class="mr-2">{{server.name}}</span>
    <div class="h-4 w-4 rounded-full" :class="getClass()"></div>
  </div>
</template>

<script>
export default {
  name: "ServerListItem",
  props: {
    server: Object,
  },
  methods: {
    getClass() {
      if (this.server.running) return "bg-green-400";
      else return "bg-red-400";
    },
  },
  data() {
    return {}
  },
};
</script>

<style>
</style>