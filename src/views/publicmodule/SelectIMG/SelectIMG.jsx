import React, { Component } from 'react'
import './selectImg.scss'
import { createPortal } from 'react-dom';

class SelectIMG extends Component {
    constructor(props) {
        super(props);
        this.state = {
            node: document.createElement('div')
        };
        this.node = document.createElement('div')

    }
    render() {
        return (
            <div className="selectImg" onClick={this.lookForIMG.bind(this)}>
                <img
                    src={this.props.imgurl}
                    onError={(e) => { e.target.src = require('../../../assets/icon/error_Load.png') }}
                    alt=""
                />
                {
                    createPortal(
                        <div className="showModelImg" onClick={this.removeModelIMG.bind(this)}>
                            <img
                                src={this.props.imgurl}
                                onClick={(e) => { e.stopPropagation() }}
                                onError={(e) => { e.target.src = require('../../../assets/icon/error_Load.png') }}
                                alt=""
                            />
                        </div>,
                        this.node
                    )
                }
            </div>
        )
    }
    lookForIMG() {
        window.document.body.appendChild(this.node);
    }
    removeModelIMG(e) {
        e.stopPropagation();
        window.document.body.removeChild(this.node);
    }
}

export default SelectIMG;