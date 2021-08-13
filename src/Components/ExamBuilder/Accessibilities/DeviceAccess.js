import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

import classes from "./DeviceAccess.module.css";

const DeviceAccess = () => {
  const [state, setState] = React.useState({
    webcam: true,
    mic: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    // <FormControl component="fieldset" className={classes.deviceAccess}>
    //   <FormLabel component="legend" className={classes.deviceAccess__title}>
    //     Accessibilities
    //   </FormLabel>
    <FormGroup className={classes.deviceAccess__body}>
      <FormControlLabel
        className={classes.deviceAccess__switch}
        control={
          <Switch
          size="small"
            checked={state.webcam}
            onChange={handleChange}
            name="webcam"
          />
        }
        label="Require Webcam"
      />
      <FormControlLabel
        className={classes.deviceAccess__switch}
        control={
          <Switch size="small" checked={state.mic} onChange={handleChange} name="mic" />
        }
        label="Require Microphone"
      />
    </FormGroup>
    //   {/* <FormHelperText>Be careful</FormHelperText> */}
    // </FormControl>
  );
};

export default DeviceAccess;
