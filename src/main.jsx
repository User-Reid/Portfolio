import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./features/skills/skillStore.js";
// import styles from "./main.module.css";

// const isSmallScreen = window.innerWidth <= 390;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <img
        src="/IMG_1052.png"
        className={
          isSmallScreen
            ? `${styles.backgroundImageSmall}`
            : `${styles.backgroundImageBig}`
        }
      /> */}

      <App />
    </React.StrictMode>
  </Provider>
);
