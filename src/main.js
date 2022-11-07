import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AppLink from "@/components/AppLink.vue";
import Toaster from "@meforma/vue-toaster";

createApp(App)
  .component("AppLink", AppLink)
  .use(router)
  .use(Toaster)
  .mount("#app");
