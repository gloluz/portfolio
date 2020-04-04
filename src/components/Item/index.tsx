import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

const ListItem = styled.div`
  display: flex;
  justify-content: center;
`;

interface ButtonProps {
  selected: boolean;
}

const Button = styled.button<ButtonProps>`
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background: transparent;
  margin: 20px 10px;
  color: #000;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 800;
  padding: 10px 20px;
  transition: all 0.3s ease;

  ${({ selected }) =>
    selected &&
    css`
      background: #fff;
    `}

  &:hover {
    transform: scale(1.1);
  }
`;

export interface ItemProps {
  children: ReactNode;
  onClick: () => any;
  selected: boolean;
}

const Item = ({ children, onClick, selected }: ItemProps) => {
  return (
    <ListItem>
      <Button onClick={onClick} selected={selected}>
        {children}
      </Button>
    </ListItem>
  );
};

export default Item;
