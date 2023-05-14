import React, { Fragment, useState } from "react";
import Image from "next/image";
import Text from "./Text";
import styled from "styled-components";
import { categories } from "@/data/CategoriesData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CategoryBar = ({ selectedCategory, setSelectedCategory }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
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
                <Category onClick={() => handleCategoryClick(item?.title)}>
                  <Image
                    style={{
                      objectFit: "cover",
                      margin: "auto",
                      border:
                        selectedCategory === item?.title
                          ? "2px solid #8218EA"
                          : "",
                      borderRadius: "50%",
                    }}
                    width={64}
                    height={64}
                    src={item?.image}
                    alt="category"
                  />
                  <Text
                    fontSize={16}
                    color={
                      selectedCategory === item?.title ? "#8218EA" : "#555555"
                    }
                    lineHeight={18}
                    marginTop={11}
                    fontWeight={selectedCategory === item?.title ? 700 : 400}
                  >
                    {item?.title}
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
