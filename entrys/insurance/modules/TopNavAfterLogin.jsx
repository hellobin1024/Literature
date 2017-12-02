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
    render: function () {
        return (
            <div>
                {/*   <div className="top w1008 margin" onLoad={this.initValue()}>
                 <div className="logo">
                 <a>
                 <img src={window.App.getResourceDeployPrefix() + "/images/logo_02.png"}
                 style={{width: '400px', height: '100px'}}></img>
                 </a>
                 </div>
                 </div>*/}
                <div className="clear">
                </div>
                <div className="nav"  >
                    <div className="w1200 margin">
                        <div style={{fontSize:"25px",float:"left",marginLeft:"5px",fontFamily:"楷体"}}>
                            文学生活馆
                        </div>
                        <div style={{float:"left"}}>
                            <ul className="nav_menu">
                                <li className="nav_menu-item">
                                    <Link to={window.App.getAppRoute() + "/"}>
                                        <i>首页</i>
                                    </Link>
                                </li>
                                <li className="nav_menu-item">
                                    <Link to={window.App.getAppRoute() + "/myCourse"}>
                                        <i>我的课程</i>
                                    </Link>
                                </li>
                                <li className="nav_menu-item">
                                    <Link to={window.App.getAppRoute() + "/live"}>
                                        <i>作业提交</i>
                                    </Link>
                                </li>
                                <li className="nav_menu-item"><a href="javascript:void(0)" onClick="">考试</a>
                                    <ul className="nav_submenu">
                                        <li className="nav_submenu-item">
                                            <Link to={window.App.getAppRoute() + "/video"}>
                                                <i>在线考试</i>
                                            </Link>
                                        </li>
                                        <li className="nav_submenu-item">
                                            <Link to={window.App.getAppRoute() + "/audio"}>
                                                <i>成绩查看</i>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav_menu-item">
                                    <Link to={window.App.getAppRoute() + "/literarylife"}>
                                        <i>观看直播</i>
                                    </Link>
                                </li>


                                <li className="nav_menu-item">
                                    <Link to={window.App.getAppRoute() + "/collection"}>
                                        <i>新闻资讯</i>
                                    </Link>
                                </li>

                                <li className="nav_menu-item">
                                    <Link to={window.App.getAppRoute() + "/overview"}>
                                        <i>讲座报名</i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
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
