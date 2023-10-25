import { toast } from "react-toastify";
import { BikesContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllUsersContext = createContext();

const Admin = () => {
  const { data } = useLoaderData();
  return (
    <AllUsersContext.Provider value={{ data }}>
      <SearchContainer />
      <BikesContainer />
    </AllUsersContext.Provider>
  );
};

export const useAllUsersContext = () => useContext(AllUsersContext);

export default Admin;
