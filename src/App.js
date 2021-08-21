import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Auth/Login";
import ExamBuilder from "./Components/ExamBuilder/ExamBuilder";
import Header from "./Components/Header/Header";
import TeacherHome from "./Components/TeacherHome/TeacherHome";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {isAuth ? (
        <Switch>
          <Route path="/teacher">
            <Header />
            <TeacherHome />
          </Route>
          <Route path="/create-exam">
            <Header />
            <ExamBuilder />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
      )}
    </>
  );
}
// #2B7DE9

export default App;
