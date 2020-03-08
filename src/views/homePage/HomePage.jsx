import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { NavBar, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import MyModel from '../publicmodule/MyModel/MyModel'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }
    render() {
        return (
            <div className="homePage">
                <NavBar mode="dark">我的主页</NavBar>
                <WingBlank>
                    <WhiteSpace />
                    {/* 显示模态框 */}
                    <Button  
                        type="primary" 
                        onClick={()=>{this.setState({show:true})}}
                    >
                        Show Model
                    </Button><WhiteSpace />
                    {/* 查看图片放大组件 */}
                    <Button
                        onClick={()=>{this.props.history.push('/lookimg')}}
                    >Look SelectIMG</Button><WhiteSpace />
                    <Button 
                        type="warning"
                        onClick={()=>{this.props.history.push('/runchart')}}
                    >Run Chart</Button><WhiteSpace />
                </WingBlank>
                {/* 显示模态框组件 */}
                <MyModel visibel={this.state.show}>
                    React Router 是一个基于 React 之上的强大路由库，
                    它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。
                    为了向你说明 React Router 解决的问题，让我们先来创建一个不使用它的应用。
                    所有文档中的示例代码都会使用 ES6/ES2015 语法和语言特性。
                    <WhiteSpace />
                    <Button type="primary" inline onClick={()=>{this.setState({show:false})}}>确定</Button>
                </MyModel>
            </div>
        )
    }
}

export default withRouter(HomePage)