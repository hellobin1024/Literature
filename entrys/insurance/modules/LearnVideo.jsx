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
            //var urlb='accDownload?accId='+accId;
            var urlb='http://vjs.zencdn.net/v/oceans.mp4';
            var mainContent = (
                <div className="w890 margin mar_20">
                    <div className="pro_R fr bg" style={{width:'890px',height:'500px'}}>
                        <div className="pro_bg">
                            <span className="fr pad_L">您的位置： <a>主页</a> &gt; 讲座视频</span>
                        </div>
                        <div style={{width:"800px", marginLeft:'120px',mariginTop:"50px"}}>
                        <LiveTele option={{
                        url:urlb,
                        width:'600px',
                        height:'400px',
                        bufferTime:2,
                        startLevel:0

                        }}/>
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
