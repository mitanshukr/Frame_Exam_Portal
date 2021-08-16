import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className}`}
      style={{ ...props.style }}
    >
      <h3 className={classes.card__title}>{props.title}</h3>
      {props.children}
    </div>
  );
};

export default Card;
