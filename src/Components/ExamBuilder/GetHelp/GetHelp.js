import Card from "../../UI/Card";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

const GetHelp = (props) => {
  return (
    <Card
      style={{
        marginTop: "15px",
        padding: "16px",
        paddingTop: "19px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <HelpOutlineOutlinedIcon style={{ color: "rgb(75, 75, 75)" }} />
      <span
        style={{
          padding: 0,
          fontFamily: "'STIX Two Text', serif",
          paddingLeft: "8px",
          fontSize: "19px",
          marginTop: "2px",
          fontWeight: "bold",
          color: "rgb(75, 75, 75)",
        }}
      >
        Get Help
      </span>
    </Card>
  );
};

export default GetHelp;
