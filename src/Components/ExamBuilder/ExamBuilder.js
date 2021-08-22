import { Fragment, useReducer } from "react";
import Accessibilities from "./Accessibilities/Accessibilities";
import BuilderMenu from "./BuilderMenu/BuilderMenu";
import GeneralInfo from "./GeneralInfo/GeneralInfo";

import classes from "./ExamBuilder.module.css";
import CentralMain from "./CentralMain/CentralMain";
import GetHelp from "./GetHelp/GetHelp";

const defaultExamData = {
  name: "Untitled Exam",
  duration: 180,
  startDate: null,
  endDate: null,
  allowedAttempts: 1,
  shuffleQuestions: true,
  shuffleOptions: false,
  showResult: false,
  webcam: true,
  mic: false,
  published: false,
  requirePassword: false,
  password: null,
  accessLink: null,
  allowedAccess: true,
  userAccess: [],
  questions: [],
  creator: {},
};

const examDataReducer = (state, action) => {
  const copyState = { ...state };
  if (action.type === "accessibility") {
    copyState[action.payload.name] = action.payload.value;
    return copyState;
  }
  if (action.type === "setPassword") {
    copyState.requirePassword = action.payload.status;
    copyState.password = action.payload.password;
    return copyState;
  }
  return state;
};

const ExamBuilder = () => {
  const [examState, dispatchExamState] = useReducer(
    examDataReducer,
    defaultExamData
  );

  const accessibilityChangeHandler = (e) => {
    const name = e.target.name;
    dispatchExamState({
      type: "accessibility",
      payload: { name: name, value: e.target.checked },
    });
  };

  const setPasswordHandler = (status, password) => {
    dispatchExamState({
      type: "setPassword",
      payload: { status, password },
    });
  };

  console.log(examState);
  return (
    <Fragment>
      <BuilderMenu />
      <main className={classes.main}>
        <div>
          <Accessibilities
            onChange={accessibilityChangeHandler}
            webcam={examState.webcam}
            mic={examState.mic}
            setPassword={setPasswordHandler}
          />
          <GetHelp />
        </div>
        <CentralMain />
        <GeneralInfo />
      </main>
    </Fragment>
  );
};

export default ExamBuilder;
