import React, { ReactNode } from "react";
import { Link, Overlay, PictureTitle, PictureSubTite, Picture } from ".";
import "react-lazy-load-image-component/src/effects/blur.css";

export interface ProjectProps {
  websiteUrl: string;
  pictureSrc: string;
  title: string;
  subTitle: string | ReactNode;
}

const Project = ({ websiteUrl, pictureSrc, title, subTitle }: ProjectProps) => {
  return (
    <Link href={websiteUrl}>
      <Picture src={pictureSrc} alt={title} effect="blur" delayTime={300} />
      <Overlay>
        <PictureTitle>{title}</PictureTitle>
        <PictureSubTite>{subTitle}</PictureSubTite>
      </Overlay>
    </Link>
  );
};

export default Project;
