import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Overlay } from "../Layout";

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
