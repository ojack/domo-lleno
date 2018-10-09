//import Header from "./Header";

import React, { Component } from "react";
import { withRouter} from "react-router-dom";

import AnimatedDome from "./AnimatedDome.js"
//   <AnimatedDome key="initial" domeState="open" />
  // <Header />
class Wrapper extends Component {
  constructor(props) {
   super(props);

  //Here ya go
  console.log('histore', this.props.history.location.pathname)
    this.state = {
      domeState: this.getDomeState(this.props.history.location.pathname)
    }
   this.props.history.listen((location, action) => {
     this.setState({domeState: this.getDomeState(location.pathname)})
     console.log("on route change", location.pathname);
   });
 }

  getDomeState(path) {
    if(path==='/') return 'closed'
    return 'open'
  }

  render(){
    return (
    <div className="container font-sans text-center text-white">
        <AnimatedDome key="initial" domeState={this.state.domeState} />
          {this.props.children}
      </div>
    )
  }
}

export default withRouter(Wrapper);
