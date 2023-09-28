import {useState} from "react";
import "./BackgroundVideo.css";

function BackgroundVideo() {    

    return <>
        <video className="bg-video">
            <source src="src\videos\BgVideo.mp4" />
        </video>
    </>
}

export default BackgroundVideo;