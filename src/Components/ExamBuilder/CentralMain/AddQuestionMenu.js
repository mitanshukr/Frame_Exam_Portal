import React from "react";
import { makeStyles, Menu, MenuItem } from "@material-ui/core";

import NestedMenuItem from "material-ui-nested-menu-item";

const initialState = {
  mouseX: null,
  mouseY: null,
};

const useStyles = makeStyles((theme) => ({
  menuRoot: {
    "& li": {
      fontSize: "15px !important",
    },
  },
  nestedMenuRoot: {
    "& > li": {
      fontSize: "15px !important",
    },
  },
}));

const AddQuestionMenu = (props) => {
  const [state, setState] = React.useState(initialState);
  const elemId = "simple-menu-" + Math.random();
  const classes = useStyles();

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY + 5,
    });
  };

  const handleClose = (event) => {
    setState(initialState);
  };

  return (
    <div aria-controls={elemId} aria-haspopup="true">
      <span onClick={handleClick}>{props.children}</span>
      <Menu
        MenuListProps={{
          classes: {
            root: classes.menuRoot,
          },
        }}
        id={elemId}
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
          MenuListProps={{
            classes: {
              root: classes.nestedMenuRoot,
            },
          }}
          label="MCQ Type"
          parentMenuOpen={state.mouseY !== null}
          // onClick={handleClose}
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

export default AddQuestionMenu;
