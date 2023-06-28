import React from "react";
import PropTypes from "prop-types";

function Typography() {
  return <div></div>;
}

Typography.defaultProps = {
  component: div,
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "inherit",
  ]).isRequired,
  component: PropTypes.elementType,
};

export default Typography;
