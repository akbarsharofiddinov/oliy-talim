import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import "./translation/i18";

// Import Swiper styles
import "swiper/css";

// Import AOS

import "aos/dist/aos.css";

createRoot(document.getElementById("root")!).render(<App />);
