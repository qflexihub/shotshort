import Image from "next/image";
import styled from "styled-components";

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
        <Text>{data?.title}</Text>
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
  margin: 10px;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  text-align: center;
`;
