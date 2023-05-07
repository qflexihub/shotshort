import React, { Fragment } from "react";
import styled from "styled-components";
import LiveCommerceView from "./shared/LiveCommerce";
import { LiveCommerceData } from "@/data/LiveCommerceData";

const LiveCommerce = () => {
  return (
    <LiveCommerceSection>
      {LiveCommerceData?.map((item) => {
        return (
          <Fragment key={item?.id}>
            <LiveCommerceView data={item} />
          </Fragment>
        );
      })}
    </LiveCommerceSection>
  );
};

export default LiveCommerce;

const LiveCommerceSection = styled.div`
  display: flex;
`;
