import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { GlobalStyles } from "ui";
import { store } from "./store/store";
import "./firebase/firebase";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
);
