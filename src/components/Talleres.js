import React, { Component } from "react";
import Taller from "./Taller.js"
import CategoryTitle from "./CategoryTitle.js"
import { withRouter, Route, Link} from "react-router-dom";
import TallerContainer from "./TallerContainer.js"

//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class Talleres extends Component {
    render() {
      const posts = this.props.posts.map((post, index) =>
        <Link to={'/artistas/'+post.slug} className="md:w-1/3 sm:w-1/2 no-underline" key={'artista'+index}>
          <TallerContainer post={post}  index={index}/>
       </Link>)

       const conferencias = this.props.conferencias.map((post, index) =>
         <Link to={'/artistas/'+post.slug} className="md:w-1/3 sm:w-1/2 no-underline" key={'artista'+index}>
           <TallerContainer post={post}  index={index}/>
        </Link>)
        console.log('taller props', this.props)

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
          <CategoryTitle title="Conferencias" />
          <div className="flex flex-wrap max-w-3xl items-center justify-center">
            {conferencias}
          </div>
          </div>
        );
    }
}

export default Talleres;
