import React from "react";
import "./NavBar.css";

function NavBarAuth() {
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
                <i class="fa fa-search"></i>
            </button>
            </div>
        </div>
       </div>
       <div className="navbar__name">
       </div>
       <div className="navbar__user">
       </div>
     </div>
  );
}
export default NavBarAuth;