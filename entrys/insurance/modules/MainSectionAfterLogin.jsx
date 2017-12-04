import React from 'react';
import {render} from 'react-dom';

import TopNavAfterLogin from '../modules/TopNavAfterLogin.jsx';
import Footer from '../modules/Footer.jsx';
import MainPage from '../components/MainPage.jsx';
import Login from '../modules/Login.jsx';

import Introduce from '../modules/Introduce.jsx';
import Library from '../modules/Library.jsx';
import Survey from '../modules/Survey.jsx';
import Literarylife from '../modules/Literarylife.jsx';
import Live from '../modules/Live.jsx';
import Video from '../modules/Video.jsx';
import Audio from '../modules/Audio.jsx';
import MyCourse from '../modules/MyCourse.jsx';
import Collection from '../modules/Audio.jsx';
import Overview from '../modules/Overview.jsx';
import App from '../modules/App.jsx';

var config=require('../../../config.json');
import '../../../css/insurance/components/mainSection.css';
import '../../../css/insurance/components/css.css';
var SyncActions = require('../../../components/flux/actions/SyncActions');


var MainSection = React.createClass({
    iframeLoad:function(evt)
    {
        var target=evt.target;
        //$("#mainFrame").context.documentElement.scrollHeight
        var height=null;
        height=target.contentDocument.body.scrollHeight;
        target.height=height;
        //height=document.body.scrollHeight;
    },

    getInitialState: function () {
        var route = new Array();
        route.push(undefined);
        return ({route: route});
    },

    render:function(){
        var path=this.props.route.path;
        var ctrl;
        var breadcrumb;
        var label;
        var data=this.props.route.data;
        if(path!==undefined&&path!==null)
        {
            var route = this.state.route;
            if (route.length != 1)
                route.splice(0, 1);
            route.push(path);

            switch(path)
            {
                case window.App.getAppRoute() + "/":
                    ctrl = <App></App>;
                    label = "首页";
                    break;
                case window.App.getAppRoute() + "/mainPage":
                    ctrl = <MainPage></MainPage>;
                    label = "主页";
                    break;
                case window.App.getAppRoute() + "/myCourse":
                    ctrl = <MyCourse></MyCourse>;
                    label = "我的课程";
                    break;
                case window.App.getAppRoute() + "/introduce":
                    ctrl = <Introduce></Introduce>;
                    label = "中心概况";
                    break;
                case window.App.getAppRoute() + "/library":
                    ctrl = <Library></Library>;
                    label = "中心文库";
                    break;
                case window.App.getAppRoute() + "/survey":
                    ctrl = <Survey></Survey>;
                    label = "文学调研";
                    break;
                case window.App.getAppRoute() + "/literarylife":
                    ctrl = <Literarylife></Literarylife>;
                    label = "文学生活";
                    break;
                case window.App.getAppRoute() + "/live":
                    ctrl = <Live></Live>;
                    label = "讲座直播";
                    break;
                case window.App.getAppRoute() + "/video":
                    ctrl = <Video></Video>;
                    label = "讲座视频";
                    break;
                case window.App.getAppRoute() + "/audio":
                    ctrl = <Audio></Audio>;
                    label = "讲座音频";
                    break;
                case window.App.getAppRoute() + "/collection":
                    ctrl = <Collection></Collection>;
                    label = "文学典藏";
                    break;
                case window.App.getAppRoute() + "/overview":
                    ctrl = <Overview></Overview>;
                    label = "学界纵览";
                    break;

                default:

                    break;
            }

            var paths=path.split("/");
            var spans=new Array();
            if(paths[0]==""&&paths[1]=="")
            {
                spans.push(<span className="separator" key={0}>/</span>);
            }else{
                var k=0;
                paths.map(function(item,i) {
                    if(i==0)
                        spans.push(<span className="separator" key={k++}></span>);
                    else
                    {
                        spans.push(<span className="path-segment" key={k++}>{item}</span>);
                        if(i!==paths.length-1)
                            spans.push(<span className="separator" key={k++}>/</span>);
                    }

                });
            }
            breadcrumb =
                <div className="crumb_box">
                    <div className="crumb_title">
                        <span className="crumb_title_content">{spans}</span>

                        <div className="crumb_detail">{label}</div>
                    </div>
                </div>
        }

        //remove breadcrumb by zyy,yeah i am so native

        return (
            <div style={{margin: "0px auto 0 auto",width:"100%"}} className="baba">
                <TopNavAfterLogin />
                <div>
                    <div ref="mainSection" className="mainSection" style={{display:"none",marginLeft:"auto",marginRight:"auto",marginBottom:"auto"}}>
                        {ctrl}
                    </div>
                </div>
                <Footer />
            </div>
        );


    },
    componentDidMount: function() {
        //TodoStore.addChangeListener(this._onChange);
        $(this.refs["mainSection"]).slideDown(300);
    },
    componentWillUnmount: function() {
        //TODO:emit change
        $(this.refs["mainSection"]).slideUp(300);
        //TodoStore.removeChangeListener(this._onChange);
    }
});
module.exports = MainSection;