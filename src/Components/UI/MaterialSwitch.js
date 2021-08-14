import React from "react";
import { FormControlLabel, makeStyles, Switch } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  switch: {
    "& > span": {
      fontSize: 14,
      margin: "3px 0 3px 3px",
    },
  },
}));

const MaterialSwitch = (props) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.switch}
      control={
        <Switch
          size={props.size}
          checked={props.checked}
          onChange={props.onChange}
          name={props.name}
        />
      }
      title={props.title}
      label={props.label}
    />
  );
};

export default MaterialSwitch;
