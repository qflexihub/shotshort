import { services } from "@/data/services";
import styled from "styled-components";
import InfoCard from "./shared/InfoCard";
import { serviceHeading } from "@/data/contentHeading";
import ContentHeading from "./shared/ContentHeading";

const Services = () => {
  return (
    <CardContainer>
      <ContentHeading data={serviceHeading} />
      {services?.map((item, index) => {
        return (
          <InfoCard
            key={index}
            data={item}
            imageRight={index % 2 === 0 ? true : false}
          />
        );
      })}
    </CardContainer>
  );
};
export default Services;

const CardContainer = styled.div`
  padding: 0 185px;
`;
