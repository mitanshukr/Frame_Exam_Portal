import { Button } from "@material-ui/core";
import classes from "./CentralMenu.module.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import PublishIcon from "@material-ui/icons/Publish";
import AddQuestionMenu from "./AddQuestionMenu";

const CentralMenu = (props) => {
  return (
    <div className={classes.centralMenu}>
      <p>
        Total Questions: <span>0</span>
      </p>
      <div className={classes.centralMenu__btnGroup}>
        <Button
          size="small"
          variant="outlined"
          className={classes.centralMenu__btn}
        >
          <PublishIcon /> Upload
        </Button>
        <AddQuestionMenu>
          <Button
            size="small"
            variant="contained"
            className={
              classes.centralMenu__btn + " " + classes.centralMenu__addBtn
            }
          >
            Add <ExpandMoreIcon />
          </Button>
        </AddQuestionMenu>
      </div>
    </div>
  );
};

export default CentralMenu;
