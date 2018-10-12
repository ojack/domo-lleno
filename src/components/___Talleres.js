import React, { Component } from "react";
//import Link from "next/link";
import ImageContainer from "./ImageContainer.js"
import CategoryTitle from "./CategoryTitle.js"
import ArtistPopup from './ArtistPopup.js'
//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class Talleres extends Component {
    constructor() {
        super();
        this.state = {
          artista: null
        }
        this.closePopup = this.closePopup.bind(this)
        //this.selectArtista = this.selectArtista.bind(this)
    }

    selectArtista(artista) {
      this.setState({ artista: artista})
    }

    closePopup() {
      this.setState({ artista: null})
    }
    render() {
        console.log('posts', this.props.posts)
        var self = this
        const posts = this.props.posts.map((post, index) => <div className="md:w-1/3 sm:w-1/2" onClick={this.selectArtista.bind(this, index)}><ImageContainer post={post}  index={index}/></div>)

        var popup = null
        if(this.state.artista !== null) {
          popup = <ArtistPopup post={this.props.posts[this.state.artista]} closePopup={this.closePopup}/>
        }
        return (
          <div>
          <CategoryTitle title="Talleres y Conferencias" />
            <div className="flex flex-wrap max-w-3xl items-center justify-center">
                {posts}
            </div>
            {popup}
          </div>
        );
    }
}

export default Talleres;
