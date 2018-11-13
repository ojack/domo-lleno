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
            var containerClass = "w-100 cursor-pointer taller-container m-10"


            var background = post.acf.image.sizes?'url('+post.acf.image.sizes.large+')':'#222'
            var hoverClass = "w-full h-full bg-black inline-block taller"
            hoverClass += " hover"
            if(this.state.hover === true){
              containerClass += " hover"
              // hoverClass += " hover"
            } else {
            //  hoverClass += " hidden"
            }

            // <div className={hoverClass} style={{
            //   backgroundColor: 'rgba(0, 0, 0, 0.0)'
            // }}>
            //
            // </div>
            //<div className="w-1/2 h-1/2 mb-6 mt-6 bg-white pin-b pin-l" style={{height: '0.5px'}}></div>
            return (  <div className={containerClass} key={this.props.index}>

                        <div className="" style={{
                          background: background,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          // minWidth: '300px',
                          height: '200px'
                        }}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        >
                          </div>


                          <div className="pl-0 mt-4 text-left w-100 uppercase pb-8 text-md">
                              <h3 className="font-menu">{post.title.rendered}</h3>
                              <h4 className="text-sm pt-3">{"»    " + post.acf.artista}</h4>
                              {post.acf.dia? <p className="text-sm">{"» " + '  '+ post.acf.dia}. {post.acf.lugar}</p> : ''}

                          </div>



                </div>
            )
    }
}

export default TallerContainer;
