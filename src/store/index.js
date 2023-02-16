import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      token: localStorage.getItem("token") || "",
      user: {
        id: localStorage.getItem("id") || 0,
        uuid: localStorage.getItem("uuid") || "",
        username: localStorage.getItem("username") || "",
        player_name: localStorage.getItem("player_name") || "",
        is_admin: localStorage.getItem("is_admin") || false,
      },
      isLoggedIn: localStorage.getItem("isLoggedIn") || false,
      // isAdmin: false,
      serverList: localStorage.getItem("serverList") || [],
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("id", user.id);
      localStorage.setItem("uuid", user.uuid);
      localStorage.setItem("username", user.username);
      localStorage.setItem("player_name", user.player_name);
      localStorage.setItem("is_admin", user.is_admin);
    },
    setLogin(state) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true)
    },
    unsetLogin(state) {
      state.isLoggedIn = false;
      state.user = {}
      localStorage.setItem("isLoggedIn", false)
      localStorage.setItem("user", {})
    },
    // setAdmin(state, isAdmin) {
    //   state.isAdmin = isAdmin;
    // },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token)
    },
    setServerList(state, list) {
      state.serverList = list
    }
  }
})

export default store