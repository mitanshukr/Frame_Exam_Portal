import { Avatar, Badge, makeStyles } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import classes from "./Header.module.css";

const useStyles = makeStyles((theme) => ({
  avatarIcon: {
    marginLeft: 25,
    backgroundColor: "#2c2926",
    fontSize: 16,
    width: 46,
    height: 46,
  },
  notificationIcon: {
    color: "#2c2926",
  },
}));

const Header = (props) => {
  const styles = useStyles();

  // const headerStyle = `${classes.header} ${
  //   props.urlPathname === "/create-exam" ? classes.blackHeader : ""
  // }`;
  return (
    <header className={classes.header}>
      {/* Company Logo */}
      {/* Some other options, if required */}

      <Badge
        className={styles.notificationIcon}
        badgeContent={2}
        color="primary"
      >
        <NotificationsNoneIcon />
      </Badge>
      <Avatar
        alt="Mitanshu Kumar"
        src="/broken-image.jpg"
        className={styles.avatarIcon}
      >
        MK
      </Avatar>
    </header>
  );
};

export default Header;
