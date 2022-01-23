import React from "react";
import "./Courses.css" ;
import { useNavigate } from "react-router-dom";

const Courses = ({ setIsOpen ,name,courseName}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="modal"> 
        <div className="header">
            <h2>Courses</h2>
        </div>
        <div className="courses">
            <ul>
                <li onClick={()=>{
                  navigate("/course/"+name+"/English")
                }}>English</li>
                <li>Science</li>
                <li>Maths</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Courses;