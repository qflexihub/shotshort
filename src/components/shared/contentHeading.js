import styled from "styled-components";

const ContentHeading = ({ data }) => {
  return (
    <HeadingContainer>
        <ContentTitle>{data?.title}</ContentTitle>
        {data.subtitle && <ContentSubTitle>{data?.subtitle}</ContentSubTitle>}
    </HeadingContainer>
  );
};
export default ContentHeading;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const ContentTitle = styled.p`
  font-weight: 700;
  font-size: 54px;
  line-height: 62px;
  display: flex;
  align-items: center;
  text-align: center;
`;


const ContentSubTitle = styled.p`
  padding: 20px;
  width: 70%;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #555555;
  display: flex;
  align-items: center;
  text-align: center;
`;