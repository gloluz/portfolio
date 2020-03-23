import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  margin-top: 70px;
  margin-bottom: 60px;
  font-size: 38px;
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
`;

export const SubTitle = styled.p`
  color: #82bae0;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: #4f4f4f;
  font-size: 16px;
  line-height: 40px;
  font-weight: 400;
  margin-top: 20px;
  margin-left: 20px;
`;

export const ColumnSkills = styled.article`
  width: 50%;
  margin: 0 20px 20px 0;
`;

export const Column = styled.article`
  width: calc(33% - 10px);
  margin: 0 10px 40px 0;
`;

export const Picture = styled.img`
  width: 350px;
  height: 200px;
  object-fit: cover;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #999999;
`;
