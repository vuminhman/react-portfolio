import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ReusablePrimaryHeading.scss";

const ReusablePrimaryHeading = ({ icon, title }) => {
  return (
    <h2>
      <FontAwesomeIcon icon={icon} className="icon" />
      {title}
    </h2>
  );
};

export default ReusablePrimaryHeading;
