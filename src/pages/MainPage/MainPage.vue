<template>
  <div class="w-screen h-screen flex-y">
    <!-- TopBar -->
    <div class="h-14 bg-white flex items-center pl-2">
      
      <button>
        <i class="ri-menu-line bg-white p-2 mr-2 rounded border hover:ring-2"></i>
      </button>

      Server:
      <select>
        <option>Relax</option>
      </select>
    </div>

    <!-- Content -->
    <div class="flex">
      <div class="bg-white w-min border-r">
        <router-link v-slot="{ href, isExactActive }" to="/">
          <div
            class="flex flex-col justify-center items-center p-4 border-b"
            :class="[isExactActive ? 'bg-sky-400' : 'bg-white']"
            :href="href"
          >
            <div class="bg-white bg-azurcraft w-14 h-14 rounded-full"></div>
          </div>
        </router-link>
        <router-link v-slot="{ href, isExactActive }" to="/server">
          <div
            class="flex flex-col justify-center items-center p-4 border-b"
            :class="[isExactActive ? 'bg-sky-400' : 'bg-white']"
            :href="href"
          >
            <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
            <span>Server</span>
          </div>
        </router-link>
        <!-- <router-link v-slot="{href, isExactActive}" to="/backups"> -->
        <div
          class="flex flex-col justify-center items-center p-4 border-b"
          :class="[isExactActive ? 'bg-sky-400' : 'bg-white']"
        >
          <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
          <span>Backups</span>
        </div>
        <!-- </router-link> -->
        <!-- <router-link v-slot="{href, isExactActive}" to="/projects"> -->
        <div
          class="flex flex-col justify-center items-center p-4 border-b"
          :class="[isExactActive ? 'bg-sky-400' : 'bg-white']"
        >
          <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
          <span>Projects</span>
        </div>
        <!-- </router-link> -->
        <router-link v-slot="{ href, isExactActive }" to="/console">
          <div
            class="flex flex-col justify-center items-center p-4 border-b"
            :class="[isExactActive ? 'bg-sky-400' : 'bg-white']"
            :href="href"
          >
            <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
            <span>Console</span>
          </div>
        </router-link>
        <div
          class="flex flex-col justify-center items-center p-4 border-b"
          :class="[isExactActive ? 'bg-sky-400' : 'bg-white']"
          :href="href"
        >
          <button>
            <i class="ri-logout-box-line" @click="onLogout"></i>
          </button>
        </div>
      </div>
      <div class="bg-background h-screen flex-1">
        <router-view></router-view>
        <!-- <Console /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onLogout() {
      localStorage.setItem('azurcraftToken', "")
      this.$store.commit('setToken', "")
      this.$store.commit('unsetLogin')
      this.$router.push("/login")
    }
  },
};
</script>

<style>
</style>