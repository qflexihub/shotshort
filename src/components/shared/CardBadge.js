import styled from "styled-components";
import Text from "./Text";

const CardBadge = ({ data }) => {
  return (
    <MainContainer>
        <CardView>
            {data?.map((item) => {
            return (
                <DataView key={item?.id}>
                <Text
                    fontSize={35}
                    lineHeight={24}
                    color="#8218EA"
                    fontWeight={"700"}
                >
                    {item.count}
                </Text>
                <Text
                    fontSize={24}
                    lineHeight={24}
                    color="#555555"
                    fontWeight={"400"}
                    marginTop={8}
                >
                    {item.title}
                </Text>
                </DataView>
            );
            })}
        </CardView>
    </MainContainer>
  );
};

export default CardBadge;

const MainContainer = styled.div`
  padding: 10px;
  width: 100%;
  @media (max-width: 786px) {
    text-align: center;
  }
`;
const CardView = styled.div`
  max-width: 100%;
  padding-top: 50px;
  padding-bottom: 80px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    padding-top: 10px;
    padding-bottom: 20px;
    flex-direction: column;
    gap: 10px;
  }
`;

const DataView = styled.div`
  background: #ffffff;
  border: 1px solid #cfcfcf;
  box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  max-width: 360px;
  width: 100%;
  flex: 4;
  margin: 0 10px;
  padding: 45px 20px;
  text-align: center;
`;

