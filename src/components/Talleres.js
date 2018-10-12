import React, { Component } from "react";
import Taller from "./Taller.js"
import CategoryTitle from "./CategoryTitle.js"

//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class Talleres extends Component {
    render() {
        return (
          <div>
          <CategoryTitle title="Talleres y Conferencias" />

            <div className="flex flex-col-reverse max-w-3xl">
                {this.props.posts.map((post, index) => <Taller post={post} key={index} index={index}/>)}
            </div>
              </div>
        );
    }
}

export default Talleres;
