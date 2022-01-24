import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {NavBarAuth,NavBarUnAuth} from "./NavBar";
function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [display, setDisplay] = useState("courses");
  const [courses, setCourses] = useState([]);
  
  const navigate = useNavigate();
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  
  useEffect(() => {
    async function effect(){
      if (loading) return;
      if (!user) return navigate("/");
      else{
        console.log("awaiting")
      while(true){
        await sleep(200)
        try {
          const q = query(collection(db, "users"), where("uid", "==", user?.uid));
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          setName(data.name);
          console.log("Name")
          setLoaded(true)
          break;
        } catch (err) {
          console.error(err);
          continue;
        }
      }
      }
      setCourses([{name:"English Pro",topics:["React Hook useEffect has a missing dependency","React Hook useEffect has a missing dependency"]},{name:"English",topics:["React Hook useEffect has a missing dependency","React Hook useEffect has a missing dependency"]},{name:"English",topics:["React Hook useEffect has a missing dependency","React Hook useEffect has a missing dependency"]},{name:"English",topics:["React Hook useEffect has a missing dependency","React Hook useEffect has a missing dependency"]}])
    }
    effect()
  }, [user, loading]);

  if(!loaded) return(  
    <div>
      <NavBarUnAuth/>
  <div className="dashboard">
  <div className="dashboard__container">
   Loading
  </div>
  </div>  
</div>
);

  else{
  return (
    <div>
      <NavBarAuth name={name}/>
    <div className="dashboard">
       <div className="leftDashboard">
         <div className="leftContent">
            <p className="leftDashboard-header">My Stuff</p>
            <p className="left-item">Courses</p>
            <p className="leftDashboard-header">My Account</p>
            <p className="left-item">Profile</p>
            <p className="left-item" onClick={logout}>Sign Out</p>
        </div>
       </div>
       <div className="rightDashboard">
        <div className="rightDashboard-box">
        {
          courses.map(item => {
            return(  
            <div className="courseCard"> 
              <p className="courseCard-header">{item.name}</p>
              <p className="courseCard-topics">Topics:</p>
              <ul className="courseCard-list">
                {
                  item.topics.map(topic =>{
                    return(
                      <li>{topic}</li>
                    );
                  })
                }
              </ul>
              <div className="courseCard-buttonContainer">
                <button className="Course-button"
                  onClick={()=>{
                    navigate("/coursecontent/"+name+"/"+item.name)
                  }}
                >Go To Course</button>
              </div>
            </div>
            );
          })
        }
        </div>
        </div>
       </div>
     </div>
  );
  }
}
export default Dashboard;