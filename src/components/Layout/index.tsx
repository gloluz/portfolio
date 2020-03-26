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
  font-size: 28px;
  font-weight: bold;
  line-height: 28px;
  text-transform: uppercase;
  color: #fff;
  transition: 0.3s all ease;
  position: absolute;
  bottom: -30px;
  left: 40px;
`;

export const PictureSubTite = styled.span`
  font-size: 20px;
  line-height: 20px;
  color: #fff;
  transition: 0.4s all ease;
  position: absolute;
  bottom: -30px;
  left: 40px;
`;

export const Link = styled.a`
  text-decoration: none;
  margin-bottom: 20px;
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
    bottom: 40%;
    line-height: 26px;
  }
`;

export const Education = styled.div`
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
  background-color: #d1d1e0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
`;
