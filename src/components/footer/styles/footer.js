import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 55px 0;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #ababab;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  letter-spacing: 0.08em;
`;

export const Title = styled.p`
  font-size: 17px;
  width: fit-content;
  color: #ababab;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #ababab;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
