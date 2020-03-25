import React from "react";
import { Link, Picture, Overlay, Text, PictureSubTite } from ".";

export interface ProjectProps {
  websiteUrl: string;
  pictureSrc: string;
  title: string;
  subTitle: string;
}

const Project = ({ websiteUrl, pictureSrc, title, subTitle }: ProjectProps) => {
  return (
    <Link href={websiteUrl}>
      <Picture src={pictureSrc} alt={title} />
      <Overlay>
        <Text>{title}</Text>
        <PictureSubTite>{subTitle}</PictureSubTite>
      </Overlay>
    </Link>
  );
};

export default Project;
