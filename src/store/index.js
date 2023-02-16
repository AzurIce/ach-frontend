import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      token: "",
      user: {},
      isLoggedIn: false,
      // isAdmin: false,
      serverList: [],
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLogin(state) {
      state.isLoggedIn = true;
    },
    unsetLogin(state) {
      state.isLoggedIn = false;
      state.user = {}
    },
    // setAdmin(state, isAdmin) {
    //   state.isAdmin = isAdmin;
    // },
    setToken(state, token) {
      state.token = token;
    },
    setServerList(state, list) {
      state.serverList = list
    }
  }
})

export default store