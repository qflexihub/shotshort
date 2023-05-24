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
import { videoAdsBrandVideos, videoAdsBusinessCardData, videoAdsHappyClients, videoAdsServicesHeader, videoAdsSteps, videoAdsWhyChooseUsData } from "@/data/VideoAdsData";
import { useIsMobile } from "@/utils/general";
import InfluencerMarketingCardView from "@/components/InfluencerMarketingCardView";
import { SocialWhyChooseUsData } from "@/data/SocialMediaData";

const videoAds = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div style={{ padding: isMobile ? "0px 20px" : "0px 120px" }}>
        <InfoCard data={videoAdsServicesHeader} imageRight={false} />
      </div>
      <div className="text-center">
        <HappyClients data={videoAdsHappyClients} />
      </div>
      <BrandVideos data={videoAdsBrandVideos} />
      <ContentProcess data={videoAdsSteps} />
      <BusinessCard data={videoAdsBusinessCardData}/>
      <WhyChooseUs data={videoAdsWhyChooseUsData} />
      <InfoCard data={services[2]} imageRight={true} />
      <MarketBuzz data={MarketBuzzProcess} />
    </>
  );
};

export default videoAds;
