import { Button, makeStyles, Tooltip } from "@material-ui/core";
import classes from "./BuilderMenu.module.css";
import AddIcon from "@material-ui/icons/Add";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import CustomButton from "../../UI/CustomButton";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  iconSave: {
    padding: "0 2px",
    margin: 0,
    transform: "scale(.8)",
  },
  iconAdd: {
    transform: "scale(.8)",
  },
  iconEdit: {
    transform: "scale(.8)",
    paddingLeft: "2px",
    color: "grey",
    cursor: "pointer",
    marginTop: -2,
    "&:hover": {
      color: "white",
    },
  },
}));

const BuilderMenu = () => {
  const styles = useStyles();
  return (
    <div className={classes.exambuilder__menu}>
      <div className={classes.exambuilder__name}>
        <h2>MidTerm Physics Exam - PHY-010-MID</h2>
        <Tooltip title="Edit Exam Name">
          <EditIcon className={styles.iconEdit} />
        </Tooltip>
      </div>
      <div>
        <a href="#">
          <small>Saving...</small>
        </a>
        <CustomButton>
          <SaveOutlinedIcon className={styles.iconSave} />
          Save and Close
        </CustomButton>
        <CustomButton>
          <AddIcon className={styles.iconAdd} />
          Create
        </CustomButton>
      </div>
    </div>
  );
};

export default BuilderMenu;
