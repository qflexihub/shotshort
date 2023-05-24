import BrandVideos from "@/components/BrandVideos";
import ContentProcess from "@/components/ContentProcess";
import MarketBuzz from "@/components/MarketBuzz";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import InfoCard from "@/components/shared/InfoCard";
import { MarketBuzzProcess } from "@/data/marketBuzzProcess";
import { StepsType1 } from "@/data/steps";
import HappyClients from "@/components/shared/HappyClients";
import { useIsMobile } from "@/utils/general";
import {
  SocialMediaMarketBuzz,
  curiousAbout,
  socialMediaBrandVideos,
  socialMediaHeader,
  socialMediaServices,
  socialMediahappyClients,
} from "@/data/SocialMediaData";

const SocialMedia = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div style={{ padding: isMobile ? "0px 20px" : "0px 120px" }}>
        <InfoCard data={socialMediaHeader[0]} imageRight={true} />
      </div>
      <div className="text-center">
        <HappyClients data={socialMediahappyClients} />
      </div>
      <BrandVideos data={socialMediaBrandVideos} />
      <Services data={socialMediaServices} />
      <ContentProcess data={curiousAbout} />
      <MarketBuzz data={SocialMediaMarketBuzz} />
      <WhyChooseUs />
    </>
  );
};

export default SocialMedia;
