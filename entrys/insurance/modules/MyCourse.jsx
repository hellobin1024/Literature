import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';
import '../../../css/insurance/components/passport.css';
import CourseChapter from '../modules/CourseChapter.jsx';
var ProxyQ = require('../../../components/proxy/ProxyQ');
var SyncStore = require('../../../components/flux/stores/SyncStore');

var MyCourse=React.createClass({

    getInitialState: function () {
        this.initialData();
        return{data:null,current:null};
    },
    tabChange:function(tab,id){
        this.setState({current:tab});
        this.setState({id:id});
    },
    initialData:function(){
        var url = "/func/courseBean/getCourseListForReact";
        var ref=this;
        var params={};
        ProxyQ.query(
            'post',
            url,
            params,
            null,
            function (res) {
                var a = res.data;
                if(res.re==-1||res.re=="-1"){
                    alert(res.re);
                }
                ref.setState({data:a});
            },
            function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }
        );
    },
    render:function() {
        if (this.state.data !== null && this.state.data !== undefined) {
            var trs=[];
            var data=this.state.data;
            var ref=this;
            var mainContent=null;
            data.map(function (item, i) {
                trs.push(
                    <tbody  key={i} className="event-table">
                    <tr>
                        <td><h4 style={{}}><strong>{item.courseId}</strong></h4></td>
                        <td><h4 style={{}}><strong>{item.courseName}</strong></h4></td>
                        <td><h4 style={{}}><strong>{item.termId.termName}</strong></h4></td>
                        <td><h4 style={{}}><strong>{item.startDate}</strong></h4></td>
                        <td><h4 style={{}}><strong>{item.endDate}</strong></h4></td>
                        <td>
                            <span style={{textAlign:'center',fontSize:'14px',marginRight:'5px',textDecoration:'underline',cursor:'pointer',color:'#054c61'}} onClick={ref.tabChange.bind(this,'CourseChapter',item.courseId)}>
                                  开始学习
                            </span>
                        </td>
                    </tr>

                    </tbody>
                )
            })
        } else {
            this.initialData();
        }
        if(this.state.current =='CourseChapter'){
            var id=this.state.id;
            mainContent=(
                <CourseChapter id={id}/>
            );
        }else{
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
                                    <th width="500">课程名称</th>
                                    <th width="650">学期</th>
                                    <th width="500">开始时间</th>
                                    <th width="500">结束时间</th>
                                    <th width="300">操作</th>
                                </tr>
                                </thead>
                                {trs}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        }
        return mainContent;


    }
});
module.exports=MyCourse;
