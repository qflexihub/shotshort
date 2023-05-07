import styled from "styled-components";
import LiveCommerceView from "./shared/LiveCommerce";
import { LiveCommerceData } from "@/data/LiveCommerceData";

const LiveCommerce = () => {
  return (
    <LiveCommerceSection>
      {LiveCommerceData?.map((item, index) => {
        return <LiveCommerceView key={index} data={item} />;
      })}
    </LiveCommerceSection>
  );
};

export default LiveCommerce;

const LiveCommerceSection = styled.div`
  display: flex;
`;
