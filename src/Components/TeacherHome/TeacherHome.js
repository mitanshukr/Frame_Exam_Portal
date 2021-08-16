import ContentBody from "./ContentBody"
import Sidebar from "./Sidebar"

import classes from './TeacherHome.module.css';

const TeacherHome = (props) => {
  return <div className={classes.teacherHome}>
      <Sidebar/>
      <ContentBody/>
  </div>;
};

export default TeacherHome;
