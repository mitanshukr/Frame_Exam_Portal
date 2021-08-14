import React from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import { Menu, MenuItem } from "@material-ui/core";

import classes from "./AddQuestion.module.css";
import NestedMenuItem from "material-ui-nested-menu-item";

const initialState = {
  mouseX: null,
  mouseY: null,
};

const AddQuestion = (props) => {
  const [state, setState] = React.useState(initialState);

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setState(initialState);
  };

  return (
    <div>
      <div
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.staticCard}
      >
        <AddCircleOutlineOutlinedIcon className={classes.staticCard__icon} />
        {/* <PostAddOutlinedIcon className={classes.staticCard__icon}/> */}
        <div className={classes.staticCard__content}>
          <p>Click here to Add Question</p>
        </div>
      </div>
      <Menu
        id="simple-menu"
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <NestedMenuItem
          label="MCQ Type"
          parentMenuOpen={state.mouseX ? true : false}
        >
          <MenuItem onClick={handleClose}>Single Correct</MenuItem>
          <MenuItem onClick={handleClose}>Multiple Correct</MenuItem>
        </NestedMenuItem>
        <MenuItem onClick={handleClose}>Numerical Answer Type</MenuItem>
        <MenuItem onClick={handleClose}>Subjective Type</MenuItem>
      </Menu>
    </div>
  );
};

export default AddQuestion;
