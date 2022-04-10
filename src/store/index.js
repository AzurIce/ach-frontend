import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      token: "",
      isLoggedIn: false,
      isAdmin: false,
    }
  },
  mutations: {
    setLogin(state) {
      state.isLoggedIn = true;
    },
    unsetLogin(state) {
      state.isLoggedIn = false;
    },
    setAdmin(state) {
      state.isAdmin = false;
    },
    unsetAdmin(state) {
      state.isAdmin = false;
    },
    setToken(state, token) {
      state.token = token;
    }
  }
})

export default store