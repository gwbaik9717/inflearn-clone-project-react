import CoursesHeader from "./CoursesHeader";
import CoursesHeaderWithID from "./CoursesHeaderWithID";
import CoursesDetail from "./CoursesDetail";

const Header = ({ id, title }) => {
  return (
    <div className="header">
      {id ? <CoursesHeaderWithID id={id} /> : <CoursesHeader title={title} />}
      {id ? <CoursesDetail /> : null}
    </div>
  );
};

export default Header;
