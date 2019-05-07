import React, { Component } from "react";

import "./PromotionCard.css";

export default class PromotionCard extends Component {
    render() {
        return (
            <div className={`card ${this.props.classSpec}`}>
                <img
                    className="card-img"
                    src={require(`${this.props.imgUrl}`)}
                    alt="img description"
                />
                <div className="card-img-overlay">
                <h5 className="card-title text-light" onClick={this.props.handleClick}>{this.props.name}</h5>
                </div>
            </div>
        );
    }
}
