import React from "react";

import DeviceAccess from "./DeviceAccess";
import PasswordAccess from "./PasswordAccess";
import Card from "../../UI/Card";

const Accessibilities = (props) => {
  return (
    <Card
      title="Accessibilities"
      style={{ height: "220px", position: "sticky", top: "80px" }}
    >
      <DeviceAccess
        webcam={props.webcam}
        mic={props.mic}
        onChange={props.onChange}
      />
      <hr />
      <PasswordAccess setPassword={props.setPassword} />
    </Card>
  );
};

export default Accessibilities;
