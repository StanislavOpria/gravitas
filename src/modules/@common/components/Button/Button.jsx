import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import clsx from "clsx";

function Button(props) {
  const Component = props.component;
  return (
    <Component
      className={clsx(styles.Button, {
        [styles.Button___primary]: props.color === "primary",
        [styles.Button___secondary]: props.color === "secondary",
      })}
    >
      {props.children}
    </Component>
  );
}

Button.defaultProps = {
  component: "button",
  color: "primary",
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  component: PropTypes.elementType,
};

export default Button;
