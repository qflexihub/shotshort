import BrandVideos from "@/components/BrandVideos";
import BusinessCard from "@/components/BusinessCard";
import ContentProcess from "@/components/ContentProcess";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import { StepsType1 } from "@/data/steps";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        {/* <BrandVideos /> */}
        <Services />
        <ContentProcess data={StepsType1} />
        <BusinessCard />
      </Layout>
    </>
  );
}
