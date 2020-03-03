import React, { Component } from 'react'
import starImage from '../star.svg';

class AmazingButtons extends Component {
    render() {
        return (
            <div>
                <button className="btn-amazing">
                    <img src={starImage} className="star" alt="logo" />
                    Do. Or do not. There is no try.
                    <img src={starImage} className="star" alt="logo" />
                    <div className="shiny"></div>
                </button>
            </div>
        )
    }
}

export default AmazingButtons;