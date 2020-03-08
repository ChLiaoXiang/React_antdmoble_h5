import React from 'react'
import { TabBar } from 'antd-mobile'

import HomePage from './homePage/HomePage'
// 跟单 template
class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'homePage',	//默认选中值
		};
		
	}
	render() {
		return (
			<div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
				<TabBar
					unselectedTintColor="#B6BED2"
					tintColor="#D7203F"
					barTintColor="white"
					tabBarPosition="bottom"
				>
					<TabBar.Item
						title="主页"
						key="homePage"
						icon={<div style={{
							width: '24px',
							height: '24px',
							background: `url(${require("../assets/icon/homePage.png")}) center center /  24px 24px no-repeat`
						}}
						/>
						}
						selectedIcon={<div style={{
							width: '22px',
							height: '22px',
							background: `url(${require("../assets/icon/homePageS.png")}) center center /  24px 24px no-repeat`
						}}
						/>
						}
						selected={this.state.selectedTab === 'homePage'}
						onPress={() => {
							this.setState({
								selectedTab: 'homePage',
							});
						}}
					>
						<HomePage />
					</TabBar.Item>
					<TabBar.Item
						icon={
							<div style={{
								width: '24px',
								height: '24px',
								background: `url(${require("../assets/icon/kaiJiang.png")}) center center /  24px 24px no-repeat`
							}}
							/>
						}
						selectedIcon={
							<div style={{
								width: '22px',
								height: '22px',
								background: `url(${require("../assets/icon/kaiJiangS.png")}) center center /  24px 24px no-repeat`
							}}
							/>
						}
						title="荣誉"
						key="rYu"
						selected={this.state.selectedTab === 'rYu'}
						onPress={() => {
							this.setState({
								selectedTab: 'rYu',
							});
						}}
					>
						<div>厉害了点</div>
					</TabBar.Item>
					<TabBar.Item
						icon={
							<div style={{
								width: '45px',
								height: '45px',
								marginTop: '-22px',
								borderRadius: '50%',
								zIndex: '10',
								background: `url(${require("../assets/icon/goucai.png")}) center center /  45px 45px no-repeat`
							}}
							/>
						}
						selectedIcon={
							<div style={{
								width: '45px',
								height: '45px',
								marginTop: '-22px',
								borderRadius: '50%',
								zIndex: '10',
								background: `url(${require("../assets/icon/goucai.png")}) center center /  45px 45px no-repeat`
							}}
							/>
						}
						title="精彩"
						key="jCai"
						selected={this.state.selectedTab === 'jCai'}
						onPress={() => {
							this.setState({
								selectedTab: 'jCai',
							});
						}}
					>
						<div>精彩哟</div>
					</TabBar.Item>
					<TabBar.Item
						icon={
							<div style={{
								width: '24px',
								height: '24px',
								background: `url(${require("../assets/icon/genDan.png")}) center center /  24px 24px no-repeat`
							}}
							/>
						}
						selectedIcon={
							<div style={{
								width: '24px',
								height: '24px',
								background: `url(${require("../assets/icon/genDanS.png")}) center center /  24px 24px no-repeat`
							}}
							/>
						}
						title="日志"
						key="logTab"
						selected={this.state.selectedTab === 'logTab'}
						onPress={() => {
							this.setState({
								selectedTab: 'logTab',
							});
						}}
					>
						<div>个人日志</div>
					</TabBar.Item>
					<TabBar.Item
						icon={
							<div style={{
								width: '24px',
								height: '24px',
								background: `url(${require("../assets/icon/myPage.png")}) center center /  24px 24px no-repeat`
							}}
							/>
						}
						selectedIcon={
							<div style={{
								width: '22px',
								height: '22px',
								background: `url(${require("../assets/icon/myPageS.png")}) center center /  24px 24px no-repeat`
							}}
							/>
						}
						title="我的"
						key="myPage"
						selected={this.state.selectedTab === 'myPage'}
						onPress={() => {
							this.setState({
								selectedTab: 'myPage',
							});
						}}
					>
						<div>我的个人主页</div>
					</TabBar.Item>
				</TabBar>
			</div>
		);
	}
}

export default Homepage;
