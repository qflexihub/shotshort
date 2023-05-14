import BrandVideos from "@/components/BrandVideos";
import BusinessCard from "@/components/BusinessCard";
import ContentProcess from "@/components/ContentProcess";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HappyClients from "@/components/shared/HappyClients";
import InfoCard from "@/components/shared/InfoCard";
import { services } from "@/data/ServicesData";
import { StepsType1 } from "@/data/steps";

const FacebookAds = () => {
  return (
    <>
      <InfoCard data={services[0]} imageRight={true} />
      <div className="text-center">
        <HappyClients />
      </div>
      <BrandVideos />
      <Services />
      <ContentProcess data={StepsType1} />
      <BusinessCard />
      <WhyChooseUs />
    </>
  );
};

export default FacebookAds;
