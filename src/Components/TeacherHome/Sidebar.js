import HourglassFullOutlinedIcon from "@material-ui/icons/HourglassFullOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

import classes from "./Sidebar.module.css";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  iconRoot: {
    fontSize: 28,
    color: "white",
    padding: "13px 0 13px 13px",
  },
  logoRoot: {
    fontSize: 30,
    padding: "18px 0 18px 13px",
    color: "rgb(252, 224, 69);",
  },
}));

const Sidebar = (props) => {
  const styles = useStyles();
  const [sidebarExpanded, setSidebarExpansion] = useState(false);

  const hoverHandler = (status) => {
    if (status === "ENTER") {
      setSidebarExpansion(true);
    } else if (status === "LEAVE") {
      setSidebarExpansion(false);
    }
  };

  const navLinkNameStyle = `${classes.navLinkName} ${
    sidebarExpanded ? classes.navLinkName__visible : ""
  }`;
  return (
    <div
      onMouseEnter={hoverHandler.bind(this, "ENTER")}
      onMouseLeave={hoverHandler.bind(this, "LEAVE")}
      className={`${classes.sidebar} ${
        sidebarExpanded ? classes.sidebarHover : ""
      }`}
    >
      <a href="/teacher">
        <HourglassFullOutlinedIcon
          className={`${styles.iconRoot} ${styles.logoRoot}`}
        />
        <h1 className={`${navLinkNameStyle} ${classes.navLogo}`}>Frame</h1>
      </a>
      <NavLink
        to="/teacher/exams"
        onMouseEnter={hoverHandler.bind(this, "ENTER")}
        onMouseDown={hoverHandler.bind(this, "LEAVE")}
        activeClassName={classes.active}
      >
        <AssignmentOutlinedIcon className={styles.iconRoot} />
        <span className={navLinkNameStyle}>Exams</span>
      </NavLink>
      <NavLink
        to="/teacher/draft"
        onMouseEnter={hoverHandler.bind(this, "ENTER")}
        onMouseDown={hoverHandler.bind(this, "LEAVE")}
        activeClassName={classes.active}
      >
        <BookmarkBorderOutlinedIcon className={styles.iconRoot} />
        <span className={navLinkNameStyle}>Drafts</span>
      </NavLink>
      <NavLink
        to="/teacher/performance"
        onMouseEnter={hoverHandler.bind(this, "ENTER")}
        onMouseDown={hoverHandler.bind(this, "LEAVE")}
        activeClassName={classes.active}
      >
        <EqualizerOutlinedIcon className={styles.iconRoot} />
        <span className={navLinkNameStyle}>Performance</span>
      </NavLink>
      <NavLink
        to="/teacher/groups"
        onMouseEnter={hoverHandler.bind(this, "ENTER")}
        onMouseDown={hoverHandler.bind(this, "LEAVE")}
        activeClassName={classes.active}
      >
        <PeopleAltOutlinedIcon className={styles.iconRoot} />
        <span className={navLinkNameStyle}>Groups</span>
      </NavLink>
      <NavLink
        to="/teacher/get-help"
        onMouseEnter={hoverHandler.bind(this, "ENTER")}
        onMouseDown={hoverHandler.bind(this, "LEAVE")}
        activeClassName={classes.active}
      >
        <HelpOutlineOutlinedIcon className={styles.iconRoot} />
        <span className={navLinkNameStyle}>Get Help</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
