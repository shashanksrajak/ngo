import "../styles/globals.css";
import Layout from "../components/layout";
import Router from "next/router";
import nProgress from "nprogress";
import "../styles/nprogress.css";

// material-ui
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const theme = createTheme({
  palette: {
    primary: {
      main: "#357a38",
    },
    secondary: {
      main: "#14a37f",
    },
    error: {
      main: "#ff1616",
    },
    background: {
      default: "#fff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
