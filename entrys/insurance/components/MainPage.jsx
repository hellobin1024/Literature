import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

import TopNav from '../modules/TopNav.jsx';
import Footer from '../modules/Footer.jsx';


import Banner from '../../../components/ad/Banner/Banner';

var ProxyQ = require('../../../components/proxy/ProxyQ');

/**Configure the image information for the ad section start*/
const IMAGE_DATA = [
    {
        src: require('../../../components/ad/images/size7(1008.331)/1.gif'),
    },
    {
        src: require('../../../components/ad/images/size7(1008.331)/2.gif')
    }
];
/**Configure the image information for the ad section end*/

var MainPage = React.createClass({


    initialData: function () {
        this.getHomepageNews();
        this.getHomepageArticle();
    },
    getHomepageNews: function () {

        var url = "/func/homepageBean/getNewsInfoByTypeAndNumber";
        var ref = this;
        var params = {
            num:4,
            newsType:"ZXDT",
        };
        ProxyQ.query(
            'POST',
            url,
            params,
            null,
            function (res) {
                var a = res.data;
                ref.setState({news: a});
            },

            function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }
        );
    },
    getHomepageArticle: function () {

        var url = "/func/homepageBean/getNewsInfoByTypeAndNumber";
        var ref = this;
        var params = {
            num:5,
            newsType:"ZXWK",
        };
        ProxyQ.query(
            'POST',
            url,
            params,
            null,
            function (res) {
                var a = res.data;
                ref.setState({article: a});
            },

            function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }
        );
    },
    getInitialState: function () {
        return {data: null}

    },

    render: function () {
        var mainContent;
        var nrs=[];
        var lrs=[];
        if (this.state.news !== undefined && this.state.news !== null&& this.state.article !== null&& this.state.article !== null) {

            var news = this.state.news;
            news.map(function (item, i) {
                nrs.push(
                    <div key={i}>
                        <li>
                            <Link to={window.App.getAppRoute() + "/news"}>{item.title} </Link>
                        </li>
                    </div>
                )
            })

            var article = this.state.article;
            article.map(function (item, i) {
                lrs.push(
                    <div key={i}>
                        <li>
                            <Link to={window.App.getAppRoute() + "/library"}>{item.title} </Link>
                        </li>
                    </div>
                )
            })


            mainContent =
                <div>
                    <TopNav/>

                    <Banner
                        items={IMAGE_DATA}
                        width={'1008px'}
                        height={'331px'}
                        speed={0.6}
                        delay={2.6}
                        pause={true}
                        autoplay={true}
                        dots={true}
                        arrows={true}
                        animType={"Slider"}
                        />

                    <div className="clear"></div>


                    <div className="margin w1008">
                        <div className="product">
                            <div className="company mar_L">
                                <div className="company_B">
                                    中心动态
                                </div>
                                <Link to={window.App.getAppRoute() + "/news"}>
                                    <span className="about-more"><i href="javascript:void(0)">more&gt;&gt;</i></span>
                                </Link>
                                <div className="news_L">
                                    <div>
                                        <ul>
                                            {nrs}
                                            {/*<li>【预告】王湘云：中国希腊神话对比研究</li>*/}
                                            {/*<li>【实录】秦永洲：端午节的文化意蕴</li>*/}
                                            {/*<li>【实录】张丽军：“文摊”文学家赵树理</li>*/}
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div className="news mar_L">
                                <div className="news_B">
                                    中心文库
                                </div>
                                <Link to={window.App.getAppRoute() + "/library"}>
                                    <span className="news-more"><i href="javascript:void(0)">more&gt;&gt;</i></span>
                                </Link>
                                <div className="news_L">
                                    <div>
                                        <ul>
                                            {lrs}
                                            {/*<li>人民日报：过有情怀的“文学生活</li>*/}
                                            {/*<li>“文学生活”将成文学研究新生长点</li>*/}
                                            {/*<li>温儒敏：让学生“连滚带爬”地读书</li>*/}
                                            {/*<li>叶嘉莹：诗，让我们心灵不死</li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="news mar_L">
                                <div className="news_B">
                                    中心学人
                                </div>
                                <Link to={window.App.getAppRoute() + "/news"}>
                                    <span className="news-more"><i href="javascript:void(0)">more&gt;&gt;</i></span>
                                </Link>
                                <div className="news_L">
                                    <div>
                                        <table>
                                            <tr>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;温儒敏</td>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;黄万华</td>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贺仲明</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;叶诚生</td>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;张学军</td>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孙基林</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="clear">
                    </div>
                    <div className="margin w1008">
                        <div className="product">
                            <div className="product_B">
                                <a href="javascript:void(0)">文学调研 </a>
                            </div>
                            <Link to={window.App.getAppRoute() + "/lifeInsurance"}>
                                <div className="product_img">
                                    <img src={window.App.getResourceDeployPrefix() + "/images/uploads/project/wx1.jpg"}
                                         style={{width: '130px', height: '100px'}}></img>
                                </div>
                            </Link>
                            <Link to={window.App.getAppRoute() + "/carInsurance"}>
                                <div className="product_img">
                                    <img src={window.App.getResourceDeployPrefix() + "/images/uploads/project/wx2.jpg"}
                                         style={{width: '130px', height: '100px'}}></img>
                                </div>
                            </Link>
                            <Link to={window.App.getAppRoute() + "/lifeInsurance"}>
                                <div className="product_img">
                                    <img src={window.App.getResourceDeployPrefix() + "/images/uploads/project/wx3.jpg"}
                                         style={{width: '130px', height: '100px'}}></img>
                                </div>
                            </Link>
                            <Link to={window.App.getAppRoute() + "/lifeInsurance"}>
                                <div className="product_img">
                                    <img src={window.App.getResourceDeployPrefix() + "/images/uploads/project/wx4.jpg"}
                                         style={{width: '130px', height: '100px'}}></img>
                                </div>
                            </Link>
                            <Link to={window.App.getAppRoute() + "/carInsurance"}>
                                <div className="product_img">
                                    <img src={window.App.getResourceDeployPrefix() + "/images/uploads/project/wx5.jpg"}
                                         style={{width: '130px', height: '100px'}}></img>
                                </div>
                            </Link>
                            <Link to={window.App.getAppRoute() + "/lifeInsurance"}>
                                <div className="product_img">
                                    <img src={window.App.getResourceDeployPrefix() + "/images/uploads/project/wx6.jpg"}
                                         style={{width: '130px', height: '100px'}}></img>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="clear">
                    </div>
                    <Footer/>
                </div>
        } else{
            this.initialData();
        }


        return (
            <div>
                {mainContent}
            </div>
        );
    },
});
module.exports = MainPage;

