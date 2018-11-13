import React, { Component } from "react";
import Taller from "./Taller.js"
import CategoryTitle from "./CategoryTitle.js"
import { withRouter, Route, Link} from "react-router-dom";
import TallerPopup from './TallerPopup.js'
import TallerContainer from "./TallerContainer.js"

//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class Talleres extends Component {
    constructor() {
      super();
      this.state = {
        taller: null
      }
      this.closePopup = this.closePopup.bind(this)
    }

    selectTaller(taller) {
      this.setState({ taller: taller})
    }

    closePopup() {
      this.setState({ taller: null})
    }

    render() {
      const posts = this.props.posts.filter((post)=>post.acf.tipo==="Taller").map((post, index) =>
        <Link to={'/talleres/'+post.slug} className="md:w-1/3 sm:w-1/2 no-underline" key={'artista'+index}>
          <TallerContainer post={post}  index={index}/>
       </Link>)

       const conferencias = this.props.posts.filter((post)=>post.acf.tipo==="Conferencia").map((post, index) =>
         <Link to={'/talleres/'+post.slug} className="md:w-1/3 sm:w-1/2 no-underline" key={'artista'+index}>
           <TallerContainer post={post}  index={index}/>
        </Link>)

        const masterClass = this.props.posts.filter((post)=>post.acf.tipo==="MasterClass").map((post, index) =>
          <Link to={'/talleres/'+post.slug} className="md:w-1/3 sm:w-1/2 no-underline" key={'artista'+index}>
            <TallerContainer post={post}  index={index}/>
         </Link>)

        console.log('taller props', this.props)

        var popup = null
        // if(this.state.artista !== null) {
        //
        //   popup = <ArtistPopup post={this.props.posts[this.state.artista]} closePopup={this.closePopup}/>
        // }
        if (this.props.match.params.taller) {
          this.props.posts.forEach(post => {
            if(this.props.match.params.taller === post.slug) {
                popup = <TallerPopup post={post} closePopup={this.closePopup}/>
            }
          })
        }

        // <div className="flex flex-col-reverse max-w-3xl mb-10">
        //     {this.props.posts.map((post, index) => <Taller post={post} key={index} index={index}/>)}
        // </div>
        // <CategoryTitle title="Conferencias" />
        // <div className="flex flex-col-reverse max-w-3xl">
        //     {this.props.conferencias.map((post, index) => <Taller post={post} key={index} index={index}/>)}
        // </div>
        return (
          <div>
          <CategoryTitle title="Talleres" />
            <div className="flex flex-wrap max-w-3xl items-center justify-center">
              {posts}
            </div>
            <CategoryTitle title="MasterClass" />
            <div className="flex flex-wrap max-w-3xl items-center justify-center">
              {masterClass}
            </div>
          <CategoryTitle title="Conferencias" />
          <div className="flex flex-wrap max-w-3xl items-center justify-center">
            {conferencias}
          </div>
          {popup}
          </div>
        );
    }
}

export default withRouter(Talleres);
