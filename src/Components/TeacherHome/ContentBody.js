import classes from "./ContentBody.module.css";
import ExamsSection from "./ExamsSection/ExamsSection";

const ContentBody = (props) => {
  return (
    <div className={classes.contentBody}>
      <ExamsSection />
    </div>
  );
};

export default ContentBody;
