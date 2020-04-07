import React from "react";

import Resume from "../../assets/CV.pdf";

import {
  Character,
  PaperSheet,
  Line,
  CV,
  DownloadContainer,
  Arrow,
} from "./styles";

const Avatar = () => {
  return (
    <>
      <Character>
        <PaperSheet>
          <div>Gloria Luzio</div>
          <Line width={110} />
          <Line width={50} />
          <Line width={80} />
          <Line width={60} />
          <Line width={100} />
          <CV href={Resume} target="_blank">
            <DownloadContainer>
              <Arrow />
            </DownloadContainer>
            <div>Mon CV </div>
          </CV>
        </PaperSheet>
      </Character>
    </>
  );
};

export default Avatar;
