import CoursesHeader from "./CoursesHeader";
import CoursesHeaderWithID from "./CoursesHeaderWithID";
import CoursesDetail from "./CoursesDetail";

import 

const SliderHeader = ({ id, sort }) => {
  return (
    <div className="header">
      {id ? <SliderHeaderWithID id={id} /> : null}
      {id ? <SliderDetail /> : null}
    </div>
  );
};

export default SliderHeader;
