import React from "react";
import PropTypes from "prop-types";

function Link() {
  return <div></div>;
}

Link.defaultProps = {
  component: div,
};

Link.propTypes = {
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

export default Link;
