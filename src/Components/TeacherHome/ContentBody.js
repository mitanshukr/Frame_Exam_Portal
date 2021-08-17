import classes from "./ContentBody.module.css";

const ContentBody = (props) => {
  return <div className={classes.contentBody}>{props.children}</div>;
};

export default ContentBody;
