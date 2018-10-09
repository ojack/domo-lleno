import React, { Component } from "react";
//import Link from "next/link";
import ImageContainer from "./ImageContainer.js"
//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class ImageGrid extends Component {
    render() {
        console.log('posts', this.props.posts)
    const posts = this.props.posts.map((post, index) => <ImageContainer post={post} index={index}/>)
        return (
            <div className="flex flex-wrap max-w-3xl items-center justify-center">
                {posts}
            </div>
        );
    }
}

export default ImageGrid;
