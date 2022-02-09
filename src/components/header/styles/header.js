import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : "../images/background_up.jpg"})
      center / cover no-repeat;
  @media (max-width: 1100px) {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${({ src }) =>
          src ? `../images/misc/${src}.jpg` : "../images/Summer.jpg"})
        center / cover no-repeat;
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  min-height: 100px;
  position: fixed;
  z-index: 100;
  margin-bottom: 0px;
  width: 100%;
  border-bottom: 2px solid black;
  background: white;
  justify-content: space-between;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
    display: flex;
    position: inherit;
    flex-direction: column;
    align-items: center;
    height: auto;
    justify-content: space-between;
  }
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: flex;
  background-color: #e50914;
  width: fit-content;
  text-align: center;
  align-items: center;
  height: fit-content;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0px 10px 0px 0px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #151313;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Logo = styled.img`
  height: 160 px;
  width: 322px;
  // object-fit: cover;
  margin: 0px 0px 8px 10px;

  @media (max-width: 380px) {
    height: 85px;
    width: 250px;
    margin: 0px 0px 8px 10px;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.161s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;

export const AddressMobile = styled.div`
  color: black;
  margin-right: 10px;
  padding: 0px 5px 5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
  font-size: 1.6rem;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.07em;
  font-weight: 900;
  line-height: 1;
  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 12px;
  }
  @media (max-width: 362px) {
    font-size: 1.35rem;
    padding: 0px 0px 10px;
  }
`;
