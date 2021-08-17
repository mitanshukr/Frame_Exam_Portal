import { Button, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SvgImgProjectTeam from "./SvgImgProjectTeam";

import classes from "./GroupsSection.module.css";

const useStyles = makeStyles((theme) => ({
  cgbRoot: {
    boxShadow: "none",
    borderRadius: 0,
    padding: "10px 30px",
    fontSize: "14px",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: "inherit",
    backgroundColor: "#6C63FF",
  },
  cgbRoot__icon: {
    margin: 0,
    marginTop: 3.5,
  },
}));

const GroupsSection = (props) => {
  const styles = useStyles();
  return (
    <div>
      <h1>Groups</h1>
      <div className={classes.groups__actions}>
        <Button className={styles.cgbRoot} variant="contained" color="primary">
          Create Group <AddIcon className={styles.cgbRoot__icon} />
        </Button>
      </div>
      <div className={classes.groups__svgImg}>
        <SvgImgProjectTeam />
        <p className={classes["groups__svgImg--p"]}>No Group yet!</p>
        <p className={classes["groups__svgImg--p"]}>
          You can create different groups and add students to them.
          <br />
          Groups can be a best option to categorize the students by their class
          or sections.
        </p>
      </div>
    </div>
  );
};

export default GroupsSection;
