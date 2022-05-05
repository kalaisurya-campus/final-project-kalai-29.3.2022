import axios from "axios";

export default function POST_USER_DATA(data) {
    return axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
}
