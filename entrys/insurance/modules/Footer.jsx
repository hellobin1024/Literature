import React from 'react';
import {render} from 'react-dom';

var Mpage=React.createClass({

    render:function(){
        return(
            <div style={{marginTop:'40px'}}>

                <div className="clear">
                </div>
                <div className="footer" style={{height: '35px'}}>
                    <div className="margin">
                        <p>版权所有©山东大学当代中国文学生活研究中心
                        </p>
                    </div>
                </div>

            </div>
        );
    },
});
module.exports=Mpage;
