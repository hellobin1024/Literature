import React from 'react';
import { render } from 'react-dom';


var Survey=React.createClass({
    tabChange:function(tab){
        this.setState({current:tab});
    },

    render:function(){
        let content=null;
        switch (this.state.current) {
            case 'survey1':
                content =(
                    <Survey1 />
                );
                break;
            case 'survey2':
                content =(
                    <Survey2 />
                );
                break;
            case 'survey3':
                content =(
                    <Survey3 />
                );
                break;
            case 'survey4':
                content =(
                    <Survey4 />
                );
                break;
            case 'survey5':
                content =(
                    <Survey5 />
                );
                break;
            case 'survey6':
               content =(
                    <Survey6 />
                );
                break;
        }

        var mainContent = (
            <div className="w890 margin mar_20">
                <div className="pro_R fr bg" style={{width:'890px'}}>
                    <div className="pro_bg">
                        <span className="fr pad_L">您的位置： <a>主页</a> &gt; 文学调研</span>
                    </div>

                    <div style={{width:"800px", margin:'20px auto'}}>
                        <div id="aside" className="l" style={{height:'800px',border: '1px solid #1C6'}}>
                            <dl className="st-dl">
                                <dt><a data-pjax="true" onClick={this.tabChange.bind(this,'survey1')}>文学阅读调查</a></dt>
                                <dt><a data-pjax="true" onClick={this.tabChange.bind(this,'survey2')}>网络文学调查</a></dt>
                                <dt><a data-pjax="true" onClick={this.tabChange.bind(this,'survey3')}>文学经典传播</a></dt>
                                <dt><a data-pjax="true" onClick={this.tabChange.bind(this,'survey4')}>文学生产研究</a></dt>
                                <dt><a data-pjax="true" onClick={this.tabChange.bind(this,'survey5')}>古典文学传播</a></dt>
                                <dt><a data-pjax="true" onClick={this.tabChange.bind(this,'survey6')}>非主流文学生态</a></dt>
                            </dl>
                        </div>

                        <div id="content" className="r"  data-title="" style={{height: '800px'}}>
                            <div  id="balance">
                                {content}

                            </div>
                        </div>

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
module.exports=Survey;
