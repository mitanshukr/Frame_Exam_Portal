import React from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

import classes from "./AddQuestionCard.module.css";
import AddQuestionMenu from "./AddQuestionMenu";

const AddQuestionCard = (props) => {
  return (
    <AddQuestionMenu>
      <div className={classes.staticCard}>
        <AddCircleOutlineOutlinedIcon className={classes.staticCard__icon} />
        {/* <PostAddOutlinedIcon className={classes.staticCard__icon}/> */}
        <div className={classes.staticCard__content}>
          <p>Click here to Add Question</p>
        </div>
      </div>
    </AddQuestionMenu>
  );
};

export default AddQuestionCard;
