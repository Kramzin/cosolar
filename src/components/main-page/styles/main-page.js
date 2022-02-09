import styled from "styled-components/macro";

export const Item = styled.div`
  display: flex;
  // border-bottom: 2px solid rgb(250, 126, 118);
  // padding: 40px 5%;
  padding-bottom: 20px;
  color: white;
  background: black;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  // max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;
  color: inherit;
  background: black;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  padding-top: 10px;
  font-weight: normal;
  line-height: normal;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  transition: all 0.45s ease;
  transition-property: transform, box-shadow background;
  border-radius: 10px;
  background: radial-gradient(
    circle,
    rgba(0, 0, 255, 0.04) 0%,
    rgba(0, 0, 0, 0.01) 100%
  );
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 255, 0.53) 1px 1px 60px;
    background: radial-gradient(
      circle,
      rgba(0, 0, 255, 0.2) 0%,
      rgba(0, 0, 0, 0.01) 100%
    );
  }
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Contain = styled.div`
  // border-bottom: 4px solid #222;
  padding: 0px;
  color: white;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 20, 0.7),
      rgba(0, 0, 0, 0.99)
    ),
    url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : "../images/background_contain.jpg"})
      top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const ContainConsultation = styled.div`
  padding: 30px 5px 5px;
  margin-top: -20px;
  color: white;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-top: 10px solid black;
  border-bottom: 1px solid black;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const ContainPartners = styled.div`
  color: white;
  padding: 20px 0px 0px 0px;
  background-color: #142c47;
  border-bottom: 3px solid black;
  border-top: 3px solid black;
`;
