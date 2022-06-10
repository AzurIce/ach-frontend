<template>
  <div class="w-screen h-screen flex">
    <!-- Navigation -->
    <div class="bg-white w-min border-r flex-y">
      <nav-list-item to="/">
        <div class="bg-white bg-azurcraft w-10 h-10 rounded-full"></div>
      </nav-list-item>
      <nav-list-item to="/server" name="Server">
        <i class="ri-server-line "></i>
      </nav-list-item>

      <div
        class="flex flex-col justify-center items-center p-4 border-b border-l-4"
        :class="[isExactActive ? 'bg-sky-400' : 'bg-white']"
      >
        <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
        <span>Backups</span>
      </div>
      <div
        class="flex flex-col justify-center items-center p-4 border-b border-l-4"
        :class="[isExactActive ? 'bg-sky-400' : 'bg-white']"
      >
        <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
        <span>Projects</span>
      </div>

      <nav-list-item to="/console" name="Console">
        <i class="ri-terminal-box-line"></i>
      </nav-list-item>
    </div>

    <div class="flex flex-col flex-1">
      <!-- TopBar -->
      <div class="pl-4 pr-4 h-14 bg-white flex items-center">
        
        <!-- <button>
          <i class="ri-menu-line bg-white p-2 mr-2 rounded border hover:ring-2"></i>
        </button> -->
        <span>往这儿放点东西</span>
        <!-- <span>
          Server:
        </span>
        <select>
          <option>Relax</option>
        </select> -->

        <div class="flex-1"></div>

        <button class="mt-2 mb-2 rounded-full">
          <i class="ri-logout-box-line" @click="onLogout"></i>
        </button>
      </div>

      <!-- Content -->
      <div class="flex flex-col bg-background h-screen flex-1">
        <router-view></router-view>
        <!-- <Console /> -->
      </div>
    </div>
  </div>
</template>

<script>
import NavListItem from '../../components/NavListItem.vue';
export default {
    methods: {
        onLogout() {
            localStorage.setItem("azurcraftToken", "");
            this.$store.commit("setToken", "");
            this.$store.commit("unsetLogin");
            this.$router.push("/login");
        }
    },
    components: { NavListItem }
};
</script>

<style>
</style>