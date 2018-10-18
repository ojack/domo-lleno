import React, { Component } from "react";
//import Link from "next/link";
//import fetch from "isomorphic-unfetch";
//import Error from "next/error";
import TextElement from "./TextElement.js"
//import PageWrapper from "../components/PageWrapper.js";
//import { Config } from "../config.js";
//import { Title } from "../style-config.js";

class Inicio extends Component {
    render() {
      console.log('props',this.props)
        let TitleClass = 'font-menu text-left uppercase mb-2 text-3xl whitespace-no-wrap mt-16 p-6 pl-3'

        // <div className="flex flex-row-reverse">
        //   {this.props.escenarios.map((escenario) => <div>
        //     <div className={TitleClass} dangerouslySetInnerHTML={{__html: escenario.title.rendered}}></div>
        //   </div>)}
        // </div>


        return (
          <div className="p-3">
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
            <div>
            <div className={TitleClass}> Escenarios</div>

              <div className="flex flex-col-reverse md:flex-row-reverse max-w-3xl">
                  {this.props.escenarios.map((post, index) =>
                    //if(post.acf && post.acf.imagen) {
                    //  console.log('img is', post.acf)
                      (
                        <div className="flex-1 p-4">
                          <div className="flex-1" style={{
                            background: 'url('+ post.acf.imagen.sizes['medium_large'] + ')',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right top',
                            minHeight: '300px'
                          }}>
                          </div>
                          <div
                              className="h-2 mt-5 mr-6"
                              style={{
                                backgroundImage: "url(/static/images/underline.png)",
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100px',
                                width: '100px'
                              }}
                          ></div>
                          <div className="font-menu mt-2 text-lg text-left"> {post.title.rendered}</div>
                        </div>
                      )
                  )
                  }
              </div>
            </div>
          </div>
        );
    }
}

export default Inicio;
