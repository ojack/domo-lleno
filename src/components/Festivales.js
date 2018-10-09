import React, { Component } from "react";
import Festival from "./Festival.js"
import CategoryTitle from "./CategoryTitle.js"

//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class Festivales extends Component {
    render() {
        return (
          <div>
          <CategoryTitle title="Festivales Invitados" />

            <div className="flex flex-col max-w-3xl">
                {this.props.posts.map((post, index) => <Festival post={post} key={index} index={index}/>)}
            </div>
              </div>
        );
    }
}

export default Festivales;
