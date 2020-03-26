import React, { ReactNode } from "react";
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
      <Picture src={pictureSrc} alt={title} />
      <Overlay>
        <PictureTitle>{title}</PictureTitle>
        <PictureSubTite>{subTitle}</PictureSubTite>
      </Overlay>
    </Link>
  );
};

export default Project;
