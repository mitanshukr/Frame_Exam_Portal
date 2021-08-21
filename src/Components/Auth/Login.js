import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  IconButton,
  Input,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import HourglassFullOutlinedIcon from "@material-ui/icons/HourglassFullOutlined";

import classes from "./Login.module.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  inputRoot: {
    color: "white",
    WebkitTextFillColor: "white",
    fontSize: 18,
    "&.MuiInput-underline:before": {
      borderBottom: "2px solid white",
    },
    "&.MuiInput-underline:after": {
      borderBottom: "2px solid rgb(252, 224, 69)",
    },
  },
  passwordIconRoot: {
    color: "white",
  },
  btnRoot: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 18,
  },
  loginBtn: {
    backgroundColor: "rgb(252, 224, 69)",
    color: "#2c2926",
    marginTop: "22px !important",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: "rgb(207, 176, 0)",
    },
  },
  signupBtn: {
    backgroundColor: "#6C63FF",
    fontSize: 16,
  },
}));

const Login = (props) => {
  const styles = useStyles();
  const history = useHistory();
  const [passwordState, setPasswordState] = React.useState({
    password: "",
    showPassword: false,
  });

  const passwordChangeHandler = (e) => {
    setPasswordState({ ...passwordState, password: e.target.value });
  };

  const handleClickShowPassword = () => {
    setPasswordState({
      ...passwordState,
      showPassword: !passwordState.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginHandler = (e) => {
    //check username/password...log in the user
    //then navidate to teacher home
    history.push("/teacher");
  }

  return (
    <div className={classes.login}>
      <div className={classes.login__info}>
        <div className={classes.login__logo}>
          <HourglassFullOutlinedIcon className={classes[`login__logo--icon`]} />
          <h1>Frame</h1>
        </div>
        <h2>
          Frame helps you create, conduct and manage online exams for your
          Students.
        </h2>
      </div>
      <div className={classes.login__actionBox}>
        <h2 className={classes[`login__actionBox--h2`]}>
          Log In &#8211; Teacher
        </h2>
        <form className={classes.login__form} autoComplete="off">
          <Input
            placeholder="Email"
            className={styles.inputRoot}
            inputProps={{
              "aria-label": "description",
            }}
          />

          <Input
            placeholder="Password"
            className={styles.inputRoot}
            id="standard-adornment-password"
            type={passwordState.showPassword ? "text" : "password"}
            value={passwordState.password}
            onChange={passwordChangeHandler}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  className={styles.passwordIconRoot}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {passwordState.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            className={`${styles.btnRoot} ${styles.loginBtn}`}
            variant="contained"
            color="primary"
            onClick={loginHandler}
          >
            Log In
          </Button>
          <div className={classes.login__forgetPassword}>
            <a href="?forget-password">Forget Password?</a>
          </div>
        </form>
        <hr />
        <div className={classes.login__signupAction}>
          <Button
            className={`${styles.btnRoot} ${styles.signupBtn}`}
            variant="contained"
            color="primary"
          >
            Create New Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
