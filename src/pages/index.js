import BrandVideos from "@/components/BrandVideos";
import BusinessCard from "@/components/BusinessCard";
import CaseStudyBlock from "@/components/CaseStudyBlock";
import ContentProcess from "@/components/ContentProcess";
import Faqs from "@/components/Faqs";
import GetInTouchForm from "@/components/GetInTouchForm";
import Header from "@/components/Header";
import MarketBuzz from "@/components/MarketBuzz";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import HappyClients from "@/components/shared/HappyClients";

export default function Home() {
  return (
    <>
      <BrandVideos />
      <Services />
      {/* <ContentProcess /> */}
      <GetInTouchForm />
      <Testimonial />
      <WhyChooseUs />
      {/* <BusinessCard /> */}
      <MarketBuzz />
      <Faqs />
    </>
  );
}
