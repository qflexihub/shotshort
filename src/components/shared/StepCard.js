import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Text from "./Text";
import { useIsMobile } from "@/utils/general";
import Button from "./Button";

const StepCard = ({ data, isExpanded, toggleDescription }) => {
  const mainCardRef = useRef(null);
  const isMobile = useIsMobile();

  const descriptionContent = isExpanded ? data?.description : data?.description.slice(0, 150);

  const adjustCardHeight = () => {
    const cards = document.querySelectorAll(".main-card-container");
    let maxHeight = 0;
    cards.forEach((card) => {
      maxHeight = Math.max(maxHeight, card.offsetHeight);
    });
    cards.forEach((card) => {
      card.style.height = `${maxHeight}px`;
    });
    const backgroundCards = document.querySelectorAll(".background-card-container");
    backgroundCards.forEach((el) => (el.style.height = maxHeight / 2 + 20 + "px"));
  };

  useEffect(() => {
    adjustCardHeight();
  }, []);

  return (
    <StepCardContainer>
      <BackgroundCardContainer
        ref={mainCardRef}
        className="background-card-container"
      >
        <MainCardContainer ref={mainCardRef} className="main-card-container">
          <Text
            mobileFontSize={12}
            lineHeight={21}
            fontWeight={700}
            color="#898989"
            textTransform="uppercase"
          >
            {data?.stepText}
          </Text>
          <CircularImageView>
            <Image
              width={isMobile ? 16 : 30}
              height={isMobile ? 16 : 30}
              src={data?.image}
              alt={data?.title}
            />
          </CircularImageView>
          <Text fontSize={22} fontWeight={700} textAlign="center">
            {data?.title}
          </Text>
          {data?.description.length > 150 && (
            <Button
              value={isExpanded ? "Show less" : "Read more"}
              onClick={() => {
                toggleDescription(data?.id);
                adjustCardHeight();
              }}
              type="text"
              fontWeight="600"
            />
          )}
          <Text>{descriptionContent}</Text>
          
        </MainCardContainer>
      </BackgroundCardContainer>
    </StepCardContainer>
  );
};

export default StepCard;

const StepCardContainer = styled.div`
  width: 100%;
  max-width: 285px;
  height: 289px;

  @media (max-width: 768px) {
    max-width: 160px;
    height: 170px;
  }
`;

const BackgroundCardContainer = styled.div`
  padding: 20px;
  background: #f6ecff;
  border-radius: 10px;
  height: 100%;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
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
  max-width: 249px;
  width: 100%;

  @media (max-width: 768px) {
    /* max-width: 140px; */
    padding: 8px 12px 5px 12px;
    /* display: block; */
  }
`;

const CircularImageView = styled.div`
  background: linear-gradient(180deg, #8c51a2 0%, #592789 100%);
  width: 65px;
  height: 65px;
  border-radius: 100px;
  margin: 0 auto;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
