import { Tooltip } from "@material-ui/core";

const HighlightedInput = (props) => {
  return (
    <div>
      <label style={{
          fontFamily: "Arial",
      }}>
        {props.label}
        <Tooltip title={props.title ? props.title : ""}>
        <input
          
          type="text"
          name={props.name}
          value={props.value}
          // onChange={props.onChange}

          style={{
            width: props.width,
            display: "inline-block",
            maxWidth: "30px",
            border: "none",
            borderBottom: "3px solid #F50057",
            outline: "none",
            backgroundColor: "rgba(49, 53, 53, 0.9)",
            padding: "3px 3px 0 3px",
            verticalAlign: "baseline",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#ffff",
            marginTop: "5px",
            marginBottom: "8px",
            textAlign: "center",
          }}
        />
        </Tooltip>
        <span style={{fontWeight: "bold"}}>{props.suffix}</span>
      </label>
    </div>
  );
};

export default HighlightedInput;
