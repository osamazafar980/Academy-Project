import React,{useState} from "react";
import "./LectureExercise.css" ;
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player'

const LectureExercise = ({ setIsExercisePlayer,name,exerciseQuestions }) => {
  const navigate = useNavigate();
  const [counter,setCounter] = useState(0);
  const [userAnswer,setUserAnswer] = useState(-1);
  const [done,setDone] = useState(false);
  const [next,setNext] = useState(false);
  const [status,setStatus] = useState(false);
  const [optionsCSS,setOptionsCSS] = useState(["LectureExerciseOption","LectureExerciseOption","LectureExerciseOption","LectureExerciseOption"]);
  function renderExerciseCard(){
      if(done){
        if(status){
          return(
            <div>
              <div className="AnswerBoxStatusCorrect">
                <p>Your Answer is Correct</p>
              </div>
            </div>
          )
        }else if(!status){
          return(
            <div>
              <div className="AnswerBoxStatusInCorrect">
                <p>Your Answer is Incorrect</p>
              </div>
            </div>
          )
        }  
      }else{
        if(next && status){
          return(
            <div>
              <div className="AnswerBoxStatusCorrect">
                <p>Your Answer is Correct</p>
              </div>
            </div>
          )
        }else if(next && !status){
          return(
            <div>
              <div className="AnswerBoxStatusInCorrect">
                <p>Your Answer is Incorrect</p>
              </div>
            </div>
          )
        }else
        {
          return(
        <>
        <p className="LectureExerciseQuestion">Question:   {exerciseQuestions[counter].question}</p>
      <div className="LectureExerciseOptions-block">
        <p className={optionsCSS[0]}
        onClick={()=>{
          setOptionsCSS(["LectureExerciseOption-selected","LectureExerciseOption","LectureExerciseOption","LectureExerciseOption"])
          setUserAnswer(0)
        }}
        >{exerciseQuestions[counter].options[0]}</p>
        <p className={optionsCSS[1]}
        onClick={()=>{
          setOptionsCSS(["LectureExerciseOption","LectureExerciseOption-selected","LectureExerciseOption","LectureExerciseOption"])
          setUserAnswer(1)
        }}
        >{exerciseQuestions[counter].options[1]}</p>
        <p className={optionsCSS[2]}
        onClick={()=>{
          setOptionsCSS(["LectureExerciseOption","LectureExerciseOption","LectureExerciseOption-selected","LectureExerciseOption"])
          setUserAnswer(2)
        }}
        >{exerciseQuestions[counter].options[2]}</p>
        <p className={optionsCSS[3]}
        onClick={()=>{
          setOptionsCSS(["LectureExerciseOption","LectureExerciseOption","LectureExerciseOption","LectureExerciseOption-selected"])
          setUserAnswer(3)
        }}
        >{exerciseQuestions[counter].options[3]}</p>
      </div>
      </>
          );
  }}}
  return (
    <>
      <div className="LectureExerciseDarkBG"/>
      <div className="LectureExerciseModal">
            <div className="LectureExerciseHeader">
                <p>{name}</p>
                <p className="LectureExerciseCloseButton"
                onClick={() => setIsExercisePlayer(false)}
                >Close</p>    
            </div> 
            <div className="LectureExerciseCard"> 
                {renderExerciseCard()}
                <div className="LectureExerciseControl">
                  <p className={done?"LectureExerciseControl-button-hide":"LectureExerciseControl-button"}
                  onClick={()=>{
                    if(counter+1<exerciseQuestions.length && !next){
                      if(userAnswer==-1){
                        alert("Please Select An Option.")
                      }
                      else{
                        if(userAnswer==exerciseQuestions[counter].answer){
                          setStatus(true)
                        }else{
                          setStatus(false)
                        }
                        setNext(true)
                        setCounter(counter+1)
                        setOptionsCSS(["LectureExerciseOption","LectureExerciseOption","LectureExerciseOption","LectureExerciseOption"])
                        setUserAnswer(-1)  
                      }
                    }else{
                      if(next){
                        setNext(false)
                      }else{
                      setDone(true)
                      }
                    }
                  }}
                  >{next?"Next":"Check Answer"}</p>
                </div>
            </div>
      </div>
    </>
  );
};

export default LectureExercise;