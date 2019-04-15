import React, { Component } from 'react';

import './mini_component_css/location_cart.css';

class LocationCard extends Component{
    render(){
        return(
            <div className="contain_box" onMouseOver={this.props.onMouseOver.bind(this, this.props.image_url)}>                
                <div className="image_box">
                    <div className={this.props.isHot?"special_box":"nohot"}>
                        <small className={this.props.isHot?this.props.isHot:"nothing"}>{this.props.isHot?this.props.isHot:"nothing"}</small>
                    </div>
                        <img src={require(`${this.props.image_url}`)} height="100" width="200" alt={this.props.image_desc}></img>
                </div>
                <div className="name_box">
                    <p>{this.props.name}</p>
                    <small id="view">View</small>
                </div>
            </div>
        )
    }
}

export default LocationCard;