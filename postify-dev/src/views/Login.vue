<template>
  <form id="login" @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="form-floating">
      <input
          v-model="username"
          type="text"
          class="form-control"
          placeholder="Username"
          required
      >
    </div>
    <div class="form-floating">
      <input
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
      >
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</template>

<script>
import store from "@/store/index"
import {userLogin} from "@/client/user";
import router from "@/router";

export default {
  // eslint-disable-next-line
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    async submit() {
      const response = await userLogin(this.username, this.password);

      await store.dispatch('setAuth', (
          (response == "Valid login")
      ));
      await router.push("/");
    }
  }
}
</script>