import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { GET_USER_DATA } from "../api/GET";
import "./styles/GetData.scss";
import { Modal } from "bootstrap";
import AddNewUsers from "../edit/AddNewUsers";
import { PUT_USER_DATA } from "../api/PUT";
import Views from "../views/Views";
import { DELETE_USER_DATAS } from "../api/DELETE";
let url;
function GetData(props) {
    const userefs = useRef(null);
    const [shows, SetShow] = useState([]);
    const [view, SetView] = useState([]);

    const [edits, SetEditBody] = useState([]);
    const [viewedit, SetViewEdit] = useState({
        view: "",
        body: "",
    });
    url = props.match.url;

    useEffect(() => {
        getdatausers();
    }, []);
    const getdatausers = async () => {
        try {
            const response = await GET_USER_DATA().then((res) => {
                console.log(res.data);
                SetShow(res.data);
            });
        } catch (err) {
            console.log(err, "ERROR Page Found");
        }
    };

    const ViewsData = (id) => {
        let ViewDatas = shows;
        ViewDatas.forEach((Element) => {
            if (Element.id === id) {
                SetView(Element);
                showModal();
            }
        });
    };

    const showModal = () => {
        const modalEle = userefs.current;
        const bsModal = new Modal(modalEle, {
            backdrop: "static",
            keyboard: false,
        });
        bsModal.show();
    };

    const showModalbody = () => {
        const modalEle = userefs.current;
        const bsModal = new Modal(modalEle, {
            backdrop: "static",
            keyboard: false,
        });
        bsModal.show();
    };

    const hideModal = () => {
        const modalEle = userefs.current;
        const bsModal = Modal.getInstance(modalEle);
        bsModal.hide();
    };

    const deletemethods = (id) => {
        DELETE_USER_DATAS(id)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        var newstudenst = shows.filter((item) => {
            return item.id !== id;
        });
        SetShow(newstudenst);
    };

    const { title, body } = viewedit;
    const handlechagestext = (e) => {
        SetViewEdit({ ...viewedit, [e.target.name]: e.target.value });
    };
    const updatehandledata = () => {
        PUT_USER_DATA(viewedit)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <div>
                <AddNewUsers />
                <Link to={`${url}/view/1`}>New </Link>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>USERID</th>
                            <th>BODY</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {shows.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.body}</td>
                                    <td>
                                        <button
                                            className="views"
                                            onClick={() => ViewsData(item.id)}
                                        >
                                            {/* <Link to={`${url}/view/${item.id}`}>
                                            View
                                        </Link> */}
                                            View
                                        </button>
                                    </td>
                                    <td>
                                        <button className="edits">
                                            {/* <Views id={item.id} /> */}
                                            <Link to={`${url}/view/${item.id}`}>
                                                EDit
                                            </Link>
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="deletes"
                                            onClick={() =>
                                                deletemethods(item.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        {shows.length === 0 && <div>No Data Found</div>}
                    </tbody>
                </table>
            </div>

            <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
                ref={userefs}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                {view.id}
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <h1>{view.title}</h1>
                            <p>{view.body}</p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* body edit page */}
        </>
    );
}

export default GetData;
