import { Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    btnStyle: {
        textTransform: 'capitalize',
        margin: "15px 4px",
        padding: 3,
        paddingRight: 8,
        fontSize: 12.25,
        fontWeight:"bold",
        color: "white",
        borderColor: "white",
        "&:hover": {
            backgroundColor: "rgba(234, 234, 234, 0.2)",
        }
      }
}))
const CustomButton = (props) => {
    const classes = useStyles();
  return (
    <Button variant="outlined" onClick={props.onClick} className={classes.btnStyle}>
      {props.children}
    </Button>
  );
};

export default CustomButton;
