import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 195px 0px 85px 50px;
  @media (max-width: 500px) {
    padding: 25px 55px;
  }
`;

export const Title = styled.h1`
  color: black;
  max-width: 640px;
  font-size: 38px;
  font-weight: 500;
  margin: auto;
  text-shadow: 1px 1px 1px black;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.h2`
  color: black;
  font-size: 27px;
  max-width: 640px;
  font-weight: normal;
  margin: 16px auto;
  text-shadow: 1px 1px 1px black;

  @media (max-width: 600px) {
    font-size: 17px;
  }
`;
