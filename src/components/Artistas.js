import React, { Component } from "react";
//import Link from "next/link";
import ImageContainer from "./ImageContainer.js"
import CategoryTitle from "./CategoryTitle.js"
import ArtistPopup from './ArtistPopup.js'
import { withRouter, Route, Link} from "react-router-dom";

//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class Artistas extends Component {
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
        console.log('artistas props', this.props)
        var self = this
        const posts = this.props.posts.map((post, index) =>
          <Link to={'/artistas/'+post.slug} className="md:w-1/3 sm:w-1/2 no-underline" key={'artista'+index}>
            <ImageContainer post={post}  index={index}/>
         </Link>)

         const ganadores = this.props.ganadores.map((post, index) =>{
           post.acf.pais = post.acf.nombre_ganador
           post.acf.descripcion = post.content.rendered
           return <Link to={'/artistas/'+post.slug} className="md:w-1/3 sm:w-1/2 no-underline" key={'artista'+index}>
             <ImageContainer post={post}  index={index}/>
          </Link>
      }  )

        var popup = null
        // if(this.state.artista !== null) {
        //
        //   popup = <ArtistPopup post={this.props.posts[this.state.artista]} closePopup={this.closePopup}/>
        // }
        if (this.props.match.params.artista) {
          this.props.posts.forEach(post => {
            if(this.props.match.params.artista === post.slug) {
                popup = <ArtistPopup post={post} closePopup={this.closePopup}/>
            }
          })
          this.props.ganadores.forEach(post => {
            if(this.props.match.params.artista === post.slug) {
                popup = <ArtistPopup post={post} closePopup={this.closePopup}/>
            }
          })
        }
        return (
          <div>
          <CategoryTitle title="Artistas Invitados" />
            <div className="flex flex-wrap max-w-3xl items-center justify-center mb-20">
                {posts}
            </div>
            <CategoryTitle title="GANADORES BECA DE CREACIÓN VIDEOARTE PARA DOMO" />
            <div className="flex flex-wrap max-w-3xl items-center justify-center">
                {ganadores}
            </div>
            {popup}
          </div>
        );
    }
}

export default withRouter(Artistas);
