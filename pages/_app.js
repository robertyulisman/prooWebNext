import { store, wrapper } from "../redux/store";
import { Provider } from "react-redux";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
