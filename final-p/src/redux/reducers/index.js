import { combineReducers } from "redux";
import User_Reducer_Get_DATA from "./UserGet";

const Rootreducers = combineReducers({
    users: User_Reducer_Get_DATA,
});

export default Rootreducers;
