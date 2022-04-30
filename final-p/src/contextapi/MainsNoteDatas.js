import axios from "axios";
import React, { useEffect, useState } from "react";
import DataProvidersMainData from "./DataProviderApis";

function MainsNoteDatas(props) {
    const name = "kalaisurya";
    const [tests, SetTests] = useState([]);

    useEffect(() => {
        getdatamains();
    }, []);
    const getdatamains = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                SetTests(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const providerdatas = {
        name,
        tests,
    };
    return (
        <div>
            <DataProvidersMainData.Provider value={providerdatas}>
                {props.children}
            </DataProvidersMainData.Provider>
        </div>
    );
}

export default MainsNoteDatas;
