import React from 'react';
import { render } from 'react-dom';
import LiveTele from '../../../components/basic/LiveTele.jsx'
import '../../../build/css/starscore.css'
var ProxyQ = require('../../../components/proxy/ProxyQ');
var LearnVideo=React.createClass({
    getInitialState: function () {
        var sectionId=null;
        if(this.props.sectionId!==undefined && this.props.sectionId){
            sectionId = this.props.sectionId;
        }
        return{sectionId:sectionId,data:null,dataTwo:null};
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

                var url = "/func/courseBean/getGradeForRescource";
                var params={
                    sectionId:parseInt(ref.state.sectionId),
                    taskId:null,
                    resourceId:parseInt(a.accId)
                };
                ProxyQ.query(
                    'POST',
                    url,
                    params,
                    null,
                    function (res) {
                        var b = res.data;
                        if(res.re==-1||res.re=="-1") {
                            alert(res.data);
                            return;
                        }
                        ref.setState({dataTwo:b});
                    },
                    function (xhr, status, err) {
                        console.error(this.props.url, status, err.toString());
                    }
                );

            },
            function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }
        );
    },

    componentDidMount() {

        scoreFun($("#starttwo"),{
            fen_d:22,//每一个a的宽度
            ScoreGrade:5//a的个数5
        });
        //显示分数
        $(".show_number li p").each(function(index, element) {
            var num=$(this).attr("tip");
            var www=num*2*16;//
            $(this).css("width",www);
            $(this).parent(".atar_Show").siblings("span").text(num+"分");
        });

    },
    render:function(){
        if (this.state.data !== null && this.state.data !== undefined) {
            var data=this.state.data;
            var accId=data.accId;
            var urlb='http://localhost:8080/wxshg/accDownload?accId='+accId;
            var mainContent = (
                <div className="w890 margin mar_20">
                    <div className="pro_R fr bg" style={{width:'890px',height:'500px'}}>
                        <div className="pro_bg">
                            <span className="fr pad_L">您的位置： <a>主页</a> &gt; 讲座视频</span>
                        </div>
                        <div style={{width:"800px", marginLeft:'100px',mariginTop:"50px"}}>
                            <video id="my-video"  className="video-js" width="700" height="400" controls="controls" preload="auto"
                                   style={{width:'700px',height:'400px',controls:'controls' ,preload:'auto'}}
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
                <div style={{width:'100%'}}>
                    {mainContent}
                </div>
                <div  style={{marginLeft:'20%',marginTop:'5px'}}>

                <div id="starttwo" className="block clearfix">
                    <div  className="star_score"></div>
                    <p style={{float:'left'}}>您的评分：<span className="fenshu"></span> 分</p>
                    <div className="attitude"></div>
                </div>
                </div>
            </div>
        )
    }
});
module.exports=LearnVideo;
