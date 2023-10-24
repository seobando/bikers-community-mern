import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
//import { useOutletContext } from 'react-router-dom';
import { BIKE_STATUS, BIKE_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';


export const action = async ({request})=>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/bikes',data)
    toast.success('Bike added successfully')
    return redirect('all-bikes');
  }catch(error){
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

const AddBike = () => {
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>add bike</h4>
        <div className='form-center'>
          <FormRow type='text' name='position' />
          <FormRow type='text' name='company' />
          <FormRow
            type='text'
            labelText='bike location'
            name='bikeLocation'
          />
          <FormRowSelect
            labelText='bike status'
            name='bikeStatus'
            defaultValue={BIKE_STATUS.PENDING}
            list={Object.values(BIKE_STATUS)}
          />
          <FormRowSelect
            labelText='bike type'
            name='bikeType'
            defaultValue={BIKE_TYPE.FULL_TIME}
            list={Object.values(BIKE_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddBike;