import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from "../assets/wrappers/Bike";
import UserInfo from "./UserInfo";
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const User = ({
  _id,
  position,
  company,
  userLocation,
  userType,
  createdAt,
  userStatus,
}) => {
  const date = day(createdAt).format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <UserInfo icon={<FaLocationArrow />} text={userLocation} />
          <UserInfo icon={<FaCalendarAlt />} text={date} />
          <UserInfo icon={<FaBriefcase />} text={userType} />
          <div className={`status ${userStatus}`}>{userStatus}</div>
        </div>
        <footer className="actions">
          <Link to={`../edit-user/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-user/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default User;
