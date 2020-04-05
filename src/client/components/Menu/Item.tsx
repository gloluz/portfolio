import React, { ReactNode } from "react";
import { useRouteMatch } from "react-router-dom";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const ListItem = styled.div`
  display: flex;
  justify-content: center;
`;

interface ButtonProps {
  selected: boolean;
}

const Button = styled(Link)<ButtonProps>`
  text-decoration: none;
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
  path: string;
}

const Item = ({ children, path }: ItemProps) => {
  let match = Boolean(
    useRouteMatch({
      path,
      exact: true
    })
  );

  return (
    <ListItem>
      <Button to={path} selected={match}>
        {children}
      </Button>
    </ListItem>
  );
};

export default Item;
