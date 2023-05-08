import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
