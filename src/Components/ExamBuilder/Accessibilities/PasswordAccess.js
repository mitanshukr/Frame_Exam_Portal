import React from "react";
import {
  FormControlLabel,
  Checkbox,
  makeStyles,
  InputAdornment,
  IconButton,
  Input,
  InputLabel,
  FormControl,
  FormGroup,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  passwordCheckbox: {
    "& > *": {
      fontSize: "14px",
    },
  },
  inputRoot: {
    fontSize: 16,
    // marginTop: "2px !important",
    padding: 0,
    letterSpacing: 12,
    width: "150px",
  },
  labelRoot: {
    fontSize: 11,
    padding: 0,
    margin: 0,
  },
  viewPasswordIcon: {
    transform: "scale(0.9)",
    margin: 0,
    padding: 0,
  },
}));

const PasswordAccess = () => {
  const classes = useStyles();

  const [passwordProtection, setPasswordProtection] = React.useState(false);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleCheckboxChange = (event) => {
    setPasswordProtection(event.target.checked);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  return (
    <FormGroup>
      <FormControlLabel
        className={classes.passwordCheckbox}
        control={
          <Checkbox
            size="small"
            checked={passwordProtection}
            onChange={handleCheckboxChange}
            name="passwordProtection"
          />
        }
        label="Require Password?"
      />

      <FormControl autoComplete="off">
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
                className={classes.viewPasswordIcon}
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
    </FormGroup>
  );
};

export default PasswordAccess;
