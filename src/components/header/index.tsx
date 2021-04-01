import React from "react";

import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProp {
  onHandleModal: React.MouseEventHandler;
}

export const Header: React.FC<HeaderProp> = ({ onHandleModal }) => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />

        <button type="button" onClick={onHandleModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
