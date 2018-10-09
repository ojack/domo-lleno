import React, { Component } from "react";

let TitleClass = 'font-menu mt-20 uppercase mb-16 text-3xl'

class Title extends Component {
  constructor() {
      super();
  }

  render() {

      TitleClass += ' text-'
      TitleClass += this.props.align

    return <h1 className={TitleClass}>{this.props.title}</h1>
  }



}

export default Title;
