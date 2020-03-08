import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import './myModel.scss'

class MyModel extends Component {
    constructor(props) {
        super(props);
        this.node = document.createElement('div');
        this.node.classList.add('LX_MODEL_DOM_HIDLE')
        this.state = {

        };
    }
    render() {
        let view = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
        return createPortal(
            <div className="myModel" onClick={this.clearModel.bind(this)}>
                <div className="smodelContent" onClick={(e) => { e.stopPropagation() }}>
                    <div className="headInfo">
                        <p>帮助说明</p>
                        <img
                            className="closeImg"
                            src={require('../../../assets/com/close.png')}
                            onClick={this.clearModel.bind(this)}
                            alt=""
                        />
                    </div>
                    <div className="SmodelCt">
                        {view.map(item => item)}
                    </div>
                </div>
            </div>, //塞进传送门的JSX
            this.node //传送门的另一端DOM node
        );
    }
    clearModel(e) {
        window.document.body.removeChild(this.node);
    }
    componentDidMount() {
        this.props.visibel && window.document.body.appendChild(this.node);
    }
    componentDidUpdate() {
        // window.document.body.appendChild(this.node);
        if (this.props.visibel) {
            window.document.body.appendChild(this.node);
        } else {
            document.querySelector('.LX_MODEL_DOM_HIDLE') && window.document.body.removeChild(this.node);
        }
    }
}

export default MyModel