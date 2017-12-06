/**
 * Created by outstudio on 16/5/6.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute,hashHistory } from 'react-router';
import App from './modules/App.jsx';
import MainPage from './components/MainPage.jsx';
import MainSectionAfterLogin from './modules/MainSectionAfterLogin.jsx';
import MainSection from './modules/MainSection.jsx';
import Login from './modules/Login.jsx';
import myCourse from './modules/MyCourse.jsx';
render((
    <Router history={hashHistory}>
        <Route path={window.App.getAppRoute()+"/"} component={App}>
            <IndexRoute component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/mainPage"} component={MainPage}/>
            <Route path={window.App.getAppRoute()+"/login"} component={Login}/>
            <Route path={window.App.getAppRoute()+"/MainSectionAfterLogin"} component={MainSectionAfterLogin}/>
            <Route path={window.App.getAppRoute()+"/introduce"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/library"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/survey"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/literarylife"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/live"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/myCourse"} component={MainSectionAfterLogin}/>
            <Route path={window.App.getAppRoute()+"/video"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/audio"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/collection"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/overview"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/news"} component={MainSection}/>


        </Route>
    </Router>
), document.getElementById('root'))
