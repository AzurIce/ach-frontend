<script setup>
import { onMounted, ref } from 'vue';

import UserListItem from './UserListItem.vue';
import { registerByCode, getUserList } from '../../../lib/api/user.js'

const userList = ref([{
  uuid: "asdfg-asdfg-asdfg-asdfg-asdfg",
  player_name: "PlayerName1",
  username: "UserName1",
  is_admin: true
},
{
  uuid: "asdfg-asdfg-asdfg-asdfg-asdfg",
  player_name: "PlayerName2",
  username: "UserName2",
  is_admin: false
},
{
  uuid: "asdfg-asdfg-asdfg-asdfg-asdfg",
  player_name: "PlayerName2",
  username: "UserName2",
  is_admin: false
},
{
  uuid: "asdfg-asdfg-asdfg-asdfg-asdfg",
  player_name: "PlayerName2",
  username: "UserName2",
  is_admin: false
},
{
  uuid: "asdfg-asdfg-asdfg-asdfg-asdfg",
  player_name: "PlayerName2",
  username: "UserName2",
  is_admin: false
},
{
  uuid: "asdfg-asdfg-asdfg-asdfg-asdfg",
  player_name: "PlayerName2",
  username: "UserName2",
  is_admin: false
},
{
  uuid: "asdfg-asdfg-asdfg-asdfg-asdfg",
  player_name: "PlayerName2",
  username: "UserName2",
  is_admin: false
},
{
  uuid: "asdfg-asdfg-asdfg-asdfg-asdfg",
  player_name: "PlayerName2",
  username: "UserName2",
  is_admin: false
},
{
  uuid: "asdfg-asdfg-asdfg-asdfg-asdfg",
  player_name: "PlayerName2",
  username: "UserName2",
  is_admin: false
},
{
  uuid: "asdfg-asdfg-asdfg-asdfg-asdfg",
  player_name: "PlayerName2",
  username: "UserName2",
  is_admin: false
},
{
  uuid: "asdfg-asdfg-asdfg-asdfg-asdfg",
  player_name: "PlayerName2",
  username: "UserName2",
  is_admin: false
},
{
  uuid: "asdfg-asdfg-asdfg-asdfg-asdfg",
  player_name: "PlayerName2",
  username: "UserName2",
  is_admin: false
}])

onMounted(updateUserList)

const registerCode = ref("")

async function updateUserList() {
  var res = await getUserList()
  res = res.data
  console.log(res.data)
  userList.value = res.data
}

function onRegisterUser() {
  registerByCode(registerCode.value)
}

function onJumpToLogin() {
  var screenW = window.screen.availWidth;
  var screenH = window.screen.availHeight;

  console.log("[LoginPage]: onJumpToLogin");
  window.open(
    "https://login.live.com/oauth20_authorize.srf?client_id=00000000402b5328&response_type=code&scope=XboxLive.signin%20offline_access&redirect_uri=https%3A%2F%2Flogin.live.com%2Foauth20_desktop.srf",
    "Microsoft 登录",
    "left=" +
    (screenW - 600) / 2 +
    ",top=" +
    (screenH - 500) / 2 +
    ",width=600,height=500"
  );
}
</script>

<template>
  <input type="checkbox" id="register-modal" class="modal-toggle" />
  <label for="register-modal" class="modal cursor-default">
    <label class="modal-box">
      <h3 class="text-lg font-bold">Register a User</h3>
      <div class="flex items-baseline">
        <p class="py-4">Enter the microsoft code</p>
        <button class="ml-2 w-8 h-8 pt-1 rounded-full bg-sky-400" @click="onJumpToLogin">
          <i class="ri-share-box-line" style="color: white"></i>
        </button>
      </div>
      <input type="text" placeholder="Type here" class="input input-bordered w-full" v-model="registerCode" />
      <div class="modal-action">
        <label class="btn btn-primary" @click="onRegisterUser">Submit</label>
        <label for="register-modal" class="btn">Cancel</label>
      </div>
    </label>
  </label>


  <div class="flex-1 bg-white rounded-lg m-4 p-4 shadow h-0 flex flex-col">
    <div class="mb-2">
      <label class="btn mr-2 bg-gray-400 border-gray-400 hover:bg-gray-500 hover:border-gray-500" @click="updateUserList">Refresh</label>
      <label for="register-modal" class="btn modal-button">Register User</label>
    </div>
    <div class="overflow-x-auto w-full flex-1 overflow-y-auto">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <!-- <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th> -->
            <th>PlayerInfo</th>
            <th>UserName</th>
            <th>IsAdmin</th>
            <th>Operations</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <UserListItem v-for="user in userList"
          :key="user.uuid"
          :uuid="user.uuid"
          :playerName="user.player_name"
          :username="user.username"
          :isAdmin="user.is_admin"
          />
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr>
            <!-- <th></th> -->
            <th>PlayerInfo</th>
            <th>Username</th>
            <th>IsAdmin</th>
            <th>Operations</th>
            <th></th>
          </tr>
        </tfoot>

      </table>
    </div>
  </div>
</template>