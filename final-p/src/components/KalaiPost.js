import React from "react";
import { useLocation } from "react-router";
import { Data } from "./PostData";

function KalaiPost(props) {
    const loaction = useLocation();
    // console.log("lll", loaction);
    const path = loaction.pathname.split("/")[3];
    const posts = Data.find((p) => p.id.toString() === path);
    console.log(loaction);
    return (
        <div>
            <span>{posts.id}</span>
            <p>
                <img src={posts.image} alt="no" />
            </p>
            <span>{posts.name}</span>
        </div>
    );
}

export default KalaiPost;
