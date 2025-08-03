import { PiTelevisionBold } from "react-icons/pi";
import { MdOutlineMovieFilter } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { href } from "react-router-dom";
import { FiSearch } from "react-icons/fi";


export const navigation = [
    {
      label: "TV Shows",
      href: "tv",
      Icon: <PiTelevisionBold />
    },
    {
      label: "Movies",
      href: "movie",
      Icon: <MdOutlineMovieFilter />
    },
  ];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    Icon: <IoMdHome /> 
  },
  ...navigation,
  {
    label: "search",
    href: "/search",
    Icon: <FiSearch />
  }
]  