<template>
  <div class="m-4 p-4 w-auto flex-y bg-white rounded-lg shadow">
    <div class="border-b">ServerList</div>
    <ServerListItem v-for="server in serverList" :key="server.name" :server="server"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getServerList } from '../lib/api/server';
import ServerListItem from './ServerListItem.vue';

export default {
    name: "ServerList",
    data() {
        return {}
    },
    computed: mapState(['serverList']),
    methods: {
        updateServerList() {
            getServerList().then((res) => {
                console.log(res);
                res = res.data
                // this.serverList = JSON.parse(res.data)
                this.$store.commit("setServerList", res.data)
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