import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';
import '../../../css/insurance/components/passport.css';
var ProxyQ = require('../../../components/proxy/ProxyQ');
import LearnVideo from '../modules/LearnVideo.jsx';
var SyncStore = require('../../../components/flux/stores/SyncStore');

var CourseChapter=React.createClass({

    getInitialState: function () {
        var id=null;
        if(this.props.id!==undefined && this.props.id){
            id = this.props.id;
        }
        return{id:id,datatwo:null,current:null,sectionId:null};
    },
    tabChange:function(tab,sectionId){
        this.setState({current:tab});
        this.setState({sectionId:sectionId});
    },
    initialData:function(){
        var url = "/func/courseBean/getCourseInfoForReact";
        var ref=this;
        var trf=this;
        var sid=parseInt(this.state.id);
        var params={
            courseId:sid,
        };
        ProxyQ.query(
            'post',
            url,
            params,
            null,
            function (res1) {
                var a = res1.data;
                if(res1.re==-1||res1.re=="-1"){
                    alert(res1.data);
                }
                var url = "/func/courseBean/getCourseSectionForReact";
                var params={
                    courseId:sid,
                };
                ProxyQ.query(
                    'post',
                    url,
                    params,
                    null,
                    function (res2) {
                        var b = res2.data;
                        if(res2.re==-1||res2.re=="-1"){
                            alert(res2.data);
                        }
                        ref.setState({datatwo:b});
                        trf.setState({data:a});
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

    render:function() {
        if (this.state.data !== null && this.state.data !== undefined) {
            var trs=[];
            var prs=[];
            var mainContent=null;
            var data=this.state.data;
            var datatwo=this.state.datatwo;
            var ref=this;
                trs.push(
                    <tbody  className="event-table">
                    <tr>
                        <td><h4 style={{}}><strong>{data.courseNum}</strong></h4></td>
                        <td><h4 style={{}}><strong>{data.courseName}</strong></h4></td>
                        <td><h4 style={{}}><strong>{data.classHour}</strong></h4></td>
                        <td><h4 style={{}}><strong>{data.teachGroup}</strong></h4></td>
                        <td><h4 style={{}}><strong>{data.reference}</strong></h4></td>
                        <td><h4 style={{}}><strong>{data.briefIntroduction}</strong></h4></td>
                        <td><h4 style={{}}><strong>{data.subSpec}</strong></h4></td>
                    </tr>

                    </tbody>
                )
            datatwo.map(function (item, i) {
                prs.push(
                    <div style={{backgroundColor:"#cdc2c2",marginTop:'10px'}}>
                        <div style={{float:'left',marginLeft:'50px'}}>
                             <span>{item.sectionId}</span>

                             <span style={{marginLeft:'50px'}}>{item.sectionName}</span>
                        </div>
                        <div style={{float:'left',textAlign:'right',marginLeft:'620px'}}>
                         <span style={{textAlign:'center',fontSize:'14px',marginRight:'5px',textDecoration:'underline',cursor:'pointer',color:'#054c61'}}
                               onClick={ref.tabChange.bind(this,'LearnVideo',item.sectionId)}>

                                  开始学习
                       </span>
                       </div>
                        <div className="clearfix"/>
                    </div>
                )
            })

        } else {
            this.initialData();
        }
        if(this.state.current =='LearnVideo'){
            var sectionId=this.state.sectionId;
            mainContent=(
                <LearnVideo sectionId={sectionId}/>
            );
        }else {
            mainContent =
                <div>
                    <div className="clear">
                    </div>
                    <div className="w890 margin mar_20">
                        <div className="pro_R fr bg" style={{width:'890px'}}>
                            <div className="pro_bg">
                                <span className="fr pad_L">您的位置： <a>主页</a> &gt; 我的课程</span>
                            </div>

                            <div style={{width:"800px", margin:'20px auto'}}>
                                <table className="table table-striped invoice-table">
                                    <thead className="table-head">
                                    <tr>
                                        <th width="150">课程编号</th>
                                        <th width="200">课程名称</th>
                                        <th width="200">课时</th>
                                        <th width="200">授课教师</th>
                                        <th width="300">参考书</th>
                                        <th width="500">介绍</th>
                                        <th width="400">章节介绍</th>
                                    </tr>
                                    </thead>
                                    {trs}
                                </table>
                            </div>
                            {prs}
                        </div>
                    </div>
                </div>
        }
        return mainContent;


    }
});
module.exports=CourseChapter;
