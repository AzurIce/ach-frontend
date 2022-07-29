import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      token: "",
      userName: "",
      isLoggedIn: false,
      isAdmin: false,
      serverList: [],
    }
  },
  mutations: {
    setUserName(state, userName) {
      state.userName = userName;
    },
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