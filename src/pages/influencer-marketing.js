import ContentProcess from "@/components/ContentProcess";
import InfluencerMarketingContainer from "@/components/InfluencerMarketing";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import InfoCard from "@/components/shared/InfoCard";
import { services } from "@/data/ServicesData";
import { StepsType1 } from "@/data/Steps";

const InfluencerMarketing = () => {
  return (
    <>
      <InfoCard data={services[0]} imageRight={true} />
      <Services />
      <ContentProcess data={StepsType1} />
      <WhyChooseUs />
      <WhyChooseUs />
      <InfluencerMarketingContainer />
    </>
  );
};

export default InfluencerMarketing;
