import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  position: fixed;
  top: 140px;
  bottom: 0;
  right: 0;
  width: 60%;
`;

export const Title = styled.h2`
  margin-top: 50px;
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

export const ColumnProject = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Column = styled.article`
  width: 70%;
  margin: 0 20px 20px 0;
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s all ease;
`;

export const Overlay = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.3s all ease;
`;

export const PictureTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  text-transform: uppercase;
  color: #fff;
  transition: 0.3s all ease;
  position: absolute;
  bottom: -30px;
  left: 20px;
`;

export const PictureSubTite = styled.span`
  font-size: 16px;
  line-height: 16px;
  color: #fff;
  transition: 0.4s all ease;
  position: absolute;
  bottom: -30px;
  left: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 0;
  overflow: hidden;

  &:hover ${Overlay} {
    opacity: 1;
  }

  &:hover ${Picture} {
    transform: scale(1.1);
  }

  &:hover ${PictureTitle} {
    bottom: 50%;
  }

  &:hover ${PictureSubTite} {
    bottom: 35%;
    line-height: 22px;
  }
`;

export const EducationStyled = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-bottom: 60px;
`;

export const EducationTitle = styled.p`
  color: #82bae0;
  font-size: 22px;
  line-height: 36px;
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
  width: 50%;
  margin: 0 40px;
`;

export const EducationResume = styled.p`
  color: #4f4f4f;
  font-size: 16px;
  line-height: 40px;
  font-weight: 400;
  width: 50%;
  margin: 0 40px;
`;

export const HorizontalBorder = styled.div`
  width: 3px;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
`;
