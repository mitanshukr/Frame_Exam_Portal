import { Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import ExamBuilder from "./Components/ExamBuilder/ExamBuilder";
import Header from "./Components/Header/Header";
import TeacherHome from "./Components/TeacherHome/TeacherHome";

function App() {
  return (
    <>
      <Route path="/login">
        <Login />
      </Route>
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
