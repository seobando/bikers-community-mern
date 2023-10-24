import { toast } from "react-toastify";
import { BikesContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/bikes");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllBikesContext = createContext();

const AllBikes = () => {
  const { data } = useLoaderData();
  return (
    <AllBikesContext.Provider value={{ data }}>
      <SearchContainer />
      <BikesContainer />
    </AllBikesContext.Provider>
  );
};

export const useAllBikesContext = () => useContext(AllBikesContext);

export default AllBikes;
