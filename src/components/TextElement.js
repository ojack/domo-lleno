import React, { Component } from "react";
// import Link from "next/link";
// import fetch from "isomorphic-unfetch";
// import Error from "next/error";
//import Title from './Title.js'
//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class TextElement extends Component {
    render() {
        console.log('TextElement', this.props)
        let TitleClass = 'font-menu -mt-20 uppercase mb-16 text-2xl sm:text-3xl whitespace-no-wrap'

        var image = this.props.post.acf.imagen ? 'url('+ this.props.post.acf.imagen.sizes.large +')' : '#222'
        var containerClass = "text-sm text-left flex-1 flex flex-col md:flex-row block m-6 font-hairline leading-loose mt-20 p-2 sm:p-8"
        console.log("POST", this.props.post.acf.text_alignment)
        if(this.props.post.acf && this.props.post.acf.text_alignment) {

          if(this.props.post.acf.text_alignment === "Center") {
            containerClass += " justify-center"
          } else if(this.props.post.acf.text_alignment === "Left"){
            containerClass += " justify-start"
          } else {
            containerClass += " justify-end"
          }
        }



        return (

              <div className={containerClass}>
                    <div
                        className="h-2 mt-3 mr-6"
                        style={{
                          backgroundImage: "url(/static/images/underline.png)",
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '100px',
                          width: '100px'
                        }}
                    >
                        <div className={TitleClass} dangerouslySetInnerHTML={{__html: this.props.post.title.rendered}}></div>
                    </div>
                    <div className=' mb-6 max-w-md' dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}}></div>
                </div>



        );
    }
}

export default TextElement;
