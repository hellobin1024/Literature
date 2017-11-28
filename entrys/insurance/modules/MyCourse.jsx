import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';
import '../../../css/insurance/components/passport.css';

var ProxyQ = require('../../../components/proxy/ProxyQ');
var SyncStore = require('../../../components/flux/stores/SyncStore');

var MyCourse=React.createClass({
    getInitialState: function () {
        this.initialData();
       return{data:null};
    },
    initialData:function(){
        var url = "/func/courseBean/getCourseListForReact";
        var ref=this;
        ProxyQ.query(
            'GET',
            url,
            null,
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
        //if (this.state.data !== null && this.state.data !== undefined) {
            //var trs=[];
            //var data=this.state.data;
            //data.map(function (item, i) {
            //    trs.push(
            //        <tbody  key={i} className="event-table">
            //        <tr>
            //            <td><h4 style={{marginTop:'15px'}}><strong>课程名称{item.courseName}:</strong></h4></td>
            //            <td><h4 style={{marginTop:'15px'}}><strong>开始时间{item.startDate}:</strong></h4></td>
            //        </tr>
            //
            //        </tbody>
            //    )
            //})
            var mainContent =
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
                                    <th width="300">1</th>
                                    <th width="300">1</th>
                                    <th width="300">1</th>
                                    <th width="300">1</th>
                                    <th width="300">1</th>
                                    <th width="300">1</th>
                                </tr>
                                </thead>



                            </table>
                        </div>
                     </div>
                 </div>
                </div>


        //}
        //else {
        //    this.initialData();
        //}
        return mainContent;


    }
});
module.exports=MyCourse;
