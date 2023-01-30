<template>
  <tr>
    <!-- <th>
      <label>
        <input type="checkbox" class="checkbox" />
      </label>
    </th> -->
    <td>
      <div class="font-bold">{{ playerName }}</div>
      <span class="badge badge-ghost badge-sm">{{ playerUUID }}</span>
    </td>
    <td>
      <div class="flex items-center space-x-3">
        <div>
          <div class="font-bold">{{ userName }}</div>
          <!-- <div class="text-sm opacity-50"></div> -->
        </div>
      </div>
    </td>
    <th>
      <div v-if="isAdmin" class="badge badge-primary">Admin</div>
      <div v-else class="badge">User</div>
    </th>
    <th>
      <button class="btn btn-ghost btn-xs">Remove</button>
    </th>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['playerUUID', 'playerName', 'userName', 'isAdmin'])
</script>

<style scoped>
</style>