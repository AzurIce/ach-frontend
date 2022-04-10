import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLoggedIn: true,
      isAdmin: false,
    }
  }
})

export default store