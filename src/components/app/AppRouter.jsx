import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../user/Register";
import Login from "../user/Login";
import Home from "../home/Home";
import Search from "../search/Search";

export default function AppRouter(props) {
    return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/search" render={() => <Search store={props.store} /> } />
    </Switch>);
}
