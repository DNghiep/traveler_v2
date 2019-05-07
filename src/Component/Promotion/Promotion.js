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
            to: this.props.promotData[index].name,
            startDay: this.props.getSearchInput().startDay,
            backDay: this.props.getSearchInput().backDay
        })
        await this.props.search();
    }
    render(){
        return(
            <div className="container-fluid" id="Promotion">
                <div className="row justify-content-center text-md-left text-sm-center">
                    
                    <div className="row col-lg-4 col-md-8 col-sm-12 px-0 no-gutters">
                        <PromotionCard name={this.props.promotData[0].name} 
                            imgUrl={this.props.promotData[0].imgUrl}
                            classSpec="col-12" 
                            handleClick={this.handleClick.bind(this, 0)}/>
                        <PromotionCard name={this.props.promotData[1].name} 
                            imgUrl={this.props.promotData[1].imgUrl}
                            classSpec="col-6" 
                            handleClick={this.handleClick.bind(this, 1)}/>
                        <PromotionCard name={this.props.promotData[2].name} 
                            imgUrl={this.props.promotData[2].imgUrl}
                            classSpec="col-6" 
                            handleClick={this.handleClick.bind(this, 2)}/>
                    </div>

                    <div className="row col-lg-2 col-md-4 col-3 px-0 no-gutters">
                        <PromotionCard name={this.props.promotData[3].name} 
                            imgUrl={this.props.promotData[3].imgUrl}
                            classSpec="col-lg-12 col-sm-12" 
                            handleClick={this.handleClick.bind(this, 3)}/>
                        <PromotionCard name={this.props.promotData[4].name} 
                            imgUrl={this.props.promotData[4].imgUrl}
                            classSpec="col-lg-12 col-sm-12" 
                            handleClick={this.handleClick.bind(this, 4)}/>
                        <PromotionCard name={this.props.promotData[5].name} 
                            imgUrl={this.props.promotData[5].imgUrl}
                            classSpec="col-lg-12 col-md-12 col-sm-12" 
                            handleClick={this.handleClick.bind(this, 5)}/>
                    </div>

                    <div className="row col-lg-6 col-md-12 col-9 px-0 no-gutters">
                        <PromotionCard name={this.props.promotData[6].name} 
                            imgUrl={this.props.promotData[6].imgUrl}
                            classSpec="col-12" 
                            handleClick={this.handleClick.bind(this, 6)}/>
                    </div>
                </div>
            </div>
        )
    }
}