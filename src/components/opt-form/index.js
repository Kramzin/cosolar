import React from "react";
import {
  Container,
  Input,
  InputContacts,
  Break,
  Button,
  Text,
} from "./styles/opt-form";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

OptForm.InputContacts = function OptFormInputContacts({
  children,
  ...restProps
}) {
  return <InputContacts {...restProps}>{children}</InputContacts>;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="./images/chevron-right.png" alt="Позвоните мне" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
