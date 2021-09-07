import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  ButtonLink,
  PlayButton,
  Link,
  Container,
  Logo,
  FeatureCallOut,
  Feature,
  Text,
  TextLink,
  AddressMobile,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature>{children}</Feature>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.AddressMobile = function HeaderAddressMobile({
  children,
  ...restProps
}) {
  return <AddressMobile {...restProps}>{children}</AddressMobile>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
