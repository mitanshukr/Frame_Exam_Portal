import classes from "./DraftItem.module.css";
import LockIcon from "@material-ui/icons/Lock";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  lockIcon: {
    fontSize: 16,
    transform: "translateY(2px)",
    paddingRight: 3,
  },
}));

const DraftItem = (props) => {
  const styles = useStyles();

  return (
    <div className={classes.drafts__content}>
      <div className={classes[`drafts__content-info`]}>
        <h2 className={classes[`drafts__content--title`]}>{props.name}</h2>
        <p className={classes[`drafts__content--subject`]}>
          Subject: <span>{props.subject}</span>
        </p>
        <div>
          <small className={classes[`drafts__content--access`]}>
            <LockIcon className={styles.lockIcon} />
            {props.access}
          </small>
          <small className={classes[`drafts__content--date`]}>
            Last Updated: {props.lastUpdate}
          </small>
        </div>
      </div>
      <div className={classes[`drafts__content-action`]}>
        <p onClick={props.onClick.bind(this, props.id)}>Edit/Manage</p>
      </div>
    </div>
  );
};

export default DraftItem;
