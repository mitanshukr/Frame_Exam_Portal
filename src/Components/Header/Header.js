import { Avatar, Badge, makeStyles, Tooltip } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import HourglassFullOutlinedIcon from "@material-ui/icons/HourglassFullOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import classes from "./Header.module.css";
import MainLogo from "../UI/MainLogo";

const useStyles = makeStyles((theme) => ({
  avatarIcon: {
    margin: "0 12px",
    marginLeft: 22,
    backgroundColor: "#727171",
    fontSize: 14,
    width: 40,
    height: 40,
    cursor: "pointer",
  },
  actionIcon: {
    // color: "#2c2926",
    // margin: "0 8px",
    color: "white",
    marginLeft: 14,
    fontSize: 26,
    cursor: "pointer",
  },
  blackIcon: {
    color: "rgb(49, 53, 53)",
  },
  blackBGC: {
    backgroundColor: "rgb(49, 53, 53)",
  },
}));

const Header = (props) => {
  const styles = useStyles();

  const blackHeader = window.location.pathname === "/create-exam";

  const headerStyle = `${classes.header} ${
    blackHeader ? classes.blackHeader : ""
  }`;
  return (
    <header className={headerStyle}>
      <div>{blackHeader && <MainLogo />}</div>
      {/* Some other options, if required */}

      <div className={classes.header__actions}>
        <Tooltip title="Home">
          <HomeOutlinedIcon
            className={`${styles.actionIcon} ${
              !blackHeader ? styles.blackIcon : ""
            }`}
          />
        </Tooltip>
        <Tooltip title="Notifications (2)">
          <Badge badgeContent={2} color="primary">
            <NotificationsNoneIcon
              className={`${styles.actionIcon} ${
                !blackHeader ? styles.blackIcon : ""
              }`}
            />
          </Badge>
        </Tooltip>
        <Avatar
          alt="Mitanshu Kumar"
          src="/broken-image.jpg"
          className={`${styles.avatarIcon} ${
            !blackHeader ? styles.blackBGC : ""
          }`}
        >
          MK
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
