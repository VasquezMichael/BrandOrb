import styled from "styled-components";
import hero from "../../assets/BannerOrb.png";
export const Container = styled.div({
  display: "flex",
  position: "relative",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
  backgroundImage: `
  url(${hero});`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
  backgroundPosition: "center",
});

export const Button = styled.button`
  display: block;
  height: 50px;
  width: 160px;
  margin-top: 150px;
  border-radius: 3px;
  border-color: transparent;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #0161bf;
    opacity: 0.8;
    color: #fff;
    transform: translate(0px, -4px);
  }
`;
