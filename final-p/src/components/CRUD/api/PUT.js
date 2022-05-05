import axios from "axios";

export function PUT_USER_DATA(data,id) {
    return axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
}
