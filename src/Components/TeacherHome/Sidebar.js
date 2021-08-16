import HourglassFullOutlinedIcon from "@material-ui/icons/HourglassFullOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

import classes from "./Sidebar.module.css";
import { makeStyles } from "@material-ui/core";

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
      <a href="#" class="active">
        <HourglassFullOutlinedIcon
          className={`${styles.iconRoot} ${styles.logoRoot}`}
        />
      </a>
      <a href="#">
        <AssignmentOutlinedIcon className={styles.iconRoot} />
      </a>
      <a href="#">
        <BookmarkBorderOutlinedIcon className={styles.iconRoot} />
      </a>
      <a href="#">
        <EqualizerOutlinedIcon className={styles.iconRoot} />
      </a>
      <a href="#">
        <PeopleAltOutlinedIcon className={styles.iconRoot} />
      </a>
      <a href="#">
        <HelpOutlineOutlinedIcon className={styles.iconRoot} />
      </a>
    </div>
  );
};

export default Sidebar;
