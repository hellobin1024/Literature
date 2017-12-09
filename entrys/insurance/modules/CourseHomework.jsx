import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';
import '../../../css/insurance/components/passport.css';
var ProxyQ = require('../../../components/proxy/ProxyQ');
import Submission from '../modules/Submission.jsx';
var SyncStore = require('../../../components/flux/stores/SyncStore');

var CourseHomework=React.createClass({

    getInitialState: function () {
        var id=null;
        if(this.props.id!==undefined && this.props.id){
            id = this.props.id;
        }
        return{id:id,datatwo:null,current:null,sectionId:null};
    },
    tabChange:function(tab,homework){
        this.setState({current:tab});
        this.setState({homeworkId:homework});
    },
    initialData:function(){
        var url = "/func/homeworkBean/getCourseHomeworkForReact";
        var ref=this;
        var tid=parseInt(this.state.id);
        var params={
            taskId:tid,
        };
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
            var prs=[];
            var mainContent=null;
            var data=this.state.data;
            var ref=this;
            data.map(function (item, i) {
                trs.push(
                    <tbody  className="event-table">
                    <tr style={{backgroundColor:"#cdc2c2"}}>
                        <td><h4 style={{}}><strong>{item.chapterName}</strong></h4></td>
                        <td><h4 style={{}}><strong>{item.name}</strong></h4></td>
                        <td><h4 style={{}}><strong>{item.content}</strong></h4></td>
                        <td><h4 style={{}}><strong>{item.endTime}</strong></h4></td>
                        <td>
                         <span style={{textDecoration:'underline',cursor:'pointer',color:'#054c61'}} onClick={ref.tabChange.bind(this,'Submission',item)}>
                             提交作业
                       </span>
                        </td>
                    </tr>
                    </tbody>
                )
            })

        } else {
            this.initialData();
        }
        if(this.state.current =='Submission'){
            var homework=this.state.homework;
            mainContent=(
                <Submission homework={homework}/>
            );
        }else {
            mainContent =
                <div>
                    <div className="clear">
                    </div>
                    <div className="w890 margin mar_20">
                        <div className="pro_R fr bg" style={{width:'890px'}}>
                            <div className="pro_bg">
                                <span className="fr pad_L">您的位置： <a>主页</a> &gt; 我的作业</span>
                            </div>

                            <div style={{width:"800px", margin:'20px auto'}}>
                                <table className="table table-striped invoice-table">
                                    <thead className="table-head">
                                    <tr>
                                        <th width="200">章节名称</th>
                                        <th width="200">作业名称</th>
                                        <th width="500">作业内容</th>
                                        <th width="300">提交截止时间</th>
                                        <th width="200"></th>
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
module.exports=CourseHomework;
