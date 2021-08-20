import Card from "../../UI/Card";
import AddQuestionCard from "./AddQuestionCard";
import CentralMenu from "./CentralMenu";

const CentralMain = () => {
  return (
    <Card
      style={{
        flex: 1,
        height: "1000px",
        position: "relative",
        paddingTop: "65px",
      }}
    >
      <CentralMenu />
      <AddQuestionCard />
      {/* Added Questions */}
    </Card>
  );
};

export default CentralMain;
