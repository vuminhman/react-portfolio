import React from "react";

import "./ReusableSecondaryHeading.scss";

const ReusableSecondaryHeading = ({ icon, title }) => {
  return (
    <h4 className="secondary-heading">

      {title}
    </h4>
  );
};

export default ReusableSecondaryHeading;
