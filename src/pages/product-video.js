import BusinessCard from "@/components/BusinessCard";
import ContentProcess from "@/components/ContentProcess";
import MarketBuzz from "@/components/MarketBuzz";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import InfoCard from "@/components/shared/InfoCard";
import { MarketBuzzProcess } from "@/data/marketBuzzProcess";
import { services } from "@/data/ServicesData";
import { StepsType1 } from "@/data/steps";

const ProductVideo = () => {
  return (
    <>
      <InfoCard data={services[0]} imageRight={true} />
      <Services />
      <ContentProcess data={StepsType1} />
      <BusinessCard />
      <MarketBuzz data={MarketBuzzProcess} />
      <WhyChooseUs />
    </>
  );
};

export default ProductVideo;
