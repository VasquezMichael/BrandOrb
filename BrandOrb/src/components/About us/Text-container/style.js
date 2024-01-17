import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  line-height: 1.6;
  p {
    color: #555;
  }
  h1 {
    color: #333;
    margin-bottom: 20px;
  }
  .highlight {
    color: #0161bf;
    font-size: 17px;
  }

  @media screen and (min-width: 690px) {
    background: linear-gradient(to bottom, #aedef9, #ffffff);
    border-radius: 10px;
    padding: 35px;
  }
`;

export const Button = styled.button`
  width: 80%;
  height: 45px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 3px;
  border-color: transparent;
  background-color: #0161b0;
  color: #fff;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translate(0px, -4px);
  }
`;
