import React, { Component } from "react";
//import Link from "next/link";

//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class TallerContainer extends Component {
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
            var post = this.props.post
          //  console.log("RENDERINF", post)
            var containerClass = "w-100 cursor-pointer artista-container"


            var background = post.acf.image.sizes?'url('+post.acf.image.sizes.large+')':'#222'
            var hoverClass = "w-full h-full bg-black inline-block artista"
            hoverClass += " hover"
            if(this.state.hover === true){
              containerClass += " hover"
              // hoverClass += " hover"
            } else {
            //  hoverClass += " hidden"
            }

            return (  <div className={containerClass} key={this.props.index}>

                        <div className="" style={{
                          background: background,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          minWidth: '300px',
                          height: '300px'
                        }}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        >
                          <div className={hoverClass} style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)'
                          }}>
                              <div className="p-10 pin-b mt-20 text-left w-100 uppercase pin-l pb-8 text-md">
                                  <h3 >{post.title.rendered}</h3>
                                  <h4 className="text-sm pt-3">{"»  " + post.acf.artista}</h4>
                                  <p className="text-sm pt-3 normal-case">{"»  " + post.acf.dia}. {post.acf.horas}. {post.acf.lugar}</p>


                              </div>
                                <div className="w-1/2 h-1/2 mb-2 bg-white pin-b pin-l" style={{height: '0.5px'}}></div>
                            </div>
                          </div>


                </div>
            )
    }
}

export default TallerContainer;
