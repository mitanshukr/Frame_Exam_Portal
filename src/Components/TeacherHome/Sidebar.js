import HourglassFullOutlinedIcon from "@material-ui/icons/HourglassFullOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

import classes from "./Sidebar.module.css";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  iconRoot: {
    fontSize: 28,
    color: "white",
    padding: "13px 0 13px 10.5px",
  },
  logoRoot: {
    fontSize: 30,
    padding: "18px 0 18px 10.5px",
  },
}));

const Sidebar = (props) => {
  const styles = useStyles();

  return (
    <div className={classes.sidebar}>
      <NavLink to="/">
        <HourglassFullOutlinedIcon
          className={`${styles.iconRoot} ${styles.logoRoot}`}
        />
      </NavLink>
      <NavLink to="/teacher/exams" activeClassName={classes.active}>
        <AssignmentOutlinedIcon className={styles.iconRoot} />
      </NavLink>
      <NavLink to="/teacher/draft" activeClassName={classes.active}>
        <BookmarkBorderOutlinedIcon className={styles.iconRoot} />
      </NavLink>
      <NavLink to="/teacher/stats" activeClassName={classes.active}>
        <EqualizerOutlinedIcon className={styles.iconRoot} />
      </NavLink>
      <NavLink to="/teacher/groups" activeClassName={classes.active}>
        <PeopleAltOutlinedIcon className={styles.iconRoot} />
      </NavLink>
      <NavLink to="/teacher/get-help" activeClassName={classes.active}>
        <HelpOutlineOutlinedIcon className={styles.iconRoot} />
      </NavLink>
    </div>
  );
};

export default Sidebar;
