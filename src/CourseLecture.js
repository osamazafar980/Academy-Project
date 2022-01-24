import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate,useParams } from "react-router-dom";
import "./CourseLecture.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {NavBarAuth,NavBarUnAuth} from "./NavBar";
import { FaBook,FaPlay } from "react-icons/fa";
import LecturePlayer from "./LecturePlayer";
import LectureExercise from "./LectureExercise";

function CourseLecture() {
    let {name,lname} = useParams();
    const [user, loading, error] = useAuthState(auth);
    const [loaded, setLoaded] = useState(false);
    const [isOpenPlayer, setisOpenPlayer] = useState(false);
    const [isOpenExercise, setisOpenExercise] = useState(false);
    const [lectureDetails, setLectureDetails] = useState({
        name:lname,
        Topics:[
                        {lecture:"Analyzing one categorical variable: Analyzing categorical playerData",lectureLink:"https://youtu.be/J5ZyNEB3ZWE",exerciseQuestions:[
                            {question:"what do you mean by that 1",options:["a","b","c","d"],answer:2},
                            {question:"what do you mean by that 2",options:["a","b","c","d"],answer:1},
                            {question:"what do you mean by that 3",options:["a","b","c","d"],answer:0},
                        ]},
                        {lecture:"Two-way tables: Analyzing categorical playerData",lectureLink:"https://youtu.be/6GtDwfg58Eo",exerciseQuestions:[
                            {question:"what do you mean by that 1",options:["a","b","c","d"],answer:2},
                            {question:"what do you mean by that 2",options:["a","b","c","d"],answer:1},
                            {question:"what do you mean by that 3",options:["a","b","c","d"],answer:0},
                        ]},
                        {lecture:"Distributions in two-way tables",lectureLink:"https://youtu.be/RUsLNDPdA38",exerciseQuestions:[
                            {question:"what do you mean by that 1",options:["a","b","c","d"],answer:2},
                            {question:"what do you mean by that 2",options:["a","b","c","d"],answer:1},
                            {question:"what do you mean by that 3",options:["a","b","c","d"],answer:0},
                        ]}
                    ]
            }
           
    );
    
    const navigate = useNavigate();
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    useEffect(()=>{
        console.log(name)
    },[])

const [playerData,setplayerData] = useState({lecture:"",lectureLink:""})
function handlePlayerModal(lecture,link){
    setplayerData({lecture:lecture,lectureLink:link})
    setisOpenPlayer(true)
}
const [exerciseData,setexerciseData] = useState({name:"",questions:[]})
function handleExerciseModal(name,exerciseQuestions){
    console.log(exerciseQuestions)
    setexerciseData({name:name,questions:exerciseQuestions})
    setisOpenExercise(true)
}
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
            {isOpenPlayer && <LecturePlayer setisOpenPlayer={setisOpenPlayer} name={playerData.lecture} link={playerData.lectureLink}/>}
            {isOpenExercise && <LectureExercise setIsExercisePlayer={setisOpenExercise} name={exerciseData.name} exerciseQuestions={exerciseData.questions}/>}
            
                {renderNav()}
            
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
                                            onClick={()=>handlePlayerModal(item.lecture,item.lectureLink)}
                                            />
                                    </div>
                                    <div className="courselectureDetailCard-right">
                                            <button className="exerciseStartButton"
                                            onClick={()=>handleExerciseModal(item.lecture,item.exerciseQuestions)}
                                            >Start Exercise</button>
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