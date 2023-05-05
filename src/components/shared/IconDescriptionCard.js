import Image from "next/image";
import styled from "styled-components";
import Text from "./Text";

const IconDescriptionCard = ({ data }) => {
  return (
    <>
      <CardContainer>
        <Image
          style={{ margin: "auto", marginBottom: "20px" }}
          width={103}
          height={103}
          src={data?.image}
          alt="Image"
        />
        <Text fontSize={24} lineHeight={27} fontWeight={700} textAlign="center">
          {data?.title}
        </Text>
      </CardContainer>
    </>
  );
};
export default IconDescriptionCard;

const CardContainer = styled.div`
  width: 100%;
  max-width: 386px;
  height: 257px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #cfcfcf;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 40px 50px 40px 50px;
`;
