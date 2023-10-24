import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from "../assets/wrappers/Bike";
import BikeInfo from "./BikeInfo";
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Bike = ({
  _id,
  position,
  company,
  bikeLocation,
  bikeType,
  createdAt,
  bikeStatus,
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
          <BikeInfo icon={<FaLocationArrow />} text={bikeLocation} />
          <BikeInfo icon={<FaCalendarAlt />} text={date} />
          <BikeInfo icon={<FaBriefcase />} text={bikeType} />
          <div className={`status ${bikeStatus}`}>{bikeStatus}</div>
        </div>
        <footer className="actions">
          <Link to={`../edit-bike/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-bike/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Bike;
