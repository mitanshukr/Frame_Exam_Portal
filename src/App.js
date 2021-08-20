import { Route } from "react-router-dom";
import ExamBuilder from "./Components/ExamBuilder/ExamBuilder";
import Header from "./Components/Header/Header";
import TeacherHome from "./Components/TeacherHome/TeacherHome";

function App() {
  return (
    <>
      {/* <Header blackStyle={isBlackHeader}/> */}
      <Route path="/teacher">
        <Header />
        <TeacherHome />
      </Route>
      <Route path="/create-exam">
        <Header />
        <ExamBuilder />
      </Route>
    </>
  );
}
// #2B7DE9

export default App;
