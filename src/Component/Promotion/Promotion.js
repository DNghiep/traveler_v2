import React, { Component } from 'react';

import './Promotion.scss';

import PromotionCard from './PromotionCard';

export default class Promotion extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    async handleClick(index, e){
        await this.props.setSearchInput({
            from: this.props.getSearchInput().from,
            to: this.props.promotionData[index].name,
            startDay: this.props.getSearchInput().startDay,
            backDay: this.props.getSearchInput().backDay
        })
        window.location.href="#Search";
    }
    render(){
        return(
            <div className="container-fluid" id="Promotion">
                <div className="row justify-content-center text-md-left text-sm-center">
                    
                    <div className="row col-lg-4 col-md-8 col-sm-12 px-0 no-gutters">
                        <PromotionCard name={this.props.promotionData[0].name} 
                            imgUrl={this.props.promotionData[0].imgUrl}
                            classSpec="col-12" 
                            handleClick={this.handleClick.bind(this, 0)}/>
                        <PromotionCard name={this.props.promotionData[1].name} 
                            imgUrl={this.props.promotionData[1].imgUrl}
                            classSpec="col-6" 
                            handleClick={this.handleClick.bind(this, 1)}/>
                        <PromotionCard name={this.props.promotionData[2].name} 
                            imgUrl={this.props.promotionData[2].imgUrl}
                            classSpec="col-6" 
                            handleClick={this.handleClick.bind(this, 2)}/>
                    </div>

                    <div className="row col-lg-2 col-md-4 col-3 px-0 no-gutters">
                        <PromotionCard name={this.props.promotionData[3].name} 
                            imgUrl={this.props.promotionData[3].imgUrl}
                            classSpec="col-lg-12 col-sm-12" 
                            handleClick={this.handleClick.bind(this, 3)}/>
                        <PromotionCard name={this.props.promotionData[4].name} 
                            imgUrl={this.props.promotionData[4].imgUrl}
                            classSpec="col-lg-12 col-sm-12" 
                            handleClick={this.handleClick.bind(this, 4)}/>
                        <PromotionCard name={this.props.promotionData[5].name} 
                            imgUrl={this.props.promotionData[5].imgUrl}
                            classSpec="col-lg-12 col-md-12 col-sm-12" 
                            handleClick={this.handleClick.bind(this, 5)}/>
                    </div>

                    <div className="row col-lg-6 col-md-12 col-9 px-0 no-gutters">
                        <PromotionCard name={this.props.promotionData[6].name} 
                            imgUrl={this.props.promotionData[6].imgUrl}
                            classSpec="col-12" 
                            handleClick={this.handleClick.bind(this, 6)}/>
                    </div>
                </div>
            </div>
        )
    }
}