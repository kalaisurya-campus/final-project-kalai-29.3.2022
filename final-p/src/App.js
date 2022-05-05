import { useEffect, useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Redirect,
} from "react-router-dom";

import "./App.scss";
import CommonData from "./components/CRUD/CommonData.js";

import Formvalidation from "./components/Formvalidation";
import Home from "./components/Home";
import KalaiPost from "./components/KalaiPost";
import LOgin from "./components/LOgin";
import Navbar from "./components/Navbar";
import NewNvabrs from "./components/NewNavbars/NewNvabrs";
import Starts from "./components/Stars/Starts";
import Tabsactive from "./components/tabsactive/Tabsactive";

function App() {
    const getcolorset = () => {
        return JSON.parse(localStorage.getItem("darkthemeset"));
    };
    const [darkcolor, SetDarkColor] = useState(getcolorset());
    useEffect(() => {
        localStorage.setItem("darkthemeset", JSON.stringify(darkcolor));
    }, [darkcolor]);

    const user = true;

    return (
        <div className={darkcolor ? "theme--dark" : "theme--light"}>
            {/* <button
                onClick={() => SetDarkColor(!darkcolor)}
                style={{
                    border: "none",
                    outline: "none",
                    padding: "20px",
                    borderRadius: "50%",
                }}
            >
                {darkcolor ? "darkcolor" : "whitecolor"}
            </button> */}
            <div className="inside-app">
                {/* <Navbar user={user} /> */}
                <NewNvabrs />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route
                            path="/login"
                            render={() =>
                                user ? <Redirect to="/" /> : <LOgin />
                            }
                        />
                        <Route path="/navs" component={NewNvabrs} />
                        <Route
                            path="/post/:id"
                            render={() =>
                                user ? <KalaiPost /> : <Redirect to="/login" />
                            }
                            // component={KalaiPost}
                        />
                        <Route path="/form" component={Formvalidation} />
                        <Route path="/tabs" component={Tabsactive} />
                        <Route path="/star" component={Starts} />
                        <Route path="/crud" component={CommonData} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
