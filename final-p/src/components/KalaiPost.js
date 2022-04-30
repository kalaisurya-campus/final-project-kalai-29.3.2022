import React from "react";
import { useLocation } from "react-router";
import { Data } from "./PostData";

function KalaiPost(props) {
    console.log("uses", useLocation);
    const path = useLocation.pathname.split("/")[2];
    const posts = Data.find((p) => p.id=== path);
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
