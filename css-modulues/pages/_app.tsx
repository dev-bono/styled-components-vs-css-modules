import App from "next/app";
import Layout from "../src/components/Layout";
import "../src/css/common.scss";

// @ts-ignore
class KakaopageApp extends App<any> {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Layout>
        <Component {...pageProps} route={router.route} />
      </Layout>
    );
  }
}

export default KakaopageApp;
