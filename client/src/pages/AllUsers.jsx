import { toast } from "react-toastify";
import { UsersContainer, SearchContainer } from "../components";
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

const AllUserContext = createContext();

const AllBikes = () => {
  const { data } = useLoaderData();
  return (
    <AllUserContext.Provider value={{ data }}>
      <SearchContainer />
      <UsersContainer />
    </AllUserContext.Provider>
  );
};

export const useAllUsersContext = () => useContext(AllUserContext);

export default AllBikes;
