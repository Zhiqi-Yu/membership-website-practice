
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

/*
import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import { studioTheme } from "../ui-components";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter";
import "../styles/reset.css";

import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

function App({ Component, pageProps }) {
  return (
    <AmplifyProvider theme={studioTheme}>
      <Component {...pageProps} />
    </AmplifyProvider>
  );
}
export default App;
*/