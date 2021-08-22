import React from "react";
import FormGroup from "@material-ui/core/FormGroup";

import MaterialSwitch from "../../UI/MaterialSwitch";

const DeviceAccess = (props) => {
  return (
    <FormGroup>
      <MaterialSwitch
        size="small"
        checked={props.webcam}
        onChange={(e) => props.onChange(e)}
        name="webcam"
        label="Require Webcam"
      />
      <MaterialSwitch
        size="small"
        checked={props.mic}
        onChange={(e) => props.onChange(e)}
        name="mic"
        label="Require Microphone"
      />
    </FormGroup>
  );
};

export default DeviceAccess;
