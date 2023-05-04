import Image from "next/image";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const StepCard = ({ data }) => {
  const mainCardRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".main-card-container");
    let maxHeight = 0;
    cards.forEach((card) => {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
    });
    cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
    });
    const backgroundCards = document.querySelectorAll(".background-card-container");
    backgroundCards.forEach(
        (el) => (el.style.height = maxHeight / 2 + 20 + "px")
    );
  }, []);

  return (
    <StepCardContainer>
      <BackgroundCardContainer ref={mainCardRef} className="background-card-container">
        <MainCardContainer ref={mainCardRef} className="main-card-container">
          <StepText>{data?.stepText}</StepText>
          <CircularImageView>
            <Image
              width={30}
              height={30}
              src={data?.image}
              alt={data?.title}
            />
          </CircularImageView>
          <TitleText>{data?.title}</TitleText>
        </MainCardContainer>
      </BackgroundCardContainer>
    </StepCardContainer>
  );
};

export default StepCard;

const StepCardContainer = styled.div`
  min-width: 250px;
`;

const BackgroundCardContainer = styled.div`
  padding: 20px;
  background: #f6ecff;
  border-radius: 10px;
  height: 100%;
  display: grid;
  place-items: center;
`;

const MainCardContainer = styled.div`
  padding: 20px 25px;
  background: #ffffff;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  text-align: center;
  gap: 20px;
`;

const StepText = styled.p`
  text-transform: uppercase;
  color: #898989;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

const CircularImageView = styled.div`
  background: linear-gradient(180deg, #8c51a2 0%, #592789 100%);
  width: 65px;
  height: 65px;
  border-radius: 100px;
  margin: 0 auto;
  display: grid;
  place-items: center;
`;

const TitleText = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
`;
