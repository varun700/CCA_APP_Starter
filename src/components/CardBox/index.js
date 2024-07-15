import React from "react";
import PropTypes from "prop-types";

const CardBox = ({
  heading,
  children,
  styleName,
  childrenStyle,
  heading_Space,
}) => {
  return (
    <div className={`gx-card ${styleName}`}>
      {heading && (
        <div className="gx-card-head">
          <h3 className={`gx-card-title ${heading_Space}`}>{heading}</h3>
        </div>
      )}
      <div className={`gx-card-body ${childrenStyle}`}>{children}</div>
    </div>
  );
};

export default CardBox;

CardBox.propTypes = {
  children: PropTypes.node.isRequired,
};

CardBox.defaultProps = {
  styleName: "",
  childrenStyle: "",
};
