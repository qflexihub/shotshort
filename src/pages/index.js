import BrandVideos from "@/components/BrandVideos";
import BusinessCard from "@/components/BusinessCard";
import ContentProcess from "@/components/ContentProcess";
import GetInTouchForm from "@/components/GetInTouchForm";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import MarketBuzz from "@/components/MarketBuzz";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import { MarketBuzzProcess } from "@/data/marketBuzzProcess";
import { StepsType1 } from "@/data/steps";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        {/* <BrandVideos /> */}
        <Services />
        <GetInTouchForm />
        <WhyChooseUs />
        <ContentProcess data={StepsType1} />
        <BusinessCard />
        <MarketBuzz data={MarketBuzzProcess} />
      </Layout>
    </>
  );
}
