import styled from "styled-components";
import { MEDIA } from "../../constant";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const BoxedContainer = styled.div`
  width: 1300px;
  max-width: 100%;
  margin: 0 auto;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  position: relative;
  z-index: 100;
  height: 90px;

  ${MEDIA.MAX.s} {
    display: none;
  }
`;

export const PostItContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 800px;

  ${MEDIA.MAX.xs} {
    width: 100%;
  }
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

  ${MEDIA.MAX.s} {
    width: 100%;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
