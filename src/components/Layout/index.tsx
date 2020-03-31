import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Container = styled.div`
  display: flex;
  width: 1300px;
  margin: 0 auto;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 40px 0 0;
`;

export const Sidebar = styled.div`
  padding: 0 100px;
`;

export const Content = styled.div`
  position: relative;
  flex: 1;
  margin-top: 20px;
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
  width: calc(50% - 5px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Column = styled.article`
  width: 70%;
  margin: 0 20px 20px 0;
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
  font-size: 22px;
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
  font-size: 18px;
  line-height: 28px;
  color: #fff;
  transition: 0.4s all ease;
  position: absolute;
  bottom: -30px;
  left: 20px;
`;

export const Picture = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s all ease !important;
`;

export const Link = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 0;
  overflow: hidden;
  margin-bottom: 10px;

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
  align-items: center;
  padding-bottom: 60px;
  position: relative;
`;

interface EducationTitleProps {
  rotate: number;
}

export const EducationTitle = styled.h2<EducationTitleProps>`
  color: #82bae0;
  font-size: 22px;
  line-height: 36px;
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
  width: 45%;
  margin: 0 140px;
  background-color: #fff;
  padding: 40px 30px;
  transition: 0.2s all ease;
  transform-origin: top;
  transform: rotate(${({ rotate }) => rotate}deg);
  position: relative;
  z-index: 1;
`;

export const EducationResume = styled.p`
  color: #fff;
  font-size: 26px;
  font-weight: 100;
  width: 50%;
  margin: 20px 40px 0 40px;
  padding: 20px;
  font-family: "Vibur", cursive;
`;

export const HorizontalBorder = styled.div`
  width: 6px;
  height: 110%;
  background: linear-gradient(45deg, #e87f79 28%, transparent 28%) 10px 10px /
      10px 10px,
    linear-gradient(45deg, transparent 50%, #e87f79 50%) 10px 10px / 10px 10px,
    #dc119d;
  position: absolute;
  top: -25px;
  bottom: 0;
  left: calc(30% - 20px);
`;
