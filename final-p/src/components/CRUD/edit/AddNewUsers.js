import React, { useState, useRef } from "react";
import { Modal } from "bootstrap";
import POST_USER_DATA from "../api/POST";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import GetData from "../Get/GetData";
let url;
function AddNewUsers(props) {
    const history = useHistory();

    const [status, SetStatus] = useState(false);
    const [addtitle, Addusers] = useState({
        title: "",
        body: "",
    });

    const { title, body } = addtitle;
    const userefs = useRef(null);
    const handlechages = (e) => {
        Addusers({ ...addtitle, [e.target.name]: e.target.value });
    };
    const handlesubmits = (e) => {
        e.preventDefault();

        POST_USER_DATA(addtitle)
            .then((res) => {
                console.log(res);
                SetStatus(true);
                hideModal();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    if (status) {
        return <GetData />;
    }
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

    return (
        <div>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                Launch static backdrop modal
            </button>

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
                                Modal title
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handlesubmits}>
                                <label>Title</label>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    name="title"
                                    value={title}
                                    onChange={handlechages}
                                />
                                <label>Body</label>
                                <input
                                    type="text"
                                    placeholder="Body"
                                    name="body"
                                    value={body}
                                    onChange={handlechages}
                                />
                                <button type="submit">Submits</button>
                            </form>
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
        </div>
    );
}

export default AddNewUsers;
