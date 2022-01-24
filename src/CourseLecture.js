import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate,useParams } from "react-router-dom";
import "./CourseLecture.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {NavBarAuth,NavBarUnAuth} from "./NavBar";
import { FaBook,FaPlay } from "react-icons/fa";
import LecturePlayer from "./LecturePlayer";

function CourseLecture() {
    let {name,lname} = useParams();
    const [user, loading, error] = useAuthState(auth);
    const [loaded, setLoaded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [lectureDetails, setLectureDetails] = useState({
        name:lname,
        Topics:[
                        {lecture:"Analyzing one categorical variable: Analyzing categorical data",lectureLink:"https://youtu.be/J5ZyNEB3ZWE"},
                        {lecture:"Two-way tables: Analyzing categorical data",lectureLink:"https://youtu.be/6GtDwfg58Eo"},
                        {lecture:"Distributions in two-way tables",lectureLink:"https://youtu.be/RUsLNDPdA38"}
                    ]
            }
           
    );
    
    const navigate = useNavigate();
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    useEffect(()=>{
        
    },[])
const [data,setData] = useState({lecture:"",lectureLink:""})
function handleModal(lecture,link){
    setData({lecture:lecture,lectureLink:link})
    setIsOpen(true)
}
    return(
        <div>
            {isOpen && <LecturePlayer setIsOpen={setIsOpen} name={data.lecture} link={data.lectureLink}/>}
            <NavBarAuth name={name} />
            <div className="courselecture-headerBar">
                    <div className="courselecture-headerBar__name">
                        <FaBook className="courselecture-headerBar-icon"/>
                        <h1>{lectureDetails.name}</h1>
                    </div>
            </div>
            <div className="courselecture-body">
                <div className="courselecture-body-left">
                    {
                        lectureDetails.Topics.map((item,k) => {
                            return(
                                <div className="courselectureDetailCard">
                                    <div className="courselectureDetailCard-header">
                                    <p>{item.lecture}</p>
                                    </div>
                                    <div className="courselectureDetailCard-right">
                                            <FaPlay className="courselectureDetailCard-right-icon"
                                            onClick={()=>handleModal(item.lecture,item.lectureLink)}
                                            />
                                    </div>
                                </div>
                            );
                        })
                    }
            </div>
            </div>
        </div>
    )
    }
export default CourseLecture;