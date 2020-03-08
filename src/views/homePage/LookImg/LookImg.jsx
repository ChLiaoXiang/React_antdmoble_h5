import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'
import SelectIMG from '../../publicmodule/SelectIMG/SelectIMG'

class LookImg extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.go(-1) }}
                >查看图片</NavBar>
                <SelectIMG imgurl={require('../../../assets/icon/caixun.png')} />
                <SelectIMG imgurl={require('../../../assets/icon/caixun.png')} />
                <SelectIMG imgurl={require('../../../assets/icon/caixun.png')} />
                <SelectIMG imgurl={require('../../../assets/icon/caixun.png')} />
            </div>
        )
    }
}

export default LookImg