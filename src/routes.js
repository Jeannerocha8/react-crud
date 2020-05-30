import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ListPost from './component/ListPost';
import Post from './component/Post';
import Page from './Page';
import Login from './component/Login';

 function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/home" component={Page}></Route>
                <Route exact path="/listpost" component={ListPost}></Route>
                <Route exact path="/post:id" component= {Post}></Route>
                <Route exact path="/login" component= {Login}></Route>
            </Switch>
        </BrowserRouter>
    );
}
 export default Routes;
