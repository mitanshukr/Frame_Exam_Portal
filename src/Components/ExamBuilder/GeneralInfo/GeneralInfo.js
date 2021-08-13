import React from "react";
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import Card from "../../UI/Card";

const GeneralInfo = () => {
  const [state, setState] = React.useState({
    webcam: true,
    mic: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Card title="General Info">
      <div>Exam Duration: 180mins</div>
      <div>
        Exam Validity:
        <div>Start: 13-Aug-21 16:00 IST</div>
        <div>End: 14-Aug-21 16:00 IST</div>
      </div>
      <div>No. of Allowed Attempts: 1</div>
      <hr />
      <FormGroup>
        <FormControlLabel
          //   className={classes.deviceAccess__switch}
          control={
            <Switch
              size="small"
              checked={state.webcam}
              onChange={handleChange}
              name="webcam"
            />
          }
          label="Shuffle Questions"
        />
        <FormControlLabel
          //   className={classes.deviceAccess__switch}
          control={
            <Switch
              size="small"
              checked={state.mic}
              onChange={handleChange}
              name="mic"
            />
          }
          label="Shuffle Options"
        />
        <FormControlLabel
          //   className={classes.deviceAccess__switch}
          control={
            <Switch
              size="small"
              checked={state.mic}
              onChange={handleChange}
              name="mic"
            />
          }
          label="Show Result"
        />
      </FormGroup>
    </Card>
  );
};

export default GeneralInfo;
