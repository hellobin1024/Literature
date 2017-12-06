import React from 'react';
import { render } from 'react-dom';

var Live=React.createClass({
    componentDidMount:function(){
        C.K({f:"rtmp://live.goldia.cn/live/livestream",x:"ckplayer_rtmp.xml"},"myvideo",600,521);
    },
    render:function(){
        var mainContent = (
            <div className="w890 margin mar_20">
                <div className="pro_R fr bg" style={{width:'890px'}}>
                    <div className="pro_bg">
                        <span className="fr pad_L">您的位置： <a>主页</a> &gt; 讲座直播</span>
                    </div>

                    <div style={{width:"800px", margin:'20px auto'}}>

                        <p id="myvideo" style={{display:'block',background:'#000',width:'600px',height:'521px'}}>CKplayer实例</p>

                    </div>
                </div>
            </div>
        )

        return(
            <div>
                <div className="clear">
                </div>
                {mainContent}
            </div>
        )
    }
});
module.exports=Live;
