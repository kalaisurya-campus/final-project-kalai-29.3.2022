import axios from "axios";

export function GET_USER_DATA() {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
}

export function VIEW_USER_DATA(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/`);
}
