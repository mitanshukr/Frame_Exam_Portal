import SvgImgTreeSwing from "./SvgImgTreeSwing";
import classes from "./DraftsSection.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import DraftItem from "./DraftItem";

const DraftsSection = (props) => {
  const userId = useSelector((state) => state.auth.userId);
  const authToken = useSelector((state) => state.auth.authToken);
  const [draftData, setDraftData] = useState([]);

  const draftItemClickHandler = (id) => {
    console.log(id);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/exam/draft/all/${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setDraftData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.drafts}>
      <h1>Drafts</h1>
      {draftData.length > 0 ? (
        <div className={classes.drafts__contentBox}>
          {draftData.map((data) => {
            return (
              <DraftItem
                key={data._id}
                id={data._id}
                name={data.name}
                access="Private"
                subject="Physics, Science"
                lastUpdate={new Date().toLocaleString()}
                onClick={draftItemClickHandler}
              />
            );
          })}
        </div>
      ) : (
        <div className={classes.drafts__svgImg}>
          <SvgImgTreeSwing />
          <p className={classes["drafts__svgImg--p"]}>
            Your unpublished Exams will appear here!
          </p>
        </div>
      )}
    </div>
  );
};

export default DraftsSection;
