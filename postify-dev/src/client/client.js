import axios from "axios";
import store from "../store/index";
import appConfig from "../../appConfig";


const http = axios.create({
  baseURL: appConfig.URL_BASE,
  headers: {
    "Content-Type": "application/json",
  }
});


http.interceptors.request.use(
  config => {
    let token = store.state.accessToken || "";
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["accept"] = `application/json`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


http.interceptors.response.use(
  response => {
    return response.data;
  },
  async error => {
    if (error.response) {

      if (error.response.status === 400) {
        alert("No such resource available!");

      } else if (error.response.status === 401) {
        alert("Unauthorized access!");
        await store.dispatch('setAuth', false);
        await this.$router.push('/login');

      } else if (error.response.status === 500) {
        alert(
          error.response.data.error || "Internal Server Error"
        );
      }
    }
    return Promise.reject(error);
  }
);

export default http;
