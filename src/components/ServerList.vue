<template>
  <div class="m-4 p-4 w-fit flex-y bg-white rounded-lg shadow">
    <div class="border-b">ServerList</div>
    <ServerListItem v-for="server in serverList" :key="server.Name" :server="server"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getServerList } from '../lib/api/server';
import ServerListItem from './ServerListItem.vue';

export default {
    name: "ServerList",
    computed: mapState(['serverList']),
    methods: {
        updateServerList() {
            getServerList().then((res) => {
                console.log(res);
                // this.serverList = JSON.parse(res.data)
                this.$store.commit("setServerList", JSON.parse(res.data))
            });
        },
    },
    mounted() {
        this.updateServerList();
    },
    components: { ServerListItem }
};
</script>

<style>
</style>