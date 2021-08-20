import React from "react";

import Card from "../../UI/Card";
import ExamValidity from "./ExamValidity";
import HighlightedInput from "./HighlightedInput";
import SwitchGroup from "./SwitchGroup";

const GeneralInfo = () => {
  return (
    <Card
      title="General Info"
      style={{
        fontSize: "14px",
        height: "355px",
        position: "sticky",
        top: "80px",
      }}
    >
      <HighlightedInput
        title="Change Exam Duration"
        name="ExamDuration"
        value="180"
        label="Exam Duration: "
        suffix=" mins"
        width="28px"
      />
      <HighlightedInput
        title="Change Value"
        name="allowedAttempts"
        value="1"
        label="No. of Attempts Allowed: "
        width="18px"
      />
      <ExamValidity />
      <hr />
      <SwitchGroup />
    </Card>
  );
};

export default GeneralInfo;
