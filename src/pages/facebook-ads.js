import BrandVideos from "@/components/BrandVideos";
import BusinessCard from "@/components/BusinessCard";
import ContentProcess from "@/components/ContentProcess";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HappyClients from "@/components/shared/HappyClients";
import InfoCard from "@/components/shared/InfoCard";
import { facebookPageServices, fbBrandVideos, fbServiceHappyClients, fbServicesHeader, fbSteps, fbWhyChooseData } from "@/data/facebookAdsData";
import { useIsMobile } from "@/utils/general";

const FacebookAds = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div style={{ padding: isMobile ? "0px 20px" : "0px 120px" }}>
        <InfoCard data={fbServicesHeader} imageRight={true} />
      </div>
      <div className="text-center">
        <HappyClients data={fbServiceHappyClients}/>
      </div>
      <BrandVideos data={fbBrandVideos} />
      <Services data={facebookPageServices} />
      <ContentProcess data={fbSteps} />
      <WhyChooseUs data={fbWhyChooseData} />
    </>
  );
};

export default FacebookAds;
