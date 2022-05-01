<template>
  <nav class="navbar navbar-expand-md navbar-dark mb-4">
    <div class="container-fluid">
      <div id="admin-postify">
        <router-link
            to="/"
            class="navbar-brand"
            style="color: #4a8bb3;"
        >{{ $t("Home.Postify") }}</router-link>
      </div>
      <div id="log-reg-nav">
        <div id="navlinks">
          <div>
            <ul v-if="auth" class="navbar-nav">
              <li class="nav-item">
                <router-link
                    to="/projects"
                    class="nav-link"
                    style="color: #4a8bb3;"
                >{{ $t("nav.projects") }}</router-link>
              </li>
              <li class="nav-item">
                <router-link
                    to="/profile"
                    class="nav-link"
                    style="color: #4a8bb3;"
                >{{ $t("nav.profile") }}</router-link>
              </li>
              <li class="nav-item">
                <a
                    href="#"
                    @click="logout"
                    class="nav-link"
                    style="color: #4a8bb3;"
                >Logout</a>
              </li>
            </ul>
          </div>

          <div>
            <ul v-if="!auth" class="navbar-nav">
              <li class="nav-item">
                <router-link
                    to="/login"
                    class="nav-link"
                    style="color: #4a8bb3;"
                >{{ $t("nav.login") }}</router-link>
              </li>
              <li class="nav-item">
                <router-link
                    to="/register"
                    class="nav-link"
                    style="color: #4a8bb3;"
                >{{ $t("nav.register") }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import HomeStr from "@/i18n/en";
import router from "@/router";

export default {
  //eslint-disable-next-line
  name: "Nav",
  setup() {

    const store = useStore();

    const auth = computed(() => store.state.authenticated);

    const logout = async () => {
      await store.dispatch('setAuth', false);
      await router.push('/login');
    }
    return { auth, logout }
  },
  data() {
    return {
      str : HomeStr
    };
  }
}
</script>

<style>
#navlinks {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /*width: ;*/
}
.navbar {
  background-color: #FDE2FF;
}
.nav-item {
  padding-inline: 10px;
}
</style>
