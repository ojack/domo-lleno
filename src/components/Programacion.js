import React, { Component } from "react";
import CategoryTitle from "./CategoryTitle.js"

//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class Programacion extends Component {
    render() {
      console.log('programacion', this.props.posts)
        return (
          <div>
          <CategoryTitle title="Programación" />
            <div className="flex flex-col-reverse max-w-3xl items-center text-center">
                {this.props.posts.map((post, index) => (
                  <img className="flex-1 m-4 mt-0 mb-0" src={post.acf.imagen.url} />
                ))}
                <img className="m-0 w-full max-w-lg mb-0 mt-0" src='/static/images/programacion-fechas.png' />
            </div>
            </div>
        );
    }
}

export default Programacion;
