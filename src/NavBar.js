import React from "react";
import "./NavBar.css";
import { FaSearch,FaSignOutAlt } from "react-icons/fa";
import { logout } from "./firebase";

function NavBarAuth(props) {
  return (
    <div className="navbar">
       <div className="navbar__courses">
           <button id="navbar__courses__button" onClick={() => {
                   console.log("Course")
               }}
               >Course</button>
        </div>
       <div className="navbar__search">
        <div class="navbar__search__wrap">
            <div class="navbar__search__search">
            <input type="text" class="navbar__search__searchTerm" id="input_text"></input>
            <button type="submit" class="navbar__search__searchButton">
                <FaSearch />
            </button>
            </div>
        </div>
       </div>
       <div className="navbar__name">
           <h1>ACADEMY PROJECT</h1>
       </div>
       <div className="navbar__user">
            <h2>{props.name}</h2>
            <button type="submit" class="navbar__user__icon" onClick={logout}>
                <FaSignOutAlt />
            </button>         
       </div>
     </div>
  );
}
export default NavBarAuth;