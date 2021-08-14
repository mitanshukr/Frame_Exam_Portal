import React from "react";

import DeviceAccess from "./DeviceAccess";
import PasswordAccess from "./PasswordAccess";
import Card from "../../UI/Card";

const Accessibilities = () => {
  return (
    <Card title="Accessibilities" style={{ height: "220px" }}>
      <DeviceAccess />
      <hr />
      <PasswordAccess />
    </Card>
  );
};

export default Accessibilities;
