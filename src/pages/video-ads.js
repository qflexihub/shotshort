import BrandVideos from "@/components/BrandVideos";
import BusinessCard from "@/components/BusinessCard";
import ContentProcess from "@/components/ContentProcess";
import MarketBuzz from "@/components/MarketBuzz";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import InfoCard from "@/components/shared/InfoCard";
import { MarketBuzzProcess } from "@/data/marketBuzzProcess";
import { services } from "@/data/ServicesData";
import { StepsType1 } from "@/data/steps";
import HappyClients from "@/components/shared/HappyClients";

const videoAds = () => {
  return (
    <>
      <InfoCard data={services[0]} imageRight={false} />
      <div className="text-center">
        <HappyClients />
      </div>
      <BrandVideos />
      <ContentProcess data={StepsType1} />
      <BusinessCard />
      <WhyChooseUs />
      <InfoCard data={services[2]} imageRight={true} />
      <MarketBuzz data={MarketBuzzProcess} />
    </>
  );
};

export default videoAds;
