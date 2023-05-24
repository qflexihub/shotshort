import BrandVideos from "@/components/BrandVideos";
import BusinessCard from "@/components/BusinessCard";
import ContentProcess from "@/components/ContentProcess";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HappyClients from "@/components/shared/HappyClients";
import InfoCard from "@/components/shared/InfoCard";
import { fbServices, fbServicesHeader, fbSteps } from "@/data/facebookAdsData";

const FacebookAds = () => {
  return (
    <>
      <InfoCard data={fbServicesHeader} imageRight={true} />
      <div className="text-center">
        <HappyClients />
      </div>
      <BrandVideos />
      <Services serviceData={fbServices} serviceHeadingData={fbServicesHeader} />
      {console.log('test')}
      {console.log(fbSteps)}
      <ContentProcess data={fbSteps} />
      <BusinessCard />
      <WhyChooseUs />
    </>
  );
};

export default FacebookAds;
