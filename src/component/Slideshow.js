import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Archive from './Archive.jsx';
import Baigelman from './Baigelman.js';
import classNames from 'classnames';
const routes = [
    { component: Baigelman, path: "/baigelman-family" },
    {
        component: Archive,
        path: `/archive`
    },

];

class Slideshow extends React.Component {
    constructor(props) {
        super(props);

        this.IMAGE_PARTS = 4;

        this.changeTO = null;
        this.AUTOCHANGE_TIME = 4000;

        this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }

  

    render() {
        const { activeSlide, prevSlide, sliderReady } = this.state;
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)}>
                <Switch>
                    {routes.map((route, i) => (
                        <Route
                            path={route.path}
                            key={i}
                            exact
                            render={() => {
                                return <route.component />;
                            }}
                        />
                    ))}
                    <div className={classNames('slider', { 's--ready': sliderReady })}>
                        <p className="slider__top-heading"></p>
                        <div className="slider__slides">
                            {this.props.slides.map((slide, index) => (

                                <div
                                    className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
                                    key={slide.city}
                                >
                                    <div className="slider__slide-content">

                                        <h2 className="slider__slide-heading">
                                            {slide.city.split('').map(l => <span>{l}</span>)}
                                        </h2>
                                        <Link className='slider-link' to={slide.path}>
                                            <p className="slider__slide-readmore">Explore</p>
                                        </Link>
                                    </div>
                                    <div className="slider__slide-parts">
                                        {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                                            <div className="slider__slide-part" key={i}>
                                                <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>


                            ))}
                        </div>
                        <div className="slider__control" onClick={() => this.changeSlides(-1)} />
                        <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
                    </div>
                </Switch>
            </Router>
        );
    }
}
export default Slideshow;