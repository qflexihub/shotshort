import React, { Fragment } from "react";
import Image from "next/image";
import Text from "./Text";
import styled from "styled-components";
import { categories } from "@/data/CategoriesData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CategoryBar = () => {
  return (
    <CategoryContainer>
      <Swiper
        slidesPerView={9}
        spaceBetween={2}
        breakpoints={{
          769: {
            slidesPerView: 9,
            spaceBetween: 2,
          },
          320: {
            slidesPerView: 4.5,
            spaceBetween: 15,
          },
        }}
        className="mySwiper"
      >
        {categories?.map((item) => {
          return (
            <Fragment key={item?.id}>
              <SwiperSlide>
                <Category>
                  <Image
                    style={{ objectFit: "cover", margin: "auto" }}
                    width={64}
                    height={64}
                    src={item?.url}
                    alt="category"
                  />
                  <Text
                    fontSize={16}
                    color="#555555"
                    lineHeight={18}
                    marginTop={11}
                  >
                    {item?.name}
                  </Text>
                </Category>
              </SwiperSlide>
            </Fragment>
          );
        })}
      </Swiper>
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
  max-width: 64px;
  width: 100%;
  margin: auto;
  /* border-radius: 50%; */
`;
