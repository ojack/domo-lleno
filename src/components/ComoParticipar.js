import React, { Component } from "react";

import TextElement from "./TextElement.js"
//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class ComoParticipar extends Component {
    render() {
        return (
            <div className="flex flex-col-reverse max-w-3xl pt-12">
                {this.props.posts.map((post, index) => {
                  if(post.acf && post.acf.imagen) {
                  //  console.log('img is', post.acf)
                    return <img className="m-12" key={index} src={post.acf.imagen.sizes.large} />
                  } else {
                    return <TextElement post={post} key={index} index={index}/>
                  }
                })
                }
            </div>
        );
    }
}

export default ComoParticipar;
