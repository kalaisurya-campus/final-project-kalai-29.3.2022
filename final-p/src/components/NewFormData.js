import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect } from "react";
import GETDATA_TOOLS from "./api";


function NewFormData(props) {
    useEffect(() => {
        getdataformate();
    }, []);
    const getdataformate = async () => {
        try {
            let dats = await GETDATA_TOOLS().then((res) => {
                console.log("welcome", res);
            });
            let dataError = dats.message;
            console.log(dataError);
        } catch (err) {
            console.log(err);
            console.log(err.message);
        }
    };
    return <div></div>;
}

export default NewFormData;
