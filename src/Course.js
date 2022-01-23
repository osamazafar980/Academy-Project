import "./Course.css"
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
    useParams
  } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {NavBarAuth,NavBarUnAuth} from "./NavBar";
import ReactPlayer from 'react-player'


function Course() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    
    let {name,course} = useParams();
    useEffect(() => {

    }, []);
    return(
        <div>
        {!user?<NavBarUnAuth/>:<NavBarAuth name={name}/>}
        <div className="main">
            <div className="left">
                <div className="header">
                    <h2>Course Name: {course}</h2>
                </div>
                <div className="Description">
                    <p>Please do not consider this answer as the right way to solve the problem, I imagine there's a good chance something better will arise as React Router v4 becomes more mature and leaves beta (It may even already exist and I just didn't discover it).</p>
                </div>
            </div>
            <div className="right">
                <ReactPlayer url='https://youtu.be/x2lT-AFKFC8' playing = {true} />
            </div>
        </div>
        </div>
    )
}

export default Course;