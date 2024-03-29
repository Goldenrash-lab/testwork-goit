import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/testwork-goit">
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </PersistGate>
  </BrowserRouter>
);
