import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../Styles/Slider.css" 
export default class Slider extends Component {
    render() {
        return (

            <div >
                <div  className="container d-sm-block d-none">
                    <div className="row " >
                    <Carousel autoPlay={true} className="col-12">
                <div className="Slid1" >
                    {/* <img src={Slid1} style={{height:"70vh"}}/> */}
                </div>
                <div className="Slid2" >
                   
                </div>
                <div className="Slid3">
                    
                </div>
            </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}
 
 