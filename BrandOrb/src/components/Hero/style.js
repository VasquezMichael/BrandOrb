import styled from "styled-components";
import hero from "../../assets/BannerOrb.png";
export const Container = styled.div({
  display: "flex",
  position: "absolute",
  width: "100%",
  height: "100%",
  marginTop: "90px",
  backgroundImage: `
  url(${hero});`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
  backgroundPosition: "center",
});
