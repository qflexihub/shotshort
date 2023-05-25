import CaseStudyBlock from "@/components/CaseStudyBlock";
import ContentProcess from "@/components/ContentProcess";
import Faqs from "@/components/Faqs";
import InfluencerMarketingCardView from "@/components/InfluencerMarketingCardView";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CardBadge from "@/components/shared/CardBadge";
import HappyClients from "@/components/shared/HappyClients";
import InfoCard from "@/components/shared/InfoCard";
import { imServicesHeader, imServiceHappyClients, imPageServices, imSteps, imSocialMediaData, imWhyChooseUsData, imCardData } from "@/data/InfluencerMarketingData";
import { facebookPageServices, fbWhyChooseData, imFaqsData } from "@/data/facebookAdsData";
import { StepsType1 } from "@/data/steps";
import { useIsMobile } from "@/utils/general";

const InfluencerMarketing = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div style={{ padding: isMobile ? "0px 20px" : "0px 120px" }}>
        <InfoCard data={imServicesHeader} imageRight={true} />
      </div>
      <div className="text-center">
        <HappyClients data={imServiceHappyClients}/>
      </div>
      <Services data={imPageServices} />
      <ContentProcess data={imSteps} />
      <WhyChooseUs data={imSocialMediaData} />
      <WhyChooseUs data={imWhyChooseUsData} />
      <InfluencerMarketingCardView data={imCardData} />
      <Faqs data={imFaqsData} />
    </>
  );
};

export default InfluencerMarketing;
