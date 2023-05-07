import BrandVideos from "@/components/BrandVideos";
import ContentProcess from "@/components/ContentProcess";
import MarketBuzz from "@/components/MarketBuzz";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import InfoCard from "@/components/shared/InfoCard";
import { MarketBuzzProcess } from "@/data/marketBuzzProcess";
import { services } from "@/data/services";
import { StepsType1 } from "@/data/steps";

const SocialMedia = () => {
  return (
    <>
      <InfoCard data={services[0]} imageRight={true} />
      <BrandVideos />
      <Services />
      <ContentProcess data={StepsType1} />
      <MarketBuzz data={MarketBuzzProcess} />
      <WhyChooseUs />
    </>
  );
};

export default SocialMedia;
