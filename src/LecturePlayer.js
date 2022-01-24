import React from "react";
import "./LecturePlayer.css" ;
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player'

const LecturePlayer = ({ setIsOpen,name,link }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="LecturePlayerDarkBG"/>
      <div className="LecturePlayerModal">
            <div className="LecturePlayerHeader">
                <p>{name}</p>
                <p className="LecturePlayerCloseButton"
                onClick={() => setIsOpen(false)}
                >Close</p>    
            </div> 
            <ReactPlayer url={link} playing = {true} />
      </div>
    </>
  );
};

export default LecturePlayer;