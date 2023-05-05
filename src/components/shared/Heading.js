import styled from "styled-components";

const Heading = styled.h2`
  font-size: ${(props) => (props.fontSize || 54) + "px"};
  margin: 0px;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => props.fontWeight || "700"};
  margin-bottom: ${(props) => (props.marginBottom || 0) + "px"};
  margin-right: ${(props) => (props.marginRight || 0) + "px"};
  margin-left: ${(props) => (props.marginLeft || 0) + "px"};
  margin-top: ${(props) => (props.marginTop || 0) + "px"};
  font-family: ${(props) => props.fontFamily || "GT Walsheim Pro"};
  line-height: ${(props) =>
    (props.lineHeight || (props.fontSize || 54) + 8) + "px"};
  @media (max-width: 500px) {
    font-size: ${(props) =>
      (props.mobileFontSize || props.fontSize || 24) + "px"};
  }
`;

export default Heading;
