import styled from "styled-components";
import Text from "./Text";
import { Fragment } from "react";
import Image from "next/image";
import { SocialMediaHandles } from "@/data/FooterData";

const SocialMediaIcons = () => {
  return (
    <SocialMediaContainer>
      <Text
        fontSize={18}
        lineHeight={23}
        color="rgba(255, 255, 255, 0.7);"
        textTransform="capitalize"
        marginTop={20}
        marginBottom={15}
      >
        Finds us online
      </Text>
      <div className="flex">
        {SocialMediaHandles?.map((item) => {
          return (
            <Fragment key={item.id}>
              <Image
                style={{ marginRight: 20, objectFit: "none" }}
                width={20}
                height={20}
                src={item.icon}
                alt={item.title}
              />
            </Fragment>
          );
        })}
      </div>
    </SocialMediaContainer>
  );
};
export default SocialMediaIcons;

const SocialMediaContainer = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  /* height: 20px; */
`;
