import Image from "next/image";
import { Fragment } from "react";
import Text from "./Text";
import styled from "styled-components";
import { categories } from "@/data/CategoriesData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CategoryBar = () => {
  return (
    <CategoryContainer>
      {/* <Swiper
        slidesPerView={9}
        slidesSkip={1}
        spaceBetween={2}
        // navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        // navigation={{
        //   prevEl: ".swiper-button-prev",
        //   nextEl: ".swiper-button-next",
        // }}
        breakpoints={{
          769: {
            slidesPerView: 9,
            spaceBetween: 2,
          },
          375: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        className="mySwiper"
      > */}
      {categories?.map((item, index) => {
        return (
          // <SwiperSlide key={index}>
          <Category key={index}>
            <Image
              style={{ objectFit: "cover", margin: "auto" }}
              width={64}
              height={64}
              src={item?.url}
              alt="category"
            />
            <Text fontSize={16} color="#555555" lineHeight={18} marginTop={11}>
              {item?.name}
            </Text>
          </Category>
          // </SwiperSlide>
        );
      })}
      {/* </Swiper> */}
    </CategoryContainer>
  );
};
export default CategoryBar;

const CategoryContainer = styled.div`
  max-width: 100%;
  margin-top: 58px;
  cursor: pointer;
`;

const Category = styled.div`
  overflow: hidden;
  text-align: center;
  width: 64px;
  margin: auto;
  /* border-radius: 50%; */
`;
