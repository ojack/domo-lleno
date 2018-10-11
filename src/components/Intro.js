import React, { Component } from 'react';
import AnimatedDome from "./AnimatedDome.js"
import { Link } from "react-router-dom"
import { Transition } from 'react-transition-group';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

//import './App.css';
// <AnimatedDome key="initial" domeState="closed">
// </AnimatedDome>
// <ReactCSSTransitionGroup
//   transitionName="example"
//   transitionEnterTimeout={500}
//   transitionAppear={true}
//   transitionAppearTimeout={2000}
//   transitionLeaveTimeout={300}>
//   </ReactCSSTransitionGroup>

class Intro extends Component {
  render() {
    return (

      <div className="container font-sans text-center text-white" key="intro">

        <Link to='/inicio'>
              <div className="fixed pin-t pin-l w-full h-full text-white">

                        <div key="title-text-23" className='cursor-pointer'>
                        <div
                          style={{
                            background: "url(/static/images/title-text-v2.png)",
                            width: '50%',
                            height: '250px',
                            minHeight: '100px',
                            minWidth: '300px',
                            position: "fixed",
                            right: "5%",
                            bottom: "20%",
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                          }}>
                          </div>
                            <div className="fixed pin-b pin-r mr-20 mb-16 text-xl font-menu cursor-pointer" style={{zIndex: 20}}>ENTRAR</div>

                            </div>

                  </div>
                  </Link>
                </div>


    );
  }
}

export default Intro;
