import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { VIEW_USER_DATA } from "../api/GET";
import { PUT_USER_DATA } from "../api/PUT";

function Views() {
    const { id } = useParams();
    console.log("receid", id);
    const history = useHistory();
    const [viewedit, SetViewEdit] = useState({
        view: "",
        body: "",
    });
    useEffect(() => {
        bodylists();
    }, [id]);
    const { title, body } = viewedit;
    const bodylists = () => [
        VIEW_USER_DATA(id)
            .then((res) => {
                console.log(res.data);
                SetViewEdit(res.data);
            })
            .catch((err) => {
                console.log(err);
            }),
    ];
    const handlechagestext = (e) => {
        SetViewEdit({ ...viewedit, [e.target.name]: e.target.value });
    };
    const updatehandledata = (e) => {
        e.preventDefault();
        PUT_USER_DATA(viewedit, id)
            .then((res) => {
                console.log(res);
                history.goBack();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <form onSubmit={updatehandledata}>
                <label>Title</label>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={viewedit.title}
                    name="title"
                    onChange={handlechagestext}
                />
                <br />
                <br />
                <label>Body</label>
                <input
                    type="text"
                    placeholder="Enter body"
                    value={viewedit.body}
                    name="body"
                    onChange={handlechagestext}
                />
                <br />
                <br />
                <button type="submit">Updates</button>
            </form>
        </div>
    );
}

export default Views;
