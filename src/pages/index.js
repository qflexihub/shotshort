import BrandVideos from "@/components/BrandVideos";
import BusinessCard from "@/components/BusinessCard";
import CaseStudyBlock from "@/components/CaseStudyBlock";
import ContactUsForm from "@/components/ContactUsForm";
import ContentProcess from "@/components/ContentProcess";
import Faqs from "@/components/Faqs";
import GetInTouchForm from "@/components/GetInTouchForm";
import Header from "@/components/Header";
import MarketBuzz from "@/components/MarketBuzz";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import HappyClients from "@/components/shared/HappyClients";
import { homePageServices } from "@/data/HomePageData";

export default function Home() {
  return (
    <>
      <BrandVideos />
      <Services data={homePageServices} />
      <ContentProcess />
      <ContactUsForm />
      <Testimonial />
      <WhyChooseUs />
      {/* <BusinessCard /> */}
      <MarketBuzz />
      <Faqs />
    </>
  );
}
