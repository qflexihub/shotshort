import { useEffect, useRef } from "react";
import styled from "styled-components";
import Text from "./Text";

const ProgressCard = ({ data }) => {
  const mainCardRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".card-container");
    let maxHeight = 0;
    cards.forEach((card) => {
      maxHeight = Math.max(maxHeight, card.offsetHeight);
    });
    cards.forEach((card) => {
      card.style.height = `${maxHeight}px`;
    });
  }, []);

  return (
    <CardContainer>
      <CircularView>
        <BackgroundRingView>
          <RingView percentage={data.percentage}>
            <PercentageView>
              <NumberData>{data.percentage}%</NumberData>
            </PercentageView>
          </RingView>
        </BackgroundRingView>
      </CircularView>
      <BaseView ref={mainCardRef} className="card-container">
        <Text
          padding="20px 20px 40px 20px"
          marginTop={60}
          fontWeight={500}
          fontSize={24}
          lineHeight={28}
          textAlign="center"
        >
          {data.description}
        </Text>
      </BaseView>
    </CardContainer>
  );
};

export default ProgressCard;

const CardContainer = styled.div`
  width: 100%;
  max-width: 387px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 161px;
  }
`;

const CircularView = styled.div`
  z-index: 1;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: #f7f0fc;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 78px;
    height: 78px;
  }
`;

const BackgroundRingView = styled.div`
  z-index: 1;
  border-radius: 100px;
  width: 100px;
  height: 100px;
  background: linear-gradient(
    180deg,
    rgba(140, 81, 162, 0.1) 0%,
    rgba(89, 39, 137, 0.1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 78px;
    height: 78px;
  }
`;

const RingView = styled.div`
  width: 100px;
  height: 100px;
  z-index: 999;
  background-image: conic-gradient(
    #723c96 0%,
    #723c96 ${(props) => props.percentage}%,
    rgba(140, 81, 162, 0.1) ${(props) => props.percentage}%
  );
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 78px;
    height: 78px;
  }
`;

const PercentageView = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 100px;
  display: flex;
  background: #f7f0fc;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 63px;
    height: 63px;
  }
`;

const NumberData = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #723c96;
`;

const BaseView = styled.div`
  z-index: 0;
  margin-top: -50px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
