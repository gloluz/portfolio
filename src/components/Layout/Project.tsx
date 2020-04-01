import React, { ReactNode } from "react";

import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, Picture, Overlay, PictureTitle, PictureSubTite } from ".";

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
