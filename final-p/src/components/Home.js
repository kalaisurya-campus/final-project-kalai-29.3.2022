import React from "react";
import { useContext } from "react";
import DataProvidersMainData from "../contextapi/DataProviderApis";
import Postcards from "./Postcards";
import { Data } from "./PostData";

function Home(props) {
    const data = useContext(DataProvidersMainData);
    return (
        <div>
            <h1>{data.name}</h1>
            {data.tests.length===0 && <div>No Data Found Function</div>}
            {data.tests.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.name}</h1>
                    </div>
                );
            })}
            {Data.map((items, index) => {
                return <Postcards post={items} key={index} />;
            })}
        </div>
    );
}

export default Home;
