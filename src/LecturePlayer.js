import React from "react";
import "./LecturePlayer.css" ;
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player'

const LecturePlayer = ({ setisOpenPlayer,name,link }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="LecturePlayerDarkBG"/>
      <div className="LecturePlayerModal">
            <div className="LecturePlayerHeader">
                <p>{name}</p>
                <p className="LecturePlayerCloseButton"
                onClick={() => setisOpenPlayer(false)}
                >Close</p>    
            </div> 
            <ReactPlayer url={link} playing = {true} controls={true}/>
      </div>
    </>
  );
};

export default LecturePlayer;