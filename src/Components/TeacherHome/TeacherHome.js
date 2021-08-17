import { Route } from "react-router-dom";
import ContentBody from "./ContentBody";
import ExamsSection from "./ExamsSection/ExamsSection";
import Sidebar from "./Sidebar";

import classes from "./TeacherHome.module.css";

const TeacherHome = (props) => {
  return (
    <div className={classes.teacherHome}>
      <Sidebar />
      <ContentBody>
        <Route path="/teacher/exams">
          <ExamsSection />
        </Route>
      </ContentBody>
    </div>
  );
};

export default TeacherHome;
