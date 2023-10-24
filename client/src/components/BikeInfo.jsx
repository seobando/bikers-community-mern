import Wrapper from '../assets/wrappers/BikeInfo';

const BikeInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className='bike-icon'>{icon}</span>
      <span className='bike-text'>{text}</span>
    </Wrapper>
  );
};
export default BikeInfo;
