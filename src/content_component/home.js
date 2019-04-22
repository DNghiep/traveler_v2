import React, { Component } from 'react';

import {CSSTransition} from 'react-transition-group';

import './css_component/home.css';

import {Link} from 'react-router-dom';
//import data for cart slide bar
import Data from './mini_component/component_data/cartdata';
import LocationCard from './mini_component/location-card';
import Calendar from './calendar';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            sliderBarIndex: 0,
            sliderShow: 3,
            cartData: Data.data,
            imageUrl: Data.data[0].image_url,
            isIn: false
        }
        this.nextHandler = this.nextHandler.bind(this);
        this.prevHandler = this.prevHandler.bind(this);
        this.mouseOverHandler = this.onMouseOver.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        var oldstate = this.state;
        this.setState(
            {
                sliderBarIndex: oldstate.sliderBarIndex,
                sliderShow: oldstate.sliderShow,
                cartData: oldstate.cartData,
                imageUrl: oldstate.imageUrl,
                isIn: true
            }
        )
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        var oldstate = this.state;
        this.setState(
            {
                sliderBarIndex: oldstate.sliderBarIndex,
                sliderShow: oldstate.sliderShow,
                cartData: oldstate.cartData,
                imageUrl: oldstate.imageUrl,
                isIn: false
            }
        )
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        var oldstate = this.state;
        if(window.innerWidth < 940) oldstate.sliderShow = 1;
        else if(window.innerWidth < 1360) oldstate.sliderShow = 2;
        else oldstate.sliderShow = 3;
        this.setState({
            sliderBarIndex: 0,
            sliderShow: oldstate.sliderShow,
            cartData: oldstate.cartData,
            imageUrl: oldstate.imageUrl,
            isIn: oldstate.isIn
        })
    }

    nextHandler(){
        var oldstate = this.state;
        if(oldstate.sliderBarIndex === oldstate.cartData.length - this.state.sliderShow){oldstate.sliderBarIndex = 0}
        else{oldstate.sliderBarIndex++;}
        this.setState({
            sliderBarIndex: oldstate.sliderBarIndex,
            sliderShow: oldstate.sliderShow,
            cartData: oldstate.cartData,
            imageUrl: oldstate.imageUrl,
            isIn: oldstate.isIn
        })
    };

    prevHandler(){
        var oldstate = this.state;
        if(oldstate.sliderBarIndex === 0){oldstate.sliderBarIndex = oldstate.cartData.length - this.state.show_number}
        else{oldstate.sliderBarIndex--;}
        this.setState({
            sliderBarIndex: oldstate.sliderBarIndex,
            sliderShow: oldstate.sliderShow,
            cartData: oldstate.cartData,
            imageUrl: oldstate.imageUrl,
            isIn: oldstate.isIn
        })
    };

    onMouseOver(e, url){
        var oldstate = this.state;
        this.setState({
            sliderBarIndex: oldstate.sliderBarIndex,
            sliderShow: oldstate.sliderShow,
            cartData: oldstate.cartData,
            imageUrl: url,
            isIn: oldstate.isIn
        })
        console.log(`change to image ${url}`)
    }

    render() {
        return (
            <CSSTransition
            in={true}
            timeout={600}
            appear={true}
            classNames="component"
            >
                <div className="home-cover">
                    <div className="wallpaper-content">
                        <img src={require(`${this.state.imageUrl}`)} alt="wallpaper" className="wallpaper" />
                    </div>
                    <div className="center-box">
                        <Calendar/>
                    </div>
                    <div className="slider-box">
                        <div className="pre-btn" onClick={this.prevHandler}><i className="fas fa-arrow-circle-left"></i></div>
                        <div className="slider-cover">
                            <div className="slider-wrapper"
                            style={{'transform': `translateX(-${420*this.state.sliderBarIndex}px)`}}>
                                {this.state.cartData.map(item=>{
                                    return <LocationCard name={item.name}
                                        isHot={item.isHot}
                                        image_url={item.image_url}
                                        image_decs={item.image_decs}
                                        key={item.index}
                                        onMouseOver={this.mouseOverHandler.bind(this, item.image_url)} />
                                    }
                                    )
                                }
                            </div>
                        </div>
                        <div className="nex-btn" onClick={this.nextHandler}><i className="fas fa-arrow-circle-right"></i></div>
                    </div>
                </div>
            </CSSTransition>
        );
    }
}

export default Home;
