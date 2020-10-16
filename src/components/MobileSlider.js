import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../Styles/Slider.css" 
export default class MobileSlider extends Component {
    render() {
        return (

            
                <div style={{height:"45vh"}} className="container d-sm-none d-md-none d-lg-none d-xl-none">
                    <div className="row " >
                    <Carousel autoPlay={true} className="col-12">
                <div className="MobileSlid1" >
                    {/* <img src={Slid1} style={{height:"70vh"}}/> */}
                </div>
                <div className="MobileSlid2" >
                   
                </div>
                <div className="MobileSlid3">
                    
                </div>
            </Carousel>
                    </div>
                </div>
        
        );
    }
}
 
 