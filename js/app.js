import router from "./routes.js";
import mockServer from "./api/cinema.mock.server.js";
import theme from "./lib/theme-switcher.js";

router.start();

mockServer();

function initializeTheme() {
  theme();
}
document.addEventListener("DOMContentLoaded", initializeTheme);
