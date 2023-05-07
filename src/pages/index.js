import BrandVideos from "@/components/BrandVideos";
import BusinessCard from "@/components/BusinessCard";
import ContentProcess from "@/components/ContentProcess";
import GetInTouchForm from "@/components/GetInTouchForm";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import LiveCommerce from "@/components/LiveCommerce";
import MarketBuzz from "@/components/MarketBuzz";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import { MarketBuzzProcess } from "@/data/marketBuzzProcess";
import { StepsType1 } from "@/data/Steps";

export default function Home() {
  return (
    <>
      <Header />
      <BrandVideos />
      <Services />
      <ContentProcess />
      <GetInTouchForm />
      <WhyChooseUs />
      <BusinessCard />
      <MarketBuzz />
    </>
  );
}
