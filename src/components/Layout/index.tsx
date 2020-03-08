import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 38px;
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: #4f4f4f;
  font-size: 20px;
  line-height: 40px;
  font-weight: 400;
  margin-top: 30px;
  margin-left: 20px;
`;

export const Column = styled.article`
  width: 50%;
  margin: 0 20px 20px 0;
`;
