import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 40px;
  gap: 20px;
  @media screen and (min-width: 690px) {
    flex-direction: row;
  }
`;
