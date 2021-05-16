import React from "react";
import Logo from "../theme/logo"

import "./cv-header.css"

const CvHeader = ({position}) => {
  return (
    <div className="cv-header-wrapper">
      <div className="logo">
        <div itemProp="image" className="avatar">
          <Logo />
        </div>
      </div>
      <hgroup>
        <h2 itemProp="name" className="cv-name">Roman <strong>Glushko</strong></h2>
        <h1 itemProp="jobTitle" className="cv-position">{position}</h1>
      </hgroup>
    </div>
  );
};

export default CvHeader;