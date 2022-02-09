import styled from "styled-components/macro";

export const Container = styled.form`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin-top: -65px;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 0%;
  border: 0;
  padding: 0px;
  height: 70px;
  box-sizing: border-box;
`;

export const InputContacts = styled.input`
  border: 1px solid black;
  color: black;
  height: 60px;
  line-weight: 50px;
  padding: 5px 20px;
  margin-bottom: 15px;
  margin-right: 10px;
  margin-left: 10px;

  &:last-of-type {
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #0013fa;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    background: #a7233a;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  color: black;
  text-align: center;
  margin-top: 25px;

  @media (max-width: 1260px) {
    font-size: 16px;
    margin-top: 15px;
    line-height: 22px;
    width: fit-content;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`;
