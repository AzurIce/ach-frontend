import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      token: "",
      isLoggedIn: false,
      isAdmin: false,
      serverList: [],
    }
  },
  mutations: {
    setLogin(state) {
      state.isLoggedIn = true;
    },
    unsetLogin(state) {
      state.isLoggedIn = false;
    },
    setAdmin(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
    setToken(state, token) {
      state.token = token;
    },
    setServerList(state, list) {
      state.serverList = list
    }
  }
})

export default store