import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { FiSearch } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { IconBase } from "react-icons";
import { PiTelevisionBold } from "react-icons/pi";
import { MdOutlineMovieFilter } from "react-icons/md";
import { navigation } from "../constants/navigation";




const Header = () => {
  const location = useLocation()
  const removeSpace = location?.search?.slice(3).split("%20").join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();

  console.log("location", location?.search?.slice(3));
  useEffect(()=>{
     if(searchInput){
      navigate(`/search?q=${searchInput}`)
     }
  },[searchInput])

  const handeSubmit = (e) =>{
    e.preventDefault(); 
  }

  return (
    <div className=" fixed top-0 w-full h-16 bg-neutral-600/75 z-40">
      <div className=" container mx-auto px-2 flex items-center h-full">
        <Link to="/">
          <img src={logo} alt="logo" width={120} />
        </Link>
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return(
              <div key={nav.label}>
                <NavLink to={nav.href} className={({ isActive }) => `px-2 hover:text-neutral-100 ${ isActive && "text-neutral-100"}` }>
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        
        <div className=" ml-auto flex items-center gap-4">
         <form className="flex items-center gap-2" onSubmit={handeSubmit}>
          <input type="text" 
          placeholder="Search here..." 
          className=" bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
          onChange={(e)=>setSearchInput(e.target.value)}
          value={searchInput}
          />

          <button className=" text-2xl text-white">
            <FiSearch />
          </button>
          
         </form>

          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50">
            <img src={user} className="w-full h-full "></img>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
