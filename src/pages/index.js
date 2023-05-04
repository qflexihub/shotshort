import BrandVideos from "@/components/BrandVideos";
import ContentProcess from "@/components/ContentProcess";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import { StepsType1 } from "@/data/steps";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        {/* <BrandVideos /> */}
        <Services />
        <WhyChooseUs />
        <ContentProcess data={StepsType1} />
      </Layout>
    </>
  );
}
