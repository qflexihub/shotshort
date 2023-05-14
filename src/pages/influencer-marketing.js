import ContentProcess from "@/components/ContentProcess";
import Faqs from "@/components/Faqs";
import InfluencerMarketingCardView from "@/components/InfluencerMarketingCardView";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HappyClients from "@/components/shared/HappyClients";
import InfoCard from "@/components/shared/InfoCard";
import { StepsType1 } from "@/data/steps";

const InfluencerMarketing = () => {
  const InfoData = {
    id: 1,
    title: "Social Media Videos",
    description:
      "We strategize and deliver long videos as well as short videos for social media that comprise niche-based social media influencers which our customers can utilize as organic videos on their social media platforms to aware, educate",
    image: "/smv.svg",
    buttonText: "Learn More",
  };

  return (
    <>
      <InfoCard data={InfoData} imageRight={true} />
      <div className="text-center">
        <HappyClients />
      </div>
      <Services />
      <ContentProcess data={StepsType1} />
      <WhyChooseUs />
      {/* <WhyChooseUs /> */}
      <InfluencerMarketingCardView />
      <Faqs />
    </>
  );
};

export default InfluencerMarketing;
