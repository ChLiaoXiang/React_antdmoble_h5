import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './views/Home'
import LookIMG from './views/homePage/LookImg/LookImg'
import RunChart from './views/homePage/RunChart/RunChart'
class App extends React.Component {
	// 数据初始化以及继承
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}

	render() {
		return (
			<Router>
				{/* 主页面 */}
				<Route path="/" exact component={Home} />
				{/* 图片展示页面 */}
				<Route path="/lookimg" exact component={LookIMG} />
				{/* 走势图展示 */}
				<Route path="/runchart" exact component={RunChart} />
			</Router>
		)
	}
	componentDidMount() {

	}
	clearModel() {
		this.setState({
			show: true
		})
	}
}

export default App;
