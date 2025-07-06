import React, { useState } from 'react'
import { Navbar, Container, Carousel, FormControl, Nav } from 'react-bootstrap'

import sliderimg from "../../images/DDD.png";
import slider4 from "../../images/ssss.png";

import prod4 from "../../images/Infinity Growth.png";

const Silder = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="slider-background" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={slider4}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title fon fs-1 my-4">Stay Tuned  </h3>
                        <p className="slider-text fon fs-2 pt-4"> Ask About Offers </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="slider-background3" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className="py-4 px-3"
                        src={sliderimg}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className=" sil  fs-1 px-3 "> BUY 2 GET 1 </h3>
                        <p className="slider-text">  FREE </p>
                    </div>
                </div>
            </Carousel.Item>

         

            <Carousel.Item className="slider-background4" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "1000px" }}
                        className=""
                        src={prod4}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title"></h3>
                        <p className="slider-text"></p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Silder
