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
        var path = SyncStore.getRouter();
        var userName = SyncStore.getLoginName();
        return ({loginState: note, path:path,userName: userName})
    },

    componentWillReceiveProps: function () {
        var note = SyncStore.getNote();
        var userName = SyncStore.getLoginName();
        this.setState({loginState: note, userName: userName})
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
    login:function(){

        var ref=this;
        if(flag==0) {

            var a=1;
            var loginPage = this.refs['loginPage'];
            var username = $(loginPage).find("input[name='username']").val();
            var password = $(loginPage).find("input[name='password']").val();
            if (username == ''||username==null) {
                alert('请填写用户名！');
            } else if(password ==''||password == null){
                alert('请填写密码！');
            } else {
                var url = "/func/auth/webLogin";
                var params = {
                    loginName: username,
                    password: password,
                    validateCode: "1"
                };

                ProxyQ.query(
                    'post',
                    url,
                    params,
                    null,
                    function (res) {
                        var reCode = res.reCode;
                        var realName = res.loginName;
                        if (reCode !== undefined && reCode !== null && (reCode == 0 || reCode == "0")) { //登陆成功
                            SyncStore.setNote(); //设置全局登录状态为true
                            SyncStore.setResult(true);
                            SyncStore.setLoginName(realName);
                            ref.setState({path:"/MainSectionAfterLogin"});
                            console.log("登陆成功！");
                            flag = 1;
                            document.getElementById("goToOther").click();
                        }else{
                            alert("登录失败！");
                        }
                    }.bind(this),
                    function (xhr, status, err) {
                        console.error(this.props.url, status, err.toString());
                    }.bind(this)
                );
            }

        }
    },
    render: function () {
        var ref=this;
        return (
            <div  ref="loginPage">
                <div className="top w1008 margin" >
                    <div className="logo">
                        <a>
                            <img src={window.App.getResourceDeployPrefix() + "/images/logo_02.png"}
                                 style={{width: '400px', height: '100px'}}></img>
                        </a>
                    </div>

                    <div className="fr">
                        <span> 用户名:
                            <input id="loginUsername" name="username" />
                        </span>
                        <span> 密码:
                            <input id="loginPassword" name="password"/>
                        </span>
                        <span>
                              <button type="button" id="login" onClick={this.login}>
                                  <a style={{color:'#000000'}}>登录</a>
                                  <Link to={window.App.getAppRoute() + this.state.path} id="goToOther"></Link>
                              </button>
                        </span>

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
                            <li className="nav_menu-item">
                                <Link to={window.App.getAppRoute() + "/news"}>
                                    <i>中心动态</i>
                                </Link>
                            </li>
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
