import React, { ReactNode } from "react";
import styled from "styled-components";

interface ListItemProps {
  rotate: string;
}

const ListItem = styled.div<ListItemProps>`
  display: flex;
  justify-content: center;
  transform: rotate(${({ rotate }) => rotate}deg);
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background: #fff;
  margin: 20px 40px 20px 0;
  color: #000;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 800;
  padding: 10px 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export interface ItemProps {
  children: ReactNode;
  onClick: () => any;
  rotate: string;
}

const Item = ({ children, onClick, rotate }: ItemProps) => {
  return (
    <ListItem rotate={rotate}>
      <Button onClick={onClick}>{children}</Button>
    </ListItem>
  );
};

export default Item;
