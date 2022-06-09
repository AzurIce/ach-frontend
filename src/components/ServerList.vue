<template>
  <div class="m-2 p-2 w-min flex-y bg-white border rounded">
    <div class="border-b">ServerList</div>
    <ServerListItem v-for="server in serverList" :key="server.Name" :server="server"/>
  </div>
</template>

<script>
import { getServerList } from '../lib/api/server';
import ServerListItem from './ServerListItem.vue';

export default {
    name: "ServerList",
    data() {
        return {
            serverList: [],
        };
    },
    methods: {
        updateServerList() {
            getServerList().then((res) => {
                console.log(res);
                this.serverList = JSON.parse(res.data)
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