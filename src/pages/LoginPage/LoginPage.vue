<template>
  <div
    class="
      w-screen
      h-screen
      flex flex-col
      justify-center
      items-center
      bg-azurcraft bg-no-repeat bg-center
    "
  >
    <div
      class="
        flex flex-col
        items-center
        min-w-450
        w-2/5
        h-fit
        top-1/2
        p-4
        rounded-lg
        bg-white bg-opacity-90
        shadow-md
        space-y-2
      "
    >
      <div
        class="
          flex
          justify-center
          items-center
          space-x-2
          border
          w-min
          p-1
          rounded-full
        "
      >
        <button
          class="w-10 h-10 rounded-full pt-1"
          :class="[loginTab == 0 ? 'bg-sky-400' : 'bg-gray-100']"
          @click="onChooseTab(0)"
        >
          <i
            class="ri-microsoft-fill"
            :style="[loginTab == 0 ? 'color: white' : '']"
          ></i>
        </button>
        <button
          class="w-10 h-10 rounded-full pt-1"
          :class="[loginTab == 1 ? 'bg-sky-400' : 'bg-gray-100']"
          @click="onChooseTab(1)"
        >
          <i
            class="ri-account-circle-fill"
            :style="[loginTab == 1 ? 'color: white' : '']"
          ></i>
          <!-- <i v-else class="ri-account-circle-line"></i> -->
        </button>
      </div>

      <!-- Microsoft 账号验证登录 -->
      <p class="text-md indent-8 break-all bg-gray-100 rounded-md p-1 shadow">
        初次登录请使用微软账号验证方式，登陆完成后即可设置用户名及密码（此功能尚在开发中）。
      </p>
      <div v-if="loginTab == 0" class="flex flex-col space-y-2 w-full">
        <div class="min-w-max w-full flex space-x-2">
          <p class="text-2xl flex-1">Minecraft 微软账号验证</p>
          <button
            class="ml-1 w-8 h-8 pt-1 rounded-full bg-sky-400"
            @click="onJumpToLogin"
          >
            <i class="ri-share-box-line" style="color: white"></i>
          </button>
        </div>
        <p class="text-md indent-8 break-all">
          在新打开的窗口中登录你的 Microsoft
          账户，待登陆成功后复制地址栏中“code=”后面的内容（到“&”或结尾结束）到这里点击提交。
        </p>

        <p class="text-md break-all">例：</p>
        <p class="bg-slate-600 rounded-md pl-2 pr-2 text-slate-100 font-mono">
          https://xxx?code=M.R3_BAY.c3b01707-0687-99e2-ac93-d63ce78091ab&lc=2052
        </p>
        <p class="text-md break-all">只复制：</p>
        <pre class="bg-slate-600 rounded-md pl-2 pr-2 text-slate-100 font-mono">
M.R3_BAY.c3b01707-0687-99e2-ac93-d63ce78091ab</pre
        >

        <div class="flex justify-center space-x-2">
          <input class="flex-1 pl-2 border rounded-md" v-model="code" />
          <button
            class="pl-2 pr-2 pt-1 pb-1 bg-sky-400 rounded-md text-white"
            @click="onLoginWithCode"
          >
            提交
          </button>
        </div>
      </div>

      <!-- 账号密码登录 -->
      <div v-else class="flex flex-col space-y-2 w-full">
        <p class="mb-1 text-2xl mr-1 flex-1">账号密码登录</p>
        <div class="flex space-x-2">
          <div class="flex flex-col space-y-2 min-w-max">
            <text>用户名</text>
            <text>密码</text>
          </div>
          <div class="flex-1 flex flex-col space-y-2">
            <input class="pl-2 pr-2 border rounded-md" v-model="username" />
            <input
              type="password"
              class="pl-2 pr-2 border rounded-md"
              v-model="password"
            />
          </div>
        </div>
        <button
          class="pl-2 pr-2 pt-1 pb-1 bg-sky-400 rounded-md text-white"
          @click="onLoginWithAccount"
        >
          提交
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { loginByCode, loginByAccount } from "/src/lib/api/user.js";

export default {
  data() {
    return {
      loginTab: 0,
      code: "",
      username: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    onLoggedIn(token, userName) {
      this.$store.commit("setToken", token);
      this.$store.commit("setLogin");
      this.$store.commit("setUserName", userName);
      localStorage.setItem("azurcraftToken", token);
      this.$router.push("/");
    },
    onLoginWithCode() {
      if (this.code == "") {
        // TODO: code不能为空
        return;
      }
      loginByCode(this.code)
        .then((res) => {
          console.log(res);
          var obj = JSON.parse(res.data)
          this.onLoggedIn(obj.token, obj.user_name)
        })
        .catch((err) => {
          console.log(err, err.response);
          var errorString = JSON.parse(err.response.data).error;
          // TODO: toast
          console.log(errorString);
        });
      console.log(this.code);
    },
    onLoginWithAccount() {
      if (this.username == "") {
        // TODO: 用户名不能为空
        return;
      }
      loginByAccount(this.username, this.password)
        .then((res) => {
          console.log(res);
          var obj = JSON.parse(res.data)
          this.onLoggedIn(obj.token, obj.user_name)
        })
        .catch((err) => {
          console.log(err, err.response);
          // TODO: toast
          var errorString = JSON.parse(err.response.data).error;
          console.log(errorString);
        });
      console.log(this.username, this.password);
    },
    onChooseTab(i) {
      this.loginTab = i;
    },
    onJumpToLogin() {
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
    },
  },
};
</script>

<style>
</style>