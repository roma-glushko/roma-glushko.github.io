import React from "react";
import Logo from "../theme/logo"

import "./cv-header.css"

const CvHeader = ({position}) => {
  return (
    <div className="cv-header-wrapper">
      <div className="logo">
        <div className="avatar">
          <Logo />
        </div>
      </div>
      <hgroup>
        <h1 className="cv-name">Roman <strong>Glushko</strong></h1>
        <h2 className="cv-position">{position}</h2>
      </hgroup>
    </div>
  );
};

export default CvHeader;