import { auto } from "@popperjs/core";
import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useRef, useState } from "react";
import GETDATA_TOOLS from "./api";

function ReadMoreDatasbutton(props) {
    const [isSets, SetTrues] = useState(false);
    const [storedata, SetStoreData] = useState([]);
    const [shownumbers, SetShowNumbers] = useState(3);
    const [names, SetNames] = useState("");
    let contents =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    useEffect(() => {
        getdataformate();
    }, []);
    const getdataformate = async () => {
        try {
            let dats = await GETDATA_TOOLS().then((res) => {
                console.log("welcome", res);
                SetStoreData(res.data);
            });
            let dataError = dats.message;
            console.log(dataError);
        } catch (err) {
            console.log(err);
            console.log(err.message);
        }
    };

    const reacMores = () => {
        SetTrues((e) => !e);
    };
    const lemits = 100;
    const shoes = () => {
        SetShowNumbers((p) => p + 3);
    };
    const shoesless = () => {
        SetShowNumbers((p) => p - 3);
    };

    const buttonshow = () => {
        if (shownumbers > 3) {
            return <button onClick={() => shoesless()}>Read More</button>;
        }
    };

    const userefone = useRef();
    let NmaeUser = "";
    const getName = () => {
        userefone.current.style.border = "2px solid red";
        userefone.current.style.borderRadius = "10px";
        return false;
    };
    console.log("receive", NmaeUser[0]);

    return (
        <div
            className="card"
            style={{
                width: "50%",
                height: auto,
            }}
        >
            {isSets ? (
                <p>{contents}</p>
            ) : (
                <p>{contents.substring(0, lemits)}</p>
            )}

            <button
                onClick={() => reacMores()}
                style={{
                    width: "20%",
                    border: "none",
                    outline: "none",
                    borderRadius: "20px",
                    padding: "10px",
                    backgroundColor: "orange",
                    fontWeight: 700,
                    color: "white",
                }}
            >
                {isSets ? "Read Less..." : "Read More..."}
            </button>
            {storedata.length === 0 && <div>No data Found</div>}
            {storedata.slice(0, shownumbers).map((ity, index) => {
                return (
                    <div key={index}>
                        <p>{ity.name}</p>
                    </div>
                );
            })}
            <button onClick={() => shoes()}>clikes</button>
            {buttonshow()}

            <input
                type="text"
                ref={userefone}
                value={names}
                name="names"
                onChange={(e) => SetNames(e.target.value)}
            />
            <button onClick={() => getName()}>getName</button>
            <h1>{NmaeUser[0]}</h1>
        </div>
    );
}

export default ReadMoreDatasbutton;
