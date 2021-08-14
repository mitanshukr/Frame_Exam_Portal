import React from "react";
import { FormGroup } from "@material-ui/core";
import MaterialSwitch from "../../UI/MaterialSwitch";

const SwitchGroup = () => {
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
        label="Shuffle Questions"
      />
      <MaterialSwitch
        size="small"
        checked={state.mic}
        onChange={handleChange}
        name="mic"
        label="Shuffle Options"
      />
      <MaterialSwitch
        size="small"
        checked={state.mic}
        onChange={handleChange}
        name="mic"
        label="Show Result"
        title="Show Result on Exam Submission"
      />
    </FormGroup>
  );
};

export default SwitchGroup;
