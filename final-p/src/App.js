import { useEffect, useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Redirect,
} from "react-router-dom";

import "./App.scss";
import Home from "./components/Home";
import KalaiPost from "./components/KalaiPost";
import LOgin from "./components/LOgin";
import Navbar from "./components/Navbar";

function App() {
    const getcolorset = () => {
        return JSON.parse(localStorage.getItem("darkthemeset"));
    };
    const [darkcolor, SetDarkColor] = useState(getcolorset());
    useEffect(() => {
        localStorage.setItem("darkthemeset", JSON.stringify(darkcolor));
    }, [darkcolor]);

    const user = false;

    return (
        <div className={darkcolor ? "theme--dark" : "theme--light"}>
            <button onClick={() => SetDarkColor(!darkcolor)} style={{border:"none",outline:"none",padding:"20px",borderRadius:"50%"}}>
              {darkcolor?"darkcolor":"whitecolor"}
            </button>
            <div className="inside-app">
                <Navbar user={user} />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            path="/login"
                            render={() =>
                                user ? <Redirect to="/" /> : <LOgin />
                            }
                        />
                        <Route
                            path="/post/:id"
                            render={() =>
                                user ? <KalaiPost /> : <Redirect to="/login" />
                            }
                            // component={KalaiPost}
                        />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
