import { ImLocation2, ImProfile, ImBook } from "react-icons/im";
import {
  MdQueryStats,
  MdPedalBike,
  MdAdminPanelSettings,
} from "react-icons/md";


const links = [
  {
    text: "add bike",
    path: "add-bike",
    icon: <MdPedalBike />,
  },
  {
    text: "Book bike",
    path: "book-bike",
    icon: <ImBook />,
  },
  {
    text: "all bikes",
    path: "all-bikes",
    icon: <MdQueryStats />,
  },
  {
    text: "Locations",
    path: "locations",
    icon: <ImLocation2 />,
  },
  {
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    text: "admin",
    path: "admin",
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
