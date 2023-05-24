import React, { Fragment, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import VideoCard from "./shared/videoCard";
import { Videos } from "@/data/BrandVideosData";
import Heading from "./shared/Heading";
import Text from "./shared/Text";
import Button from "./shared/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper/core";

import Image from "next/image";
import CategoryBar from "./shared/CategoryBar";
import { categories } from "@/data/CategoriesData";

SwiperCore.use([Navigation]);

const BrandVideos = ({ data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const playerRefs = useRef([]);
  const [selectedCategory, setSelectedCategory] = useState("Fitness");
  const [selectedVideoObj, setSelectedVideoObj] = useState();

  useEffect(() => {
    const res = categories.find((item) => item.title === selectedCategory);
    setSelectedVideoObj(res);
  }, [selectedCategory]);

  useEffect(() => {
    playerRefs.current = playerRefs?.current?.slice(0, Videos.length);
  }, [Videos]);

  const stopAllVideos = () => {
    playerRefs?.current?.forEach((player) =>
      player?.getInternalPlayer()?.pause()
    );
  };

  return (
    <>
      <BrandVideoContainer>
        <Block1>
<<<<<<< Updated upstream
          <Heading textAlign="center">
          Excerpts of our Work
          </Heading>
          <Text fontSize={18} color="#555555" marginTop={17} textAlign="center">
          Want to grow? Connect with us now
=======
          <Heading textAlign="center">{data?.heading}</Heading>
          <Text fontSize={18} color="#555555" marginTop={17} textAlign="center">
            {data?.description}
>>>>>>> Stashed changes
          </Text>
          <Button value={data?.btnText} marginTop="32px" rightArrow />
        </Block1>
        <CategoryBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <VideoContainer>
          <Swiper
            slidesPerView={4}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              1441: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1025: {
                slidesPerView: 4,
                spaceBetween: 8,
              },
              769: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              320: {
                width: 193,
                height: 344,
                slidesPerView: 1,
                spaceBetween: 8,
              },
            }}
            className="mySwiper"
          >
            <>
              {selectedVideoObj?.videos?.map((item, index) => {
                return (
                  <Fragment key={item?.id}>
                    <SwiperSlide>
                      <VideoBlock>
                        <VideoCard
                          data={item}
                          playerRefs={playerRefs}
                          index={index}
                          stopAllVideos={stopAllVideos}
                        />
                      </VideoBlock>
                    </SwiperSlide>
                  </Fragment>
                );
              })}
            </>
          </Swiper>
          <NextArrow className="swiper-button-next" ref={nextRef}>
            <Image
              width={15}
              height={15}
              src="/next-arrow.svg"
              alt="Prev Arrow"
            />
          </NextArrow>
          <PrevArrow className="swiper-button-prev" ref={prevRef}>
            <Image
              width={15}
              height={15}
              src="/prev-arrow.svg"
              alt="Next Arrow"
            />
          </PrevArrow>
        </VideoContainer>
      </BrandVideoContainer>
    </>
  );
};
export default BrandVideos;

const BrandVideoContainer = styled.div`
  max-width: 100%;
  padding: 80px 120px;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 50px 0px 50px 20px;
  }
`;

const Block1 = styled.div`
  text-align: center;
  @media (max-width: 768px) {
    padding-right: 20px;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
  position: relative;
`;

export const NextArrow = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: #8218ea;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  right: -30px;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  border: 3px solid #fff;

  @media (max-width: 768px) {
    display: none;
    width: 30px;
    height: 30px;
  }
`;

export const PrevArrow = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: #8218ea;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  border: 3px solid #fff;

  @media (max-width: 768px) {
    display: none;
    width: 30px;
    height: 30px;
  }
`;

const VideoBlock = styled.div`
  width: 100%;
  max-width: 285px;
  height: 506px;
  /* display: flex;
  justify-content: center;
  position: relative; */
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 344px;
  }
`;
