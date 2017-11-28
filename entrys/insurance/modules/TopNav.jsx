/**
 * Created by douxiaobin on 2017/02/10.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import MainSectionAfterLogin from '../modules/MainSectionAfterLogin.jsx';
var ProxyQ = require('../../../components/proxy/ProxyQ');
var SyncStore = require('../../../components/flux/stores/SyncStore');
var flag = 0;
var TopNav = React.createClass({
    click: function (ob) { //保存跳转的页面信息
        SyncStore.setRouter(ob);
    },

    getInitialState: function () {
        flag = 0;
        var note = SyncStore.getNote();
        var userName = SyncStore.getLoginName();
        return ({loginState: note, userName: userName})
    },

    componentWillReceiveProps: function () {
        var note = SyncStore.getNote();
        var userName = SyncStore.getLoginName();
        this.setState({loginState: note, userName: userName})
    },
    initValue: function () {
        /*if(SyncStore.getNote()==false) {
            var url = "/func/insurance/getLogin";
            ProxyQ.query(
                'get',
                url,
                null,
                null,
                function (ob) {
                    var name = ob.resList;
                    if (name !== "null") {
                        SyncStore.setNote();
                        SyncStore.setLoginName(name);
                        this.componentWillReceiveProps();
                    }

                }.bind(this),
                function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            );
        }*/
    },
    exit: function () {
        if (flag == 0) {
            var url = "/func/auth/webLogout";
            var params = {};

            ProxyQ.query(
                'get',
                url,
                params,
                null,
                function (res) {
                    SyncStore.initNote();
                    SyncStore.setLoginName({});
                    console.log("退出成功！");
                    flag = 1;
                    document.getElementById("goToOther").click();
                    // this.componentWillReceiveProps();

                }.bind(this),
                function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            );

        }
    },
    login: function () {

    },

    render: function () {
        var ref=this;
        return (
            <div>
                <div className="top w1008 margin" onLoad={this.initValue()}>
                    <div className="logo">
                        <a>
                            <img src={window.App.getResourceDeployPrefix() + "/images/logo_02.png"}
                                 style={{width: '400px', height: '100px'}}></img>
                        </a>
                    </div>

                    <div className="fr">
                        <span> 用户名:
                            <input id="pass"/>
                        </span>
                        <span> 密码:
                            <input id="pass2"/>
                        </span>
                        <span>
                             <Link to={window.App.getAppRoute() + "/MainSectionAfterLogin"}>
                             <button >登录</button>
                             </Link>
                        </span>
                        {/*<ul className="link">*/}
                            {/*{this.state.loginState ?*/}
                                {/*<li className="plogin">*/}
                                    {/*<i className="user" onClick={this.exit} style={{*/}
                                        {/*float: 'right',*/}
                                        {/*width: '20px',*/}
                                        {/*cursor: 'pointer',*/}
                                        {/*textDecoration: 'underline'*/}
                                    {/*}}>*/}
                                        {/*<i className='icon-off'></i>*/}
                                        {/*<Link to={window.App.getAppRoute() + "/mainPage"} id="goToOther"></Link>*/}
                                    {/*</i>*/}
                                    {/*<a className="user" style={{float: 'right', width: '95px'}}*/}
                                       {/*href="javascript:void(0)">*/}
                                        {/*<i className='icon-user'></i>*/}
                                        {/*<strong style={{marginLeft: '10px'}}>{this.state.userName}</strong>*/}
                                    {/*</a>*/}

                                {/*</li>*/}

                                {/*:*/}
                                {/*<li className="plogin">*/}
                                    {/*<Link to={window.App.getAppRoute() + "/login"}>*/}
                                        {/*<i className="login-btn" onClick={this.click.bind(null, "/mainPage")}>教师登录</i>*/}
                                    {/*</Link>*/}
                                    {/*<Link to={window.App.getAppRoute() + "/login"}>*/}
                                        {/*<i className="login-btn" onClick={this.click.bind(null, "/mainPage")}>学生登录</i>*/}
                                    {/*</Link>*/}
                                    {/*<a href="login.html">登录</a>*/}
                                {/*</li>*/}

                            {/*}*/}
                        {/*</ul>*/}
                    </div>
                </div>

                <div className="clear">
                </div>
                <div className="nav">
                    <div className="w1200 margin">
                        <ul className="nav_menu">
                            <li className="nav_menu-item">
                                <Link to={window.App.getAppRoute() + "/"}>
                                    <i>首页</i>
                                </Link>
                            </li>
                            <li className="nav_menu-item">
                                <Link to={window.App.getAppRoute() + "/introduce"}>
                                    <i>中心概况</i>
                                </Link>
                            </li>
                            {/*<li className="nav_menu-item">*/}
                            {/*<Link to={window.App.getAppRoute() + "/library"}>*/}
                            {/*<i>中心文库</i>*/}
                            {/*</Link>*/}
                            {/*</li>*/}


                            <li className="nav_menu-item">
                                <Link to={window.App.getAppRoute() + "/live"}>
                                    <i>讲座直播</i>
                                </Link>
                            </li>
                            <li className="nav_menu-item"><a href="javascript:void(0)" onClick="">讲座回放</a>
                                <ul className="nav_submenu">
                                    <li className="nav_submenu-item">
                                        <Link to={window.App.getAppRoute() + "/video"}>
                                            <i>讲座视频</i>
                                        </Link>
                                    </li>
                                    <li className="nav_submenu-item">
                                        <Link to={window.App.getAppRoute() + "/audio"}>
                                            <i>讲座音频</i>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav_menu-item">
                                <Link to={window.App.getAppRoute() + "/literarylife"}>
                                    <i>文学生活</i>
                                </Link>
                            </li>
                            <li className="nav_menu-item">
                                <Link to={window.App.getAppRoute() + "/collection"}>
                                    <i>文学典藏</i>
                                </Link>
                            </li>
                            <li className="nav_menu-item">
                                <Link to={window.App.getAppRoute() + "/overview"}>
                                    <i>学界纵览</i>
                                </Link>
                            </li>
                            <li className="nav_menu-item">
                                <Link to={window.App.getAppRoute() + "/survey"}>
                                    <i>文学调研</i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    },
});
module.exports = TopNav;
/**
 * Created by douxiaobin on 2017/02/10.
 */
