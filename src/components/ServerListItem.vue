<template>
  <div class="flex items-center mt-2">
    <!-- {{server}} -->
    <span class="mr-2">{{server.Name}}</span>
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
      if (this.Running) return "bg-green-400";
      else return "bg-red-400";
    },
  },
  data() {},
};
</script>

<style>
</style>