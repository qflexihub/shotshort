import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { BrandsLogo } from "@/data/HappyClientData";
import styled from "styled-components";
import Heading from "./Heading";
import { useIsMobile } from "@/utils/general";

SwiperCore.use([Autoplay, Navigation]);

const HappyClients = () => {
  const isMobile = useIsMobile();
  return (
    <HappyClientsContainer>
      <Heading
        fontSize={35}
        mobileFontSize={18}
        lineHeight={40}
        textAlign="cemter"
        marginBottom={isMobile ? 12 : 42}
      >
        Clients That Speak For Us
      </Heading>
      <BrandsContainer style={{ marginBottom: 12 }}>
        <Swiper
          loop={true}
          slidesPerView={6}
          // slidesSkip={1}
          spaceBetween={10}
          breakpoints={{
            769: {
              slidesPerView: 6,
            },
            320: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
          }}
          className="brand-swiper"
        >
          {BrandsLogo?.map((item) => {
            return (
              <Fragment key={item?.id}>
                <SwiperSlide>
                  <img
                    src={item?.url}
                    style={{
                      maxWidth: isMobile ? "64px" : "171px",
                      width: "100%",
                      height: isMobile ? "33px" : "90px",
                      objectFit: "scale-down",
                      margin: "auto",
                    }}
                  />
                </SwiperSlide>
              </Fragment>
            );
          })}
        </Swiper>
      </BrandsContainer>
      <BrandsContainer>
        <Swiper
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          navigation={true}
          loop={true}
          slidesPerView={6}
          // slidesSkip={1}
          spaceBetween={10}
          breakpoints={{
            769: {
              slidesPerView: 5,
            },
            320: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
          }}
          className="brand-swiper"
        >
          {BrandsLogo?.map((item) => {
            return (
              <Fragment key={item?.id}>
                <SwiperSlide>
                  <img
                    src={item?.url}
                    style={{
                      maxWidth: isMobile ? "64px" : "171px",
                      width: "100%",
                      height: isMobile ? "33px" : "",
                      objectFit: "scale-down",
                      margin: "auto",
                    }}
                  />
                </SwiperSlide>
              </Fragment>
            );
          })}
        </Swiper>
      </BrandsContainer>
    </HappyClientsContainer>
  );
};
export default HappyClients;

const HappyClientsContainer = styled.div`
  padding-top: 82px;
  padding-bottom: 124px;

  @media (max-width: 768px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

const BrandsContainer = styled.div`
  /* margin-top: 12px; */
`;
