import React, { ReactNode } from "react";
import styled from "styled-components";

const ListItem = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #000;
  font-size: 30px;
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
}

const Item = ({ children }: ItemProps) => {
  return (
    <ListItem>
      <Button>{children}</Button>
    </ListItem>
  );
};

export default Item;
