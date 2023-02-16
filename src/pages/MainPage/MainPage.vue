<template>
  <!-- {{user}} -->
  <div class="w-screen h-screen flex">
    <!-- Navigation -->
    <div class="bg-white w-min border-r flex flex-col">

      <nav-list-item to="/">
        <div class="bg-white bg-azurcraft w-10 h-10 rounded-full"></div>
      </nav-list-item>

      <!-- <ul class="menu bg-base-100 p-2 rounded-box">
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </a>
          </li>
        </ul> -->

      <nav-list-item to="/server" name="Server">
        <i class="ri-server-line "></i>
      </nav-list-item>

      <!-- <div class="flex flex-col justify-center items-center p-4 border-b border-l-4"
        :class="[isExactActive ? 'bg-sky-400' : 'bg-white']">
        <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
        <span>Backups</span>
      </div>
      <div class="flex flex-col justify-center items-center p-4 border-b border-l-4"
        :class="[isExactActive ? 'bg-sky-400' : 'bg-white']">
        <div class="bg-slate-300 w-10 h-10 rounded-full"></div>
        <span>Projects</span>
      </div> -->

      <nav-list-item to="/console" name="Console">
        <i class="ri-terminal-box-line"></i>
      </nav-list-item>
    </div>

    <div class="flex-1 flex flex-col h-screen overflow-hidden">
      <!-- TopBar -->
      <div class="pl-4 pr-4 h-14 bg-white flex items-center">

        <!-- <button>
            <i class="ri-menu-line bg-white p-2 mr-2 rounded border hover:ring-2"></i>
          </button> -->
        <button class="mt-2 mb-2 btn btn-ghost normal-case text-lg" @click="this.$router.push('/')">
          AzurCraftHelper
        </button>

        <div class="flex-1"></div>


        <div class="dropdown">
          <div tabindex="0" class="m-1 btn btn-ghost flex items-center">
            <div v-if="user.is_admin" class="badge badge-primary">Admin</div>
            <div v-else class="badge">User</div>
            <div class="ml-2">{{ user.player_name }}</div>
          </div>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48">
            <li v-if="user.is_admin" class="text-purple-600" @click="onNavToManage"><a>Manage</a></li>
            <li><a>Account Settings</a></li>
          </ul>
        </div>

        <button class="mt-2 mb-2 btn btn-ghost">
          <i class="ri-logout-box-line" @click="onLogout"></i>
        </button>
      </div>

      <!-- Content -->
      <div class="h-0 flex-1 flex flex-col bg-background">
        <router-view></router-view>
        <!-- <Console /> -->
      </div>
    </div>
</div>
</template>

<script>
import NavListItem from '../../components/NavListItem.vue';
import { mapState } from 'vuex';
export default {
  methods: {
    onLogout() {
      console.log("onLogout")
      localStorage.setItem("ACHToken", "");
      this.$store.commit("setToken", "");
      this.$store.commit("unsetLogin");
      this.$router.push("/login");
    },
    onNavToManage() {
      this.$router.push('/manage')
    }
  },
  components: { NavListItem },
  computed: mapState(['user'])
};
</script>

<style></style>