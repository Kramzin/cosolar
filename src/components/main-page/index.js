import React from "react";
import {
  Container,
  Inner,
  Item,
  Pane,
  Title,
  SubTitle,
  Image,
  Contain,
  ContainConsultation,
  ContainPartners,
} from "./styles/main-page";
export default function MainPage({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

MainPage.Container = function MainPageContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

MainPage.Pane = function MainPagePane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

MainPage.Title = function MainPageTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

MainPage.SubTitle = function MainPageSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

MainPage.Image = function MainPageImage({ ...restProps }) {
  return <Image {...restProps} />;
};

MainPage.Contain = function MainPageContain({ children, ...restProps }) {
  return <Contain {...restProps}>{children}</Contain>;
};

MainPage.ContainConsultation = function MainPageContainConsultation({
  children,
  ...restProps
}) {
  return <ContainConsultation {...restProps}>{children}</ContainConsultation>;
};

MainPage.ContainPartners = function MainPageContainPartners({
  children,
  ...restProps
}) {
  return <ContainPartners {...restProps}>{children}</ContainPartners>;
};
