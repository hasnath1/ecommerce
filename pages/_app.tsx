import type { AppProps } from "next/app";
import type { FunctionComponent } from "react";
import "../style/global.css";

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
  children,
}) => {
  return <Component {...pageProps}>{children}</Component>;
};

export default App;
