import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';
import '../../../css/insurance/components/passport.css';
var ProxyQ = require('../../../components/proxy/ProxyQ');
import LearnVideo from '../modules/LearnVideo.jsx';
var SyncStore = require('../../../components/flux/stores/SyncStore');

var Submission=React.createClass({

    getInitialState: function () {
        var homework=null;
        if(this.props.homework!==undefined && this.props.homework!==null){
            homework = this.props.homework;
        }
        return{data:homework};
    },

    initialData:function(){

    },
    render:function(){
        if (this.state.data !== null && this.state.data !== undefined) {
            var data=this.state.data;
            var trs=[];
            trs.push(
                <table className="table table-striped invoice-table">
                    <thead className="table-head">
                    <tr>
                        <th width="200">章节名称</th>
                        <th width="200">作业名称</th>
                        <th width="500">作业内容</th>
                        <th width="300">提交截止时间</th>
                    </tr>
                    </thead>
                    <tr style={{backgroundColor:"#cdc2c2"}}>
                        <td><h4 style={{}}><strong>{data.chapterName}</strong></h4></td>
                        <td><h4 style={{}}><strong>{data.name}</strong></h4></td>
                        <td><h4 style={{}}><strong>{data.content}</strong></h4></td>
                        <td><h4 style={{}}><strong>{data.endTime}</strong></h4></td>

                    </tr>
            </table>
            )
            var mainContent = (
                <div className="w890 margin mar_20">
                    <div className="pro_R fr bg" style={{width:'890px',height:'500px'}}>
                        <div className="pro_bg">
                            <span className="fr pad_L">您的位置： <a>主页</a> &gt; 提交作业</span>
                        </div>
                        <div style={{width:"800px", margin:'20px auto'}}>
                            {trs}
                        </div>
                            <input style={{width:"800px",height:'300px'}} />
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
module.exports=Submission;
