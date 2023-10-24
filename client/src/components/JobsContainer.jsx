import Bike from "./Bike";
import Wrapper from "../assets/wrappers/BikesContainer";
import { useAllBikesContext } from "../pages/AllBikes";

const BikesContainer = () => {
  const { data } = useAllBikesContext();
  const { bikes } = data;
  if (bikes.lenght === 0) {
    return (
      <Wrapper>
        <h2>No Bikes to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="bikes">
        {bikes.map((bike) => {
          return <Bike key={bike._id} {...bike} />;
        })}
      </div>
    </Wrapper>
  );
};
export default BikesContainer;
