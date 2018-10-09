import React, { Component } from "react";
import Dome from './3d/dome.js'

class AnimatedDome extends Component {
    constructor() {
        super();
        this.dome = null
    }

    componentDidMount () {
      console.log("MOUNTED DOME")
      this.dome = Dome(this.threeRootElement)
      this.dome.triggerAnimation(5, this.props.domeState)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('comp did update', prevProps, this.props)
      if(prevProps.domeState !== this.props.domeState) {
        this.dome.triggerAnimation(5, this.props.domeState)
      }
    }

    render() {

        return (
            <div className="fixed pin-t pin-l w-full h-full" style={{zIndex:0}} ref={element => this.threeRootElement = element} />
        );
    }
}

export default AnimatedDome;
