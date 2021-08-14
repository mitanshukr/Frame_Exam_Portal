import React from "react";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  labelRoot: {
    fontSize: 13,
    marginTop: 3,
  },
  inputRoot: {
    padding: 0,
    margin: 0,
    fontSize: 13,
    width: 135,
  },
  iconRoot: {
    padding: 0,
    margin: 0,
    transform: "scale(.8)",
  },
}));

const MaterialDateTimePicker = (props) => {
  const classes = useStyles();
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDateTimePicker
          variant="inline"
          ampm={true}
          label={props.label}
          value={props.value}
          onChange={props.onChange}
          onError={props.onError}
          disablePast
          format="yyyy/MM/dd HH:mm"
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
              focused: classes.labelFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.inputRoot,
            },
          }}
          KeyboardButtonProps={{
            classes: {
              root: classes.iconRoot,
            },
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default MaterialDateTimePicker;
