import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import "./i18";
import { store } from "@/store";

// Import Swiper styles
import "swiper/css";

// Import AOS

import "aos/dist/aos.css";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
