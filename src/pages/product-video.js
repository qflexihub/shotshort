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
import { useIsMobile } from "@/utils/general";
import {
  ProductVideoHeader,
  productVideoBusinessCardData,
  productVideoMarketBuzz,
  productVideoServices,
  productVideoSteps,
  productVideoWhyChooseUsData,
  productVideohappyClients,
} from "@/data/ProductVideoData";

const ProductVideo = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div style={{ padding: isMobile ? "0px 20px" : "40px 20px 100px 120px" }}>
        <InfoCard data={ProductVideoHeader} imageRight={true} />
      </div>

      <div className="text-center">
        <HappyClients data={productVideohappyClients} />
      </div>
      <Services data={productVideoServices} />
      <ContentProcess data={productVideoSteps} />
      <BusinessCard data={productVideoBusinessCardData} />
      <MarketBuzz data={productVideoMarketBuzz} />
      <WhyChooseUs data={productVideoWhyChooseUsData} />
    </>
  );
};

export default ProductVideo;
