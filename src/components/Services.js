import React, { Fragment, useRef } from "react";
import styled from "styled-components";
import InfoCard from "./shared/InfoCard";
import ContentHeading from "./shared/contentHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import { NextArrow, PrevArrow } from "./BrandVideos";
import Image from "next/image";
import { useIsMobile } from "@/utils/general";

SwiperCore.use([Navigation]);

const Services = ({serviceData, serviceHeadingData}) => {
  const isMobile = useIsMobile();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <CardContainer>
      <ContentHeading data={serviceHeadingData} />
      {isMobile && (
        <Swiper
          slidesPerView={4}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            769: {
              slidesPerView: 4,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
          }}
          className="mySwiper"
        >
          {serviceData?.map((item, index) => {
            return (
              <Fragment key={item?.id}>
                <SwiperSlide>
                  <InfoCard
                    data={item}
                    imageRight={index % 2 === 0 ? true : false}
                    imageWidth="262px"
                    imageHeight="206px"
                    imageStyles={{ margin: "auto" }}
                  />
                </SwiperSlide>
              </Fragment>
            );
          })}
        </Swiper>
      )}

      {!isMobile && (
        <div className="relative">
          <Image
            className="absolute"
            style={{
              top: "10%",
              left: 0,
              right: 0,
              margin: "auto",
            }}
            width={575}
            height={2221}
            src="/dotted-line.svg"
          />
          {serviceData?.map((item, index) => {
            return (
              <Fragment key={item?.id}>
                <InfoCard
                  data={item}
                  imageRight={index % 2 === 0 ? true : false}
                  marginBottom="200px"
                  marginTop="200px"
                />
              </Fragment>
            );
          })}
        </div>
      )}

      {isMobile && (
        <>
          <NextArrow
            style={{ display: "flex", right: "0px" }}
            className="swiper-button-next"
            ref={nextRef}
          >
            <Image
              width={isMobile ? 8 : 15}
              height={isMobile ? 8 : 15}
              src="/next-arrow.svg"
              alt="Prev Arrow"
            />
          </NextArrow>
          <PrevArrow
            style={{ display: "flex", left: "24px" }}
            className="swiper-button-prev"
            ref={prevRef}
          >
            <Image
              width={isMobile ? 8 : 15}
              height={isMobile ? 8 : 15}
              src="/prev-arrow.svg"
              alt="Next Arrow"
            />
          </PrevArrow>
        </>
      )}
    </CardContainer>
  );
};
export default Services;

const CardContainer = styled.div`
  padding: 80px 170px;
  position: relative;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;
