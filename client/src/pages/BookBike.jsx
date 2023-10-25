import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData } from "react-router-dom";
import { BIKE_STATUS, BIKE_TYPE } from "../../../utils/constants";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/bikes/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/all-bikes");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/bikes/${params.id}`, data);
    toast.success("Bike edited successfully");
    return redirect("/dashboard/all-bikes");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditBike = () => {
  const { bike } = useLoaderData();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit bike</h4>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={bike.position} />
          <FormRow type="text" name="company" defaultValue={bike.company} />
          <FormRow
            type="text"
            name="bikeLocation"
            labelText="bike location"
            defaultValue={bike.bikeLocation}
          />
          <FormRowSelect
            labelText="bike status"
            defaultValue={bike.bikeStatus}
            list={Object.values(BIKE_STATUS)}
          />
          <FormRowSelect
            name="bikeType"
            labelText="bike type"
            defaultValue={bike.bikeType}
            list={Object.values(BIKE_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditBike;
