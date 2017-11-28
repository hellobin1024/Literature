/**
 * Created by douxiaobin on 2016/10/27.
 */
import React from 'react';
import { render } from 'react-dom';


var AboutUs=React.createClass({

    render:function(){
        var mainContent = (
            <div className="w890 margin mar_20">
                <div className="pro_R fr bg" style={{width:'890px'}}>
                    <div className="pro_bg">
                        <span className="fr pad_L">您的位置： <a>主页</a> &gt; 关于我们</span>
                    </div>

                    <div style={{width:"800px", margin:'20px auto'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        “山东大学当代中国文学生活研究中心”成立于2013年10月，挂靠山东大学文学与新闻传播学院，中心主任为著名学者、山东大学文科一级教授温儒敏先生。
                        中心目前承担国家社科基金重大项目“当前社会‘文学生活’调查研究”（12＆ZD169）。<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        中心是开放的研究平台，研究成员包括山东大学文学与新闻传播学院中国现当代文学专业全体教师，新闻传播学专业部分教师，
                        以及北京大学、华南师范大学、山西师范大学等多单位教师。<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中心是国内学界首个借鉴社会学方法研究文学与生活互动关系的学术机构。
                        它致力于以新的学术视野，突破传统文学研究局限于作家作品的内循环模式，将文学社会学、传播学、心理学等学科知识交叉综合，注重实证调查研究，将目光投向文学的阅读状态与精神转化，
                        考察文学在社会中的出版发行、流通和接受状况，密切关注非主流文学社团和各种亚文学生产。
                        这种研究把注意力放到大量普通读者身上，考察他们文学阅读所传递出来的普遍的趣味、审美与判断。关注不同领域、不同层次读者的“反应”，分析文学作品和文学现象在社会精神生活中所起的作用，
                        力图使文学研究接通“地气”，把最真实、最生机勃勃的一面还原给作家和研究者。
                        这是对文学研究方法的全新探索，将为当前文学研究注入新的活力。<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中心现有五个研究方向：（一）当前社会的文学阅读和接受调查；（二）网络文学及其他新媒体文学的调查研究；
                        （三）当前社会中文学生产的实证研究；（四）文学经典在当前社会的传播和影响研究；（五）当前社会的非主流文学生态研究；
                        （六）当前古典文学阅读与传播效果调查。各方向主持人分别为贺仲明教授、张颐武教授、郑春教授、张学军教授、刘方政教授、王小舒教授。<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中心于2013年10月18—20日在山东省济南市召开“当前社会文学生活研究”暨“山东大学当代中国文学生活研究中心”成立学术研讨会，
                        来自全国20余所高校和研究机构的80多位专家学者参加会议，新华社、《光明日报》等做了报道，引起学界的普遍关注。<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中心展开了广泛的社会调查和研究工作，部分成果已经在《人民日报》《求是》《中国现代文学研究丛刊》、《湖南社会科学》等多家刊物上发表，
                        《新华文摘》、《中国社会科学文摘》对多篇论文进行了全文转载和重点推介，产生了广泛的社会反响。中心近期又取得了丰富的研究成果，将在《文艺争鸣》、《山东大学学报》、《东岳论丛》等多家学术期刊上陆续刊出。<br/>
                        相关链接：<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.国家重大课题“文学生活研究”开题<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>http://www.lit.sdu.edu.cn/Article/ShowArticle.asp?ArticleID=5649 </a><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.“当前社会文学生活研究”研讨会成立<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>http://www.lit.sdu.edu.cn/Article/ShowArticle.asp?ArticleID=6238 </a><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.莫言教授启动我院“山东大学文学大讲堂”<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>http://www.lit.sdu.edu.cn/Article/ShowArticle.asp?ArticleID=5951</a><br/>
                        欢迎加入文学生活馆：<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QQ群:（1）群293705575（2000人已满）；（2）群239718646（1000人已满）；（3）群305557006（1000人可加）。<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;微信公众号：扫描下方二维码或搜索sduread<br/>
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
module.exports=AboutUs;



