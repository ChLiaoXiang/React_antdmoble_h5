import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile'
import './runchart.scss'
import BScroll from 'better-scroll'

class RunChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.DataList = [
            [33, 33, 33, 22, 33, 33, 33, 33, 33, 33],
            [33, 33, 33, 33, 33, 33, 33, 22, 33, 33],
            [33, 33, 33, 33, 33, 22, 33, 33, 33, 33],
            [33, 33, 33, 33, 33, 33, 33, 33, 33, 22],
            [33, 33, 33, 33, 33, 22, 33, 33, 33, 33],
            [33, 33, 22, 33, 33, 33, 33, 33, 33, 33],
            [33, 33, 33, 33, 33, 33, 33, 22, 33, 33],
            [33, 33, 33, 33, 33, 22, 33, 33, 33, 33],
            [22, 33, 33, 33, 33, 33, 33, 33, 33, 33],
            [33, 33, 33, 33, 22, 33, 33, 33, 33, 33],
            [22, 33, 33, 33, 33, 33, 33, 33, 33, 33],
            [33, 33, 33, 22, 33, 33, 33, 33, 33, 33],
            [33, 33, 33, 33, 33, 22, 33, 33, 33, 33],
            [33, 33, 33, 33, 33, 33, 33, 22, 33, 33],
            [33, 33, 22, 33, 33, 33, 33, 33, 33, 33],
            [22, 33, 33, 33, 33, 33, 33, 33, 33, 33],
            [33, 22, 33, 33, 33, 33, 33, 33, 33, 33],
            [33, 22, 33, 33, 33, 33, 33, 33, 33, 33],
            [33, 33, 22, 33, 33, 33, 33, 33, 33, 33],
            [33, 33, 33, 22, 33, 33, 33, 33, 33, 33],
        ]
    }
    render() {
        return (
            <div className="demoGraph">
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.go(-1) }}
                >走势图</NavBar>
                {/* 表的头部 */}
                <div className="graphTop">
                    <p>期号</p>
                    <p>开奖号码</p>
                    <div className="graphTopScroll" ref="lineX">
                        <div className="listGraphscroll">
                            <p>0</p>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                            <p>7</p>
                            <p>8</p>
                            <p>9</p>
                        </div>
                    </div>
                </div>
                {/* 表的身体 */}
                <div className="braphBody">
                    <div className="braphBody_left" ref="lineY_left">
                        <div className="left_scroll">
                            {
                                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(item => (
                                    <div className="leftList_hans" key={item}>
                                        <p>142期</p>
                                        <p>2,9,7,5,6</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="braphBody_right" ref="lineY_right">
                        <div
                            className="braphBody_content"
                        >
                            <div className="content_list">
                                {
                                    this.DataList.map((item, index) => (
                                        <div className="line_Number" key={index}>
                                            {
                                                item.map((listItem, listKey) => (
                                                    <p key={listKey}>
                                                        <span className={listItem === 22 ? 'action' : null}>{listItem}</span>
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="mapLineChart" ref="canvasParentElement">
                                <canvas ref="chartLine">

                                </canvas>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 浮动模块的设置 */}
                <div className="fixedModel">
                    <div className="foot_left">
                        <p>总数先次数</p>
                        <p>平均遗漏值</p>
                        <p>最大遗漏值</p>
                        <p>最大连出值</p>
                    </div>
                    <div className="foot_right" ref="foot_x">
                        <div className="footListScroll">
                            {
                                [0, 1, 2, 3].map(item => (
                                    <div className="lineList" key={item}>
                                        <p>0</p>
                                        <p>1</p>
                                        <p>2</p>
                                        <p>3</p>
                                        <p>4</p>
                                        <p>5</p>
                                        <p>6</p>
                                        <p>7</p>
                                        <p>8</p>
                                        <p>9</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        // better-scroll
        this.initBetterScroll();
        // 绘制折线图
        this.drawChart(this.DataList)
    }
    // 初始化better-scroll 插件
    initBetterScroll() {
        let lineX = new BScroll(this.refs.lineX, {
            scrollX: true,
            bounce: false
        })
        let lineY_left = new BScroll(this.refs.lineY_left, {
            scrollY: true,
            bounce: false
        })
        let lineY_right = new BScroll(this.refs.lineY_right, {
            scrollY: true,
            scrollX: true,
            bounce: false,
            probeType: 3
        })
        let foot_x = new BScroll(this.refs.foot_x, {
            scrollX: true,
            bounce: false
        })
        lineY_right.on('scroll', (res) => {
            lineX.scrollTo(res.x, 0);
            foot_x.scrollTo(res.x, 0);
            lineY_left.scrollTo(0, res.y);
        })
    }
    // 图形的绘制！
    drawChart(arr = []) {
        

        let canvasParentElement = this.refs.canvasParentElement;
        let canvas = this.refs.chartLine;
        let ctx = canvas.getContext('2d');
        ctx.canvas.width = canvasParentElement.clientWidth;
        ctx.canvas.height = canvasParentElement.clientHeight;
        // 宽的基数
        let baseWidth = ctx.canvas.width / 10;
        // 高的基数
        let baseHeight = ctx.canvas.height / 20;
        ctx.beginPath(); //新建一条path
        //#region 
        var arr1 = [];
        arr.forEach( item => {
            arr1.push(item.indexOf(22));
        })
        arr1.forEach( (item,index) => {
            if(index === 0){
                ctx.moveTo(baseWidth * item + baseWidth / 2, baseHeight / 2 + baseHeight * index);
            }else{
                ctx.lineTo(baseWidth * item + baseWidth / 2, baseHeight / 2 + baseHeight * index);
            }
        })
        ////#endregion
        // ctx.moveTo(baseWidth * 3 + baseWidth / 2, baseHeight / 2 + baseHeight * 0); //起点
        // ctx.lineTo(baseWidth * 7 + baseWidth / 2, baseHeight / 2 + baseHeight * 1);  //目标点
        // ctx.lineTo(baseWidth * 5 + baseWidth / 2, baseHeight / 2 + baseHeight * 2); //目标点
        // ctx.lineTo(baseWidth * 9 + baseWidth / 2, baseHeight / 2 + baseHeight * 3); //目标点
        // ctx.lineTo(baseWidth * 5 + baseWidth / 2, baseHeight / 2 + baseHeight * 4); //目标点
        // ctx.lineTo(baseWidth * 2 + baseWidth / 2, baseHeight / 2 + baseHeight * 5); //目标点
        // ctx.lineTo(baseWidth * 7 + baseWidth / 2, baseHeight / 2 + baseHeight * 6); //目标点
        // ctx.lineTo(baseWidth * 5 + baseWidth / 2, baseHeight / 2 + baseHeight * 7); //目标点
        // ctx.lineTo(baseWidth * 0 + baseWidth / 2, baseHeight / 2 + baseHeight * 8); //目标点
        // ctx.lineTo(baseWidth * 4 + baseWidth / 2, baseHeight / 2 + baseHeight * 9); //目标点
        // ctx.lineTo(baseWidth * 0 + baseWidth / 2, baseHeight / 2 + baseHeight * 10); //目标点
        // ctx.lineTo(baseWidth * 3 + baseWidth / 2, baseHeight / 2 + baseHeight * 11); //目标点
        // ctx.lineTo(baseWidth * 5 + baseWidth / 2, baseHeight / 2 + baseHeight * 12); //目标点
        // ctx.lineTo(baseWidth * 7 + baseWidth / 2, baseHeight / 2 + baseHeight * 13); //目标点
        // ctx.lineTo(baseWidth * 2 + baseWidth / 2, baseHeight / 2 + baseHeight * 14); //目标点
        // ctx.lineTo(baseWidth * 0 + baseWidth / 2, baseHeight / 2 + baseHeight * 15); //目标点
        // ctx.lineTo(baseWidth * 1 + baseWidth / 2, baseHeight / 2 + baseHeight * 16); //目标点
        // ctx.lineTo(baseWidth * 1 + baseWidth / 2, baseHeight / 2 + baseHeight * 17); //目标点
        // ctx.lineTo(baseWidth * 2 + baseWidth / 2, baseHeight / 2 + baseHeight * 18); //目标点
        // ctx.lineTo(baseWidth * 3 + baseWidth / 2, baseHeight / 2 + baseHeight * 19); //目标点
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.stroke();
    }
}

export default RunChart;