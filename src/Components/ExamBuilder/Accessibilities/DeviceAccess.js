import React, { Fragment } from "react";
import FormGroup from "@material-ui/core/FormGroup";

import MaterialSwitch from "../../UI/MaterialSwitch";

const DeviceAccess = () => {
  const [state, setState] = React.useState({
    webcam: true,
    mic: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <MaterialSwitch
        size="small"
        checked={state.webcam}
        onChange={handleChange}
        name="webcam"
        label="Require Webcam"
      />
      <MaterialSwitch
        size="small"
        checked={state.mic}
        onChange={handleChange}
        name="mic"
        label="Require Microphone"
      />
    </FormGroup>
  );
};

export default DeviceAccess;
