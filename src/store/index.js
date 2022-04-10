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
    setAdmin(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
    setToken(state, token) {
      state.token = token;
    }
  }
})

export default store