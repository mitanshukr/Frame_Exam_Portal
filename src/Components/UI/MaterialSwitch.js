import React from "react";
import {
  FormControlLabel,
  makeStyles,
  Switch,
  Tooltip,
} from "@material-ui/core";

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
    <Tooltip title={props.title ? props.title : ""}>
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
        label={props.label}
      />
    </Tooltip>
  );
};

export default MaterialSwitch;
