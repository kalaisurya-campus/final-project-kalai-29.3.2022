import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AddNewUsers from "./edit/AddNewUsers";
import Edits from "./edit/AddNewUsers";
import GetData from "./Get/GetData";
import Views from "./views/Views";
let url;
export default class CommonData extends Component {
    constructor(props) {
        super(props);
        url = this.props.match.path;
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={`${url}/`} component={GetData} />
                    <Route path={`${url}/add`} component={AddNewUsers} />
                    <Route path={`${url}/view/:id`} component={Views} />
                </Switch>
            </div>
        );
    }
}
