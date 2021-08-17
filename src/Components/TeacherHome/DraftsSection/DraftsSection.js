import SvgImgTreeSwing from "./SvgImgTreeSwing";
import classes from "./DraftsSection.module.css";

const DraftsSection = (props) => {
  return (
    <div className={classes.drafts}>
      <h1>Drafts</h1>
      <div className={classes.drafts__svgImg}>
        <SvgImgTreeSwing />
        <p className={classes["drafts__svgImg--p"]}>
          Your unpublished Exams will appear here!
        </p>
      </div>
    </div>
  );
};

export default DraftsSection;
