import { Redirect, Route } from "react-router-dom";
import ContentBody from "./ContentBody";
import ExamsSection from "./ExamsSection/ExamsSection";
import GroupsSection from "./GroupsSection/GroupsSection";
import Sidebar from "./Sidebar";

import classes from "./TeacherHome.module.css";

const TeacherHome = (props) => {
  return (
    <div className={classes.teacherHome}>
      <Sidebar />
      <Route path="/teacher" exact>
        <Redirect to="/teacher/exams" />
      </Route>
      <ContentBody>
        <Route path="/teacher/exams">
          <ExamsSection />
        </Route>
        <Route path="/teacher/drafts"></Route>
        <Route path="/teacher/performance"></Route>
        <Route path="/teacher/groups">
          <GroupsSection />
        </Route>
      </ContentBody>
    </div>
  );
};

export default TeacherHome;
