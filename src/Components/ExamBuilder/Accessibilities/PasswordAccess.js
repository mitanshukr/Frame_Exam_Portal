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
    padding: 0,
    letterSpacing: 12,
    width: "140px",
  },
  labelRoot: {
    fontSize: 11,
    padding: 0,
    margin: 0,
  },
  viewPasswordIcon: {
    transform: "scale(0.9)",
    background: "transparent",
    margin: "-20px",
  },
  errorMsg: {
    color: "red",
    fontSize: 10,
    paddingTop: 5,
  },
}));

const PasswordAccess = (props) => {
  const styles = useStyles();
  const [passwordProtection, setPasswordProtection] = React.useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    passwordError: false,
  });

  const handleCheckboxChange = (event) => {
    setPasswordProtection(event.target.checked);
    setValues({ ...values, passwordError: true });
    props.setPassword(true, null);
    if (!event.target.checked) {
      setValues({ password: "", showPassword: false, passwordError: false });
      props.setPassword(false, null);
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    if (password.length > 6 || isNaN(password)) {
      // alert("Only digits of max length 6 is allowed.");
      return;
    }
    if (password.length < 6) {
      setValues({ ...values, password: password, passwordError: true });
    } else {
      setValues({ ...values, password: password, passwordError: false });
    }
    props.setPassword(true, password);
  };

  return (
    <FormGroup>
      <FormControlLabel
        className={styles.passwordCheckbox}
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
          className={styles.labelRoot}
          htmlFor="standard-adornment-password"
        >
          Enter 6-digit Password
        </InputLabel>
        <Input
          disabled={!passwordProtection}
          placeholder="******"
          className={styles.inputRoot}
          error={values.passwordError}
          id="standard-adornment-password"
          inputProps={{
            maxLength: 6,
          }}
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handlePasswordChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                className={styles.viewPasswordIcon}
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
      {values.passwordError && (
        <small className={styles.errorMsg}>
          Please provide a 6 digit Password.
        </small>
      )}
    </FormGroup>
  );
};

export default PasswordAccess;
