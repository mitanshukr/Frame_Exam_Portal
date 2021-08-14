import { Fragment } from "react";
import Accessibilities from "./Accessibilities/Accessibilities";
import BuilderMenu from "./BuilderMenu/BuilderMenu";
import GeneralInfo from "./GeneralInfo/GeneralInfo";

import classes from "./ExamBuilder.module.css";
import CentralMain from "./CentralMain/CentralMain";
import GetHelp from "./GetHelp/GetHelp";

const ExamBuilder = () => {
  return (
    <Fragment>
      <BuilderMenu />
      <main className={classes.main}>
        <div>
        <Accessibilities />
        <GetHelp />
        </div>
        <CentralMain />
        <GeneralInfo />
      </main>
    </Fragment>
  );
};

export default ExamBuilder;
