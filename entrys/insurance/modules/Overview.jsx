import React from 'react';
import { render } from 'react-dom';


var Overview=React.createClass({

    render:function(){
        var mainContent = (
            <div className="w890 margin mar_20">
                <div className="pro_R fr bg" style={{width:'890px'}}>
                    <div className="pro_bg">
                        <span className="fr pad_L">您的位置： <a>主页</a> &gt; 学界纵览</span>
                    </div>

                    <div style={{width:"800px", margin:'20px auto'}}>

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
module.exports=Overview;
