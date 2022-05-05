import React, { useEffect } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataProvidersMainData from "../contextapi/DataProviderApis";
import aCTION_DATA_GET_NAMES from "../redux/actions/Actions";
import Postcards from "./Postcards";
import { Data } from "./PostData";

function Home(props) {
    const data = useContext(DataProvidersMainData);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    useEffect(() => {
        dispatch(aCTION_DATA_GET_NAMES());
    }, []);
    console.log("received loading", state.users.loading);
    console.log("received datas", state.users.items);
    console.log("received error", state.users.error);
    return (
        <div>
            <div className="loading data">
                {state.users.loading ? (
                    <div>Loading.....</div>
                ) : (
                    <div>
                        {state.users.items.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h1>{item.username}</h1>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <h1>{data.name}</h1>
            {data.tests.length === 0 && <div>No Data Found Function</div>}
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
