import React, { Component } from "react";
//import Title from './Title.js'

let TitleClass = 'font-menu mt-20 uppercase mb-12 text-3xl'

class CategoryTitle extends Component {
  constructor() {
      super();
  }

  render() {
    var categoryText
    console.log(this.props)
    if (this.props.texto) {
      categoryText = <div className="text-left max-w_sm m-4 lg:max-w-md lg:ml-128 font-hairline leading-loose lg:-mt-4">{this.props.texto}</div>
    }
    return (
        <div className="inline-block m-4 mb-20">
          <div className="inline-block">
            <h1 className={TitleClass} dangerouslySetInnerHTML={{__html: this.props.title}}></h1>
            <div
                className="w-full h-2"
                style={{
                  backgroundImage: "url(/static/images/underline.png)",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100px'
                }}
            >
            </div>
          </div>
          {categoryText}
        </div>
     )
  }



}

export default CategoryTitle;
