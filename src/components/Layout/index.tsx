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

export const ColumnSkills = styled.div`
  width: calc(50% - 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Column = styled.article`
  width: 50%;
  margin: 0 20px 20px 0;
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  transition: 0.3s all ease;
`;

export const Link = styled.a`
  text-decoration: none;
  margin-bottom: 12px;
`;
