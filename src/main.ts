import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import FontAwesomeIcon from "./utilities/fontawesome-icons";

const app = createApp(App)

app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);
app.mount("#app");