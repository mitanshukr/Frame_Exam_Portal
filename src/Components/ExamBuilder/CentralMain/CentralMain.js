import Card from "../../UI/Card";
import AddQuestionCard from "./AddQuestionCard";
import CentralMenu from "./CentralMenu";

const CentralMain = () => {
  return (
    <Card
      style={{
        flex: 1,
        height: "500px",
        position: "relative",
        paddingTop: "65px",
      }}
    >
      <CentralMenu />
      {/* Added Questions */}
      <AddQuestionCard />
    </Card>
  );
};

export default CentralMain;
