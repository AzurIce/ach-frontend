<template>
  <div class="h-full flex flex-col justify-center p-4">
    <!-- <div className='ServerConsoleInfo'>
        <text style={{margin: '0px 10px'}} >Connection: </text>
        {this.getStatus()}
    </div> -->
    <div class="mt-1 flex justify-center items-center">
      <p class="p-2">Connection:</p>
      <div class="h-4 w-4 rounded-full" :class="getClass()"></div>
    </div>
    <pre
      id="console"
      class="
        mb-1
        bg-zinc-700
        p-2
        rounded-lg
        font-mono
        text-gray-100
        flex-1
        whitespace-pre-wrap
        break-all
        text-left
        overflow-y-auto
      "
      >{{ lines }}</pre>
    <div class="mt-1 flex justify-center items-stretch">
      <input
        class="mr-1 pl-2 border rounded-md flex-1"
        v-model="input"
        @keypress="onKeyPressed"
      />
      <button
        class="ml-1 rounded-md bg-sky-400 pt-1 pb-1 pl-2 pr-2"
        @click="onSendMessage"
      >
        发送
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "connecting",
      socket: null,
      lines: "",
      input: "",
    };
  },
  methods: {
    onKeyPressed(e) {
      if (e.keyCode == 13) {
        this.onSendMessage();
      }
      // console.log(e)
    },
    getClass() {
      if (this.status == "connecting") return "bg-orange-400";
      else if (this.status == "open") return "bg-green-400";
      else return "bg-red-400";
    },
    onSendMessage() {
      console.log("[onSendMessage]");
      if (this.input == "" || this.status !== "open") {
        console.log(this.input, this.status);
        return;
      }

      try {
        this.socket.send(this.input);
      } catch (e) {
        console.log(e);
      } finally {
        console.log("finally");
        this.input = "";
      }
    },
    connect() {
      this.socket = new WebSocket(
        "ws://" +
          window.location.hostname
            .replace("http://", "")
            .replace("https://", "") +
          ":8888/api/servers/console"
      );
      this.status = "connecting";
      this.socket.onopen = (e) => {
        console.log("WebSocket Connection established: " + e);
        this.status = "open";
        this.lines = "";
      };
      this.socket.onclose = (e) => {
        console.log("WebSocket Connection established: " + e);
        this.status = "closed";
      };

      this.socket.onmessage = (e) => {
        console.log(e);
        this.lines = this.lines + e.data;
        var el = document.getElementById("console");
        el.scrollTop = el.scrollHeight;
      };
    },
  },
  mounted() {
    this.connect();
  },
};
</script>

<style>
</style>