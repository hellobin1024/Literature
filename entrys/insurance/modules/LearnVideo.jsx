import React from 'react';
import { render } from 'react-dom';
import LiveTele from '../../../components/basic/LiveTele.jsx'
var ProxyQ = require('../../../components/proxy/ProxyQ');
var LearnVideo=React.createClass({
    getInitialState: function () {
        var sectionId=null;
        if(this.props.sectionId!==undefined && this.props.sectionId){
            sectionId = this.props.sectionId;
        }
        return{sectionId:sectionId,data:null};
    },
    initialData:function(){
        var url = "/func/courseBean/getSectionResource";
        var ref=this;
        var params={
            accId:null,
           type:"VIDEO",
           sectionId:this.state.sectionId

        };
        ProxyQ.query(
            'post',
            url,
            params,
            null,
            function (res) {
                var a = res.data;
                if(res.re==-1||res.re=="-1"){
                    alert(res.data);
                    return;
                }
                ref.setState({data:a});
            },
            function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }
        );
    },
    render:function(){
        if (this.state.data !== null && this.state.data !== undefined) {
            var data=this.state.data;
            var accId=data.accId;
            var urlb='http://211.87.225.194:8080/wxshg/accDownload?accId='+accId;
            var mainContent = (
                <div className="w890 margin mar_20">
                    <div className="pro_R fr bg" style={{width:'890px',height:'500px'}}>
                        <div className="pro_bg">
                            <span className="fr pad_L">您的位置： <a>主页</a> &gt; 讲座视频</span>
                        </div>
                        <div style={{width:"800px", marginLeft:'100px',mariginTop:"50px"}}>
                            <video id="my-video"  className="video-js" width="700" height="400"  controls preload="auto"
                                   style={{width:'700px',height:'400px',preload:"auto",controls:"controls"}}
                                   >
                                <source src={urlb} type='video/mp4'/>
                                    <p className="vjs-no-js">
                                            To view this video please enable JavaScript, and consider upgrading to a web browser that
                                            <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                                        </p>
                            </video>
                        </div>
                    </div>
                </div>
            )
        }else{

            this.initialData();
        }
        return(
            <div>
                <div className="clear">
                </div>
                {mainContent}
            </div>
        )
    }
});
module.exports=LearnVideo;
