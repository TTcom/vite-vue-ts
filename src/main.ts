import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";
import { setupAntd } from "./common/antcomponents";

const app = createApp(App);
setupAntd(app);
app.use(router).mount("#app");
