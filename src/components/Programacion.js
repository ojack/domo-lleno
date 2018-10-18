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
                  <img className="flex-1 m-4 mb-12" src={post.acf.imagen.url} />
                ))}
                <img className="flex-1 max-w-md m-4 mb-10 mt-10" src='/static/images/programacion-fechas.png' />
            </div>
            </div>
        );
    }
}

export default Programacion;
