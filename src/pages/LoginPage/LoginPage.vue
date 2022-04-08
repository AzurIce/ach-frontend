<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <div class="flex flex-col min-w-min w-2/5 h-fit top-1/2 p-4 rounded-lg bg-white shadow-md">
      <div class="mt-1 min-w-max flex">
        <p class="mb-1 text-2xl mr-1 flex-1">Minecraft 微软账号验证</p>
        <button class="ml-1 w-8 h-8 rounded-full bg-sky-400"
          @click="onJumpToLogin">→</button>
      </div>
      <p class="mt-1 mb-1 text-md indent-8">在新打开的窗口中登录你的 Microsoft 账户，待登陆成功后复制地址栏中 "code=" 后面的内容到这里点击提交</p>
      <div class="mt-1 flex justify-center">
        <input class="flex-1 ml-2 mr-2 pl-2 border rounded-md"/>
        <button class="pl-2 pr-2 pt-1 pb-1 bg-sky-400 rounded-md">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onJumpToLogin(e) {
      var screenW = window.screen.availWidth
      var screenH = window.screen.availHeight

      console.log("[LoginPage]: onJumpToLogin")
      window.open(
        "https://login.live.com/oauth20_authorize.srf?client_id=00000000402b5328&response_type=code&scope=XboxLive.signin%20offline_access&redirect_uri=https%3A%2F%2Flogin.live.com%2Foauth20_desktop.srf",
        "Microsoft 登录",
        "left="+(screenW - 600)/2+",top="+(screenH-500)/2+",width=600,height=500"
      )
    },
    onSubmitCode(e) {
      console.log("[LoginPage]: onSubmitCode")
      // TODO: Send request to backend to get a JWT Code
    }
  }
}
</script>

<style>

</style>