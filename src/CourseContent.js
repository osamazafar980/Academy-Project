import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate,useParams } from "react-router-dom";
import "./CourseContent.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {NavBarAuth,NavBarUnAuth} from "./NavBar";
import { FaBook } from "react-icons/fa";

function CourseContent() {
    let {name,cname} = useParams();
    const [user, loading, error] = useAuthState(auth);
    const [loaded, setLoaded] = useState(false);
    const [courseDetails, setCourseDetails] = useState({});
    
    const navigate = useNavigate();
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    useEffect(()=>{
        setCourseDetails({
            name:cname,
            lectuers:[
                {
                    name:"Analyzing categorical data",
                    subTopics:[
                            "Analyzing one categorical variable: Analyzing categorical data",
                            "Two-way tables: Analyzing categorical data",
                            "Distributions in two-way tables"
                        ]
                },
                {
                    name:"Analyzing categorical data",
                    subTopics:[
                            "Analyzing one categorical variable: Analyzing categorical data",
                            "Two-way tables: Analyzing categorical data",
                            "Distributions in two-way tables"
                        ]
                },
                {
                    name:"Analyzing categorical data",
                    subTopics:[
                            "Analyzing one categorical variable: Analyzing categorical data",
                            "Two-way tables: Analyzing categorical data",
                            "Distributions in two-way tables"
                        ]
                },
                {
                    name:"Analyzing categorical data",
                    subTopics:[
                            "Analyzing one categorical variable: Analyzing categorical data",
                            "Two-way tables: Analyzing categorical data",
                            "Distributions in two-way tables"
                        ]
                }
            ]
        })
    },[])

    return(
        <div>
            <NavBarAuth name={name} />
            <div className="headerBar">
                    <div className="headerBar__name">
                        <FaBook className="headerBar-icon"/>
                        <h1>{courseDetails.name}</h1>
                    </div>
                </div>
        </div>
    )
    }
export default CourseContent;