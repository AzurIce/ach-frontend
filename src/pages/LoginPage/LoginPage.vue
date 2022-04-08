<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <div class="flex flex-col min-w-min w-2/5 h-fit top-1/2 p-4 rounded-lg bg-white shadow-md">
      <div class="mt-1 min-w-max flex">
        <p class="mb-1 text-2xl mr-1">Minecraft 微软账号验证</p>
        <button class="ml-1 w-8 h-8 rounded-full bg-sky-400">→</button>
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

}
</script>

<style>

</style>