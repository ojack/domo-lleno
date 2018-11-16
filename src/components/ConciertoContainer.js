import React, { Component } from "react";
//import Link from "next/link";

//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class ConciertoContainer extends Component {
    constructor(props) {
      super(props)
      this.state = { hover: false }
      this.handleMouseEnter = this.handleMouseEnter.bind(this)
      this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleMouseEnter() {
      this.setState({hover: true})
    }

    handleMouseLeave() {
      this.setState({hover: false})
    }
    render() {
        console.log('taller', post)
            var post = this.props.post
          //  console.log("RENDERINF", post)
            var containerClass = "w-50 cursor-pointer taller-container m-10 mb-6 mt-0"


            var background = post.acf.image.sizes?'url('+post.acf.image.sizes.large+')':'#222'
          //  var hoverClass = "w-full h-full bg-black inline-block taller"
            var hoverClass = "taller-details"
          //  hoverClass += " hover"
            if(this.state.hover === true){
              containerClass += " hover"
              hoverClass += " hover"
            }

            // <div className={hoverClass} style={{
            //   backgroundColor: 'rgba(0, 0, 0, 0.0)'
            // }}>
            //
            // </div>
            //<div className="w-1/2 h-1/2 mb-6 mt-6 bg-white pin-b pin-l" style={{height: '0.5px'}}></div>
            return (  <div className={containerClass} key={this.props.index}>

                        <div className="w-50" style={{
                          background: background,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          minWidth: '300px',
                          height: '600px'
                        }}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        >
                          </div>






                </div>
            )
    }
}

export default ConciertoContainer;
