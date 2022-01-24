import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate,useParams } from "react-router-dom";
import "./CourseContent.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {NavBarAuth,NavBarUnAuth} from "./NavBar";
import { FaBook,FaBookOpen } from "react-icons/fa";

function CourseContent() {
    let {name,cname} = useParams();
    const [user, loading, error] = useAuthState(auth);
    const [loaded, setLoaded] = useState(false);
    const [courseDetails, setCourseDetails] = useState({
        name:cname,
        lectures:[
            {
                name:"Analyzing categorical data",
                subTopics:[
                        {subTopicName:"Analyzing one categorical variable: Analyzing categorical data",subTopicsLink:"https://youtu.be/J5ZyNEB3ZWE"},
                        {subTopicName:"Two-way tables: Analyzing categorical data",subTopicsLink:"https://youtu.be/6GtDwfg58Eo"},
                        {subTopicName:"Distributions in two-way tables",subTopicsLink:"https://youtu.be/RUsLNDPdA38"}
                    ]
            },
            {
                name:"Analyzing categorical data",
                subTopics:[
                    {subTopicName:"Analyzing one categorical variable: Analyzing categorical data",subTopicsLink:"https://youtu.be/J5ZyNEB3ZWE"},
                    {subTopicName:"Two-way tables: Analyzing categorical data",subTopicsLink:"https://youtu.be/6GtDwfg58Eo"},
                    {subTopicName:"Distributions in two-way tables",subTopicsLink:"https://youtu.be/RUsLNDPdA38"}
                ]
            },
            {
                name:"Analyzing categorical data",
                subTopics:[
                    {subTopicName:"Analyzing one categorical variable: Analyzing categorical data",subTopicsLink:"https://youtu.be/J5ZyNEB3ZWE"},
                    {subTopicName:"Two-way tables: Analyzing categorical data",subTopicsLink:"https://youtu.be/6GtDwfg58Eo"},
                    {subTopicName:"Distributions in two-way tables",subTopicsLink:"https://youtu.be/RUsLNDPdA38"}
                ]
            },
            {
                name:"Analyzing categorical data",
                subTopics:[
                    {subTopicName:"Analyzing one categorical variable: Analyzing categorical data",subTopicsLink:"https://youtu.be/J5ZyNEB3ZWE"},
                    {subTopicName:"Two-way tables: Analyzing categorical data",subTopicsLink:"https://youtu.be/6GtDwfg58Eo"},
                    {subTopicName:"Distributions in two-way tables",subTopicsLink:"https://youtu.be/RUsLNDPdA38"}
                ]
            }
        ]
    });
    
    const navigate = useNavigate();
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    useEffect(()=>{
        
    },[])
    function renderNav(){
        if(name=="None"){
            return <NavBarUnAuth/>;
        }
        else{
            return <NavBarAuth name={name} />;
        }
    }
    return(
        <div>
            {renderNav()}
            <div className="headerBar">
                    <div className="headerBar__name">
                        <FaBook className="headerBar-icon"/>
                        <h1>{courseDetails.name}</h1>
                    </div>
            </div>
            <div className="coursecontent-body">
                <div className="coursecontent-body-left">
                    {
                        courseDetails.lectures.map(item => {
                            return(
                                <div className="detailCard">
                                    <div>
                                    <p>{item.name}</p>
                                    <ul className="detailCard-list">
                                        {
                                            item.subTopics.map(topic =>{
                                                return(
                                                <li>{topic.subTopicName}</li>
                                                );
                                            })
                                        }
                                    </ul>
                                    </div>
                                    <div className="detailCard-right">
                                            <FaBookOpen className="detailCard-right-icon"
                                            onClick={()=>{
                                                navigate("/courselecture/"+name+"/"+item.name)
                                            }}
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
export default CourseContent;