import { Fragment } from "react";
import Accessibilities from "./Accessibilities/Accessibilities";
import BuilderMenu from "./BuilderMenu/BuilderMenu";
import GeneralInfo from "./GeneralInfo/GeneralInfo";

import classes from "./ExamBuilder.module.css";
import CentralMain from "./CentralMain/CentralMain";

const ExamBuilder = () => {
  return (
    <Fragment>
      <BuilderMenu />
      <main className={classes.main}>
        <Accessibilities />
        <CentralMain />
        <GeneralInfo />
      </main>
    </Fragment>
  );
};

export default ExamBuilder;
