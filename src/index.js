// Components
import "./components/loader.js";

// Views
import "./views/index.js";

// Localization
// Warning: uses JSON modules - works only in Chromium browsers or by using a bundler
import "./locales/index.js";

// Enable Vite HMR
if (import.meta.hot) import.meta.hot.accept();
