<template>
  <form @submit.prevent="register">
    <h1 class="h3 mb-3 fw-normal">Registration</h1>
    <input
        v-model="this.firstName"
        class="form-control"
        placeholder="Name"
        required
    >
    <input
        v-model="this.lastName"
        class="form-control"
        placeholder="Name"
        required
    >

    <input
        v-model="this.username"
        class="form-control"
        placeholder="Name"
        required
    >
    <input
        v-model="this.password"
        type="password"
        class="form-control"
        placeholder="Password"
        required
    >

    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</template>

<script>
import {createUser} from "@/client/user";

export default {
  // eslint-disable-next-line
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    }
  },
  methods: {
    async register() {


      console.log(this.firstName);
      console.log(this.lastName);
      console.log(this.username);
      console.log(this.password);

      await createUser(
          this.firstName,
          this.lastName,
          this.username,
          this.password
      )

      await this.$router.push('/login');
    }
  }



}
</script>