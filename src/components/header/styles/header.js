import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.35),
      rgba(198, 35, 104, 0.1),
      rgba(198, 35, 104, 0.2),
      rgba(198, 35, 104, 0.3),
      rgba(198, 35, 104, 0.5),
      rgba(198, 35, 104, 0.8),
      rgba(198, 35, 104, 0.9),
      rgba(198, 35, 104, 1)
    ),
    url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : "../images/background_up.jpg"})
      top left / cover no-repeat;

  @media (max-width: 1100px) {
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.35),
        rgba(198, 35, 104, 0.1),
        rgba(198, 35, 104, 0.2),
        rgba(198, 35, 104, 0.3),
        rgba(198, 35, 104, 0.5),
        rgba(198, 35, 104, 0.8),
        rgba(198, 35, 104, 0.9),
        rgba(198, 35, 104, 1)
      ),
      url(${({ src }) =>
          src ? `../images/misc/${src}.jpg` : "../images/Summer.jpg"})
        top left / cover no-repeat;
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 56px;
  height: auto;
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 56px;
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
  background-color: black;
  width: fit-content;
  text-align: center;
  align-items: center;
  height: fit-content;
  color: white;
  border: 1px solid #e6f2ff;
  font-size: 17px;
  border-radius: 10px;
  padding: 10px 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #151313;
    color: white;
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
  height: 200px;
  width: 240px;

  @media (mi-width: 1) {
    height: 145px;
    width: 310px;
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
  padding: 0px 5px 15px;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.9);
  font-size: 1.58rem;
  text-align: center;
  font-family: "Lato", sans-serif;
  letter-spacing: 0.05em;
  font-weight: 900;
  line-height: 1;
  @media (max-width: 600px) {
    font-size: 1.39rem;
  }
`;
