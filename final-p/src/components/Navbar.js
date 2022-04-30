import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbars.scss";
function Navbar({ user }) {
    const history = useHistory();
    return (
        <div className="inside_navbar">
            <div className="main-navbar">
                <span onClick={() => history.push("/")}>New App</span>

                {user ? (
                    <ul>
                        <li>
                            <img
                                src=" https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
                                className="img1"
                            />
                        </li>
                        <li>Kalai</li>
                        <li>Logout</li>
                    </ul>
                ) : (
                    <div>
                        <button onClick={() => history.push("/login")}>
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
