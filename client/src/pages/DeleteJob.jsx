import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import {redirect} from "react-router-dom";

export const action = async({params})=>{
  try{
    await customFetch.delete(`/bikes/${params.id}`)
    toast.success('Bike deleted successfully')
  } catch (error){
    toast.error(error?.response?.data?.msg);
  }
  return redirect('/dashboard/all-bikes')
}

