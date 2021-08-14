import MaterialDateTimePicker from "../../UI/MaterialDateTimePicker";
import classes from "./ExamValidity.module.css";

const ExamValidity = (props) => {
  return (
    <div className={classes.divBox}>
      <label className={classes.divBox__label}>Exam Validity:</label>
      <MaterialDateTimePicker
        label="Start Date"
        value={Date.now()}
        onChange={() => {}}
        onError={console.log}
      />
      <MaterialDateTimePicker
        label="End Date"
        value={Date.now()}
        onChange={() => {}}
        onError={console.log}
      />
    </div>
  );
};

export default ExamValidity;
