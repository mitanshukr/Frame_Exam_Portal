import { Button, makeStyles } from "@material-ui/core";
import Card from "../../UI/Card";
import classes from "./ExamsSection.module.css";

const useStyles = makeStyles((theme) => ({
  cyfeBtn: {
    boxShadow: "none",
    borderRadius: 0,
    padding: "12px 50px",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: "inherit",
  },
}));

const ExamsSection = (props) => {
  const styles = useStyles();

  return (
    <div className={classes.exams}>
      <Card className={classes.exams__cyfe}>
        <div>Jump Into Exam Creation</div>
        <Button className={styles.cyfeBtn} variant="contained" color="primary">
          Create Your First Exam
        </Button>
      </Card>
    </div>
  );
};

export default ExamsSection;