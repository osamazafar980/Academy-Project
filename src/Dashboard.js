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
       <div className="dashboard__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div>
       </div>
     </div>
  );
  }
}
export default Dashboard;