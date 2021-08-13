import React from "react";
import clsx from "clsx";
import {
  FormControlLabel,
  Checkbox,
  TextField,
  makeStyles,
  InputAdornment,
  IconButton,
  Input,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { Fragment } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  passwordAsk: {
    marginTop: "8px",
    "& > *": {
      fontSize: "14px",
    },
  },
  //   root: {
  //     "& > *": {
  //       marginTop: "0px",
  //       width: "28ch",
  //     },
  //   },
  inputRoot: {
    fontSize: 16,
    margin: 0,
    marginTop: -6,
    padding: 0,
    letterSpacing: 12,
    width: "155px",
  },
  labelRoot: {
    fontSize: 12,
    padding: 0,
    margin: 0,
  },
  passwordIcon: {
    transform: "scale(0.9)",
    margin: 0,
    padding: 0,
  },
}));

const PasswordAccess = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    passwordRequirement: false,
  });
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  return (
    <Fragment>
      <FormControlLabel
        className={classes.passwordAsk}
        control={
          <Checkbox
          size="small"
            checked={state.passwordRequirement}
            onChange={handleChange}
            name="passwordRequirement"
          />
        }
        label="Require Password?"
      />
      <div>
        {/* <form className={classes.root} noValidate autoComplete="off"> */}
        {/* <TextField
          style={{
            fontSize: "10px",
          }}
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
              focused: classes.labelFocused,
            },
          }}
          InputProps={{ classes: { root: classes.inputRoot }, type: "number"  }}
          inputprops= {{ maxLength: 6}}
          //   InputProps={{
          //     inputProps: {
          //       type: "number",
          //       min: 6,
          //       max: 6,
          //     },
          //   }}
          id="standard-basic"
          label="Enter 6-digit Password"
        /> */}
        <FormControl
          autocomplete="off"
          className={clsx(classes.margin, classes.textField)}
        >
          <InputLabel
            className={classes.labelRoot}
            htmlFor="standard-adornment-password"
          >
            Enter 6-digit Password
          </InputLabel>
          <Input
            placeholder="******"
            className={classes.inputRoot}
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  className={classes.passwordIcon}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </Fragment>
  );
};

export default PasswordAccess;
