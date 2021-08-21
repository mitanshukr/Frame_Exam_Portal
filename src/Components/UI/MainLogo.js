import React from "react";
import HourglassFullOutlinedIcon from "@material-ui/icons/HourglassFullOutlined";
import { makeStyles, Tooltip } from "@material-ui/core";

import classes from "./MainLogo.module.css";

const useStyles = makeStyles((theme) => ({
  logoRoot: {
    fontSize: 30,
    color: "rgb(252, 224, 69)",
  },
}));
const MainLogo = () => {
  const styles = useStyles();

  return (
    <div className={classes.logo}>
      <Tooltip title="Frame Logo Home">
        <a href="/">
          <HourglassFullOutlinedIcon className={styles.logoRoot} />
          <h1>Frame</h1>
        </a>
      </Tooltip>
    </div>
  );
};

export default MainLogo;

{
  /* <div className={classes.header__logo}>
        {blackHeader && (
          <Tooltip title="Frame Logo Home">
            <a href="/teacher">
              <HourglassFullOutlinedIcon className={styles.logoRoot} />
              <h1>Frame</h1>
            </a>
          </Tooltip>
        )}
      </div> */
}
