import React,{useState} from "react";
import "./NavBar.css";
import { FaSearch,FaSignOutAlt } from "react-icons/fa";
import { logout } from "./firebase";
import Courses from "./Courses.js"
import { useNavigate } from "react-router-dom";

function NavBarUnAuth() {
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
       <div className="navbar__courses">
           <button id="navbar__courses__button" onClick={() => setIsOpen(true)}
               >Courses</button>
        {isOpen && <Courses setIsOpen={setIsOpen} name="None" />}
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
           <h1  onClick={()=>{
                 navigate("/dashboard");
             }}
             >ACADEMY PROJECT</h1>
       </div>
       <div className="navbar__user">
            
       </div>
     </div>
  );
}
function NavBarAuth(props) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="navbar">
         <div className="navbar__courses">
             <button id="navbar__courses__button" onClick={() => setIsOpen(true)}
                 >Courses</button>
                {isOpen && <Courses setIsOpen={setIsOpen} name={props.name} />}

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
             <h1 onClick={()=>{
                 navigate("/dashboard");
             }} >ACADEMY PROJECT</h1>
         </div>
         <div className="navbar__user">
              <h2>{props.name}</h2>
              <button type="submit" class="navbar__user__icon" onClick={()=>{
                  logout()
                  navigate("/")
                  }}>
                  <FaSignOutAlt />
              </button>         
         </div>
       </div>
    );
  }
export { 
    NavBarAuth,
    NavBarUnAuth
    };