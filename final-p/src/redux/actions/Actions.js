import axios from "axios";
import {
    ERROR_LOADING_USER_DATA_GET,
    GET_LOADING_USER_DATA_GET,
    Received_USER_DATA_GET,
    USER_DATA_GET,
} from "../types";

const aCTION_DATA_GET_NAMES = () => async (dispatch, getstate) => {
    dispatch({ type: Received_USER_DATA_GET });
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        // console.log("kalaipurush", response.data);
        dispatch({ type: GET_LOADING_USER_DATA_GET, payload: response.data });
    } catch (err) {
        dispatch({ type: ERROR_LOADING_USER_DATA_GET, error: "No Data Found" });
        // console.log("PAGE NOT FOUND", err);
    }
};

export default aCTION_DATA_GET_NAMES;
