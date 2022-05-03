import axios from "axios";

export default function GETDATA_TOOLS() {
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
}
