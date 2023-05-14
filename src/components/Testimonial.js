import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { NextArrow, PrevArrow } from "./BrandVideos";
import Image from "next/image";
import { ClientTestiMonials } from "@/data/TestiMonialData";
import BusinessCardView from "./shared/BusinessCard";
import Heading from "./shared/Heading";
import { Fragment, useRef } from "react";
import { useIsMobile } from "@/utils/general";

const Testimonial = () => {
  const isMobile = useIsMobile();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} swiper-bullet">` + "</span>";
    },
  };

  return (
    <>
      <TestimonialContainer>
        <Heading textAlign="center">Testimonial From Our Clients</Heading>
        <CardBlock>
          <Swiper
            slidesPerView={2}
            pagination={pagination}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
            }}
            className="mySwiper"
            modules={[Pagination]}
          >
            {ClientTestiMonials?.map((item, index) => {
              return (
                <Fragment key={item?.id}>
                  <SwiperSlide>
                    <BusinessCardView
                      data={item}
                      isClient={true}
                      height="400px"
                      width="100%"
                      descriptionFontSize={25}
                    />
                  </SwiperSlide>
                </Fragment>
              );
            })}
          </Swiper>
          <div style={{ position: isMobile ? "relative" : "" }}>
            <NextArrow
              style={{
                display: "flex",
                right: isMobile ? "-18px" : "-48px",
                top: isMobile ? "8px" : "",
              }}
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
              style={{
                display: "flex",
                left: isMobile ? "12px" : "0px",
                top: isMobile ? "8px" : "",
              }}
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
          </div>
        </CardBlock>
      </TestimonialContainer>
    </>
  );
};
export default Testimonial;

const TestimonialContainer = styled.div`
  padding: 120px 94px 70px 94px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const CardBlock = styled.div`
  position: relative;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
