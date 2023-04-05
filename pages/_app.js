import "../styles/globals.css";
import {wrapper} from "../redux/store";
import {Provider} from "react-redux";
import store from "../redux/store";

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
