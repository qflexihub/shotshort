import { Swiper, SwiperSlide } from "swiper/react";
import { BrandsLogo } from "@/data/HappyClientData";
import Image from "next/image";
import styled from "styled-components";
import { Fragment } from "react";
import Heading from "./Heading";

const HappyClients = () => {
  return (
    <HappyClientsContainer>
      <Heading fontSize={35} lineHeight={40} textAlign="cemter">
        Our Happy Clients
      </Heading>
      <Swiper
        slidesPerView={4}
        // slidesSkip={1}
        // spaceBetween={10}
        breakpoints={{
          769: {
            slidesPerView: 6,
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        className="mySwiper"
      >
        <>
          {BrandsLogo?.map((item) => {
            return (
              <Fragment key={item?.id}>
                <SwiperSlide>
                  <Image fill src={item?.url} alt="Logo" />
                </SwiperSlide>
              </Fragment>
            );
          })}
        </>
      </Swiper>
    </HappyClientsContainer>
  );
};
export default HappyClients;

const HappyClientsContainer = styled.div``;
