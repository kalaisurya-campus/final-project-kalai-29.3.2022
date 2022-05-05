import {
    ERROR_LOADING_USER_DATA_GET,
    GET_LOADING_USER_DATA_GET,
    Received_USER_DATA_GET,
} from "../types";

const initialState = {
    items: [],
    loading: false,
    error: "",
};

const User_Reducer_Get_DATA = (state = initialState, action) => {
    switch (action.type) {
        case Received_USER_DATA_GET:
            return {
                ...state,
                loading: true,
                error: "",
            };
        case GET_LOADING_USER_DATA_GET:
            return {
                ...state,
                loading: false,
                items: action.payload,
            };
        case ERROR_LOADING_USER_DATA_GET:
            return {
                ...state,
                loadign: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default User_Reducer_Get_DATA;
