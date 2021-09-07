import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid rgb(198, 35, 104);
  text-align: center;
  padding: 50px 45px;
  @media (max-width: 900px) {
    padding: 20px 45px;
    border-bottom: 2px solid rgb(198, 35, 104);
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 38px;
  font-weight: 500;
  margin: auto;
  text-shadow: 1px 1px 5px black;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 30px;
  font-weight: normal;
  margin: 16px auto;
  text-shadow: 1px 1px 5px black;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
