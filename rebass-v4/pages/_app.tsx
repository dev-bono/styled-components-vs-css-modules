import App from "next/app";
import Layout from "../src/components/Layout";
import { ThemeProvider } from "styled-components";
import STYLED_COMPONENT_THEME from "../src/theme";

// @ts-ignore
class KakaopageApp extends App<any> {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={STYLED_COMPONENT_THEME}>
        <Layout>
          <Component {...pageProps} route={router.route} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default KakaopageApp;
