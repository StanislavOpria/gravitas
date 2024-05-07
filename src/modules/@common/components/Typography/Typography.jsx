import React from "react";
import PropTypes from "prop-types";
import styles from "./Typography.module.scss"; // Import CSS module

function Typography({ variant, ...rest }) {
  const className = `${styles.Typography} ${styles[variant]}`;
  return <div className={className} {...rest}></div>;
}

Typography.defaultProps = {
  variant: "div",
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
};

export default Typography;
