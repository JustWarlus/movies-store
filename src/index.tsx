import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { GlobalStyles } from "./ui";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
);
