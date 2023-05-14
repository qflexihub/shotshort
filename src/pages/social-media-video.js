import BrandVideos from "@/components/BrandVideos";
import ContentProcess from "@/components/ContentProcess";
import MarketBuzz from "@/components/MarketBuzz";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import InfoCard from "@/components/shared/InfoCard";
import { MarketBuzzProcess } from "@/data/marketBuzzProcess";
import { services } from "@/data/ServicesData";
import { StepsType1 } from "@/data/steps";
import HappyClients from "@/components/shared/HappyClients";

const SocialMedia = () => {
  return (
    <>
      <InfoCard data={services[0]} imageRight={true} />
      <div className="text-center">
        <HappyClients />
      </div>
      <BrandVideos />
      <Services />
      <ContentProcess data={StepsType1} />
      <MarketBuzz data={MarketBuzzProcess} />
      <WhyChooseUs />
    </>
  );
};

export default SocialMedia;
