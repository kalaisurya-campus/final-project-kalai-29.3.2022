import axios from "axios";

export function DELETE_USER_DATAS(id) {
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}/`);
}
