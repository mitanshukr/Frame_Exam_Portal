import { Route } from "react-router-dom";
import ExamBuilder from "./Components/ExamBuilder/ExamBuilder";
import Header from "./Components/Header/Header";
import TeacherHome from "./Components/TeacherHome/TeacherHome";

function App() {
  return (
    <>
      {/* urlPathname={window.location.pathname}  */}
      <Header />
      <Route path="/teacher">
        <TeacherHome />
      </Route>
      <Route path="/create-exam">
        <ExamBuilder />
      </Route>
    </>
  );
}
// #2B7DE9

export default App;
