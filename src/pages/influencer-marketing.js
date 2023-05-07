import ContentProcess from "@/components/ContentProcess";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import InfoCard from "@/components/shared/InfoCard";
import { services } from "@/data/services";
import { StepsType1 } from "@/data/steps";

const InfluencerMarketing = () => {
  return (
    <>
      <InfoCard data={services[0]} imageRight={true} />
      <Services />
      <ContentProcess data={StepsType1} />
      <WhyChooseUs />
      <WhyChooseUs />
    </>
  );
};

export default InfluencerMarketing;
