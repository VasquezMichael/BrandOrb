import styled from "styled-components";
export const Container = styled.div`
  position: fixed;
  width: 100%;
  min-width: 300px;
  height: 100px;
  background-color: #0161bf;
  color: #fff;
  transition: all 0.3s ease-in-out;
  z-index: 100;
  padding-left: 60px;
  padding-right: 60px;
  @media screen and (min-width: 690px) {
    &.scrolled {
      opacity: 0.9;
      height: 80px;
    }
  }
  @media screen and (max-width: 690px) {
    height: 90px;
    padding-left: 20px;
    padding-right: 20px;
    &.scrolled {
      height: 80px;
      opacity: 0.9;
    }
    .Logo-Container img {
      width: 80px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  img {
    width: 105px;
  }
  @media screen and (max-width: 690px) {
    font-size: 1.7rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  top: 80px;
  gap: 20px;
  @media screen and (max-width: 690px) {
    position: absolute;
    background-color: #0161bf;
    top: 80px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 60vh;
    flex-direction: column;
    justify-content: center;
    transition: 0.9s all ease;
  }
`;

export const MenuItem = styled.li`
  font-size: 1.4rem;
  padding-left: 20px;
  .Link {
    cursor: pointer;
    font-weight: 400;
    text-decoration: none;
    @media screen and (min-width: 640px) {
      width: 100%;
      text-align: center;
    }
    &:hover {
      border-bottom: 1px solid #000;
    }
  }
  @media screen and (max-width: 690px) {
    width: 100%;
    font-size: 1.1rem;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 690px) {
    display: flex;
    cursor: pointer;
    align-items: center;

    svg {
      fill: #fff;
      margin-right: 0.5rem;
      font-size: 1.8rem;
    }
  }
`;
