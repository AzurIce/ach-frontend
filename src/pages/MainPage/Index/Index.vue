<template>
  <div class="flex-1 bg-white rounded-lg m-4 p-4 shadow">
    <article class="prose ">
      <h1>AzurCraftHelper</h1>
      <p>咕咕咕咕咕咕在写了在写了</p>
      <p>Waibiwaibi</p>
    </article>
  </div>
  <div class="flex">
    <PlayerList></PlayerList>
    <ServerList></ServerList>
  </div>
</template>

<script>
import PlayerList from '../../../components/PlayerList.vue'
import ServerList from '../../../components/ServerList.vue'
export default {
  components: { PlayerList, ServerList }
}
</script>

<style>

</style>