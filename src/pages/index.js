import BrandVideos from "@/components/BrandVideos";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        {/* <BrandVideos /> */}
        <Services />
      </Layout>
    </>
  );
}
