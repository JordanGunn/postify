import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import {createI18n} from "vue-i18n";
import en from "./i18n/en";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap-icons"

const i18n = createI18n({
    locale: "en",
    messages: { en }
});

createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .mount('#app')
