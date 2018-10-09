//import Header from "./Header";
import Footer from "./Footer";
import React, { Component } from "react";
import Menu from './Menu.js'
import AnimatedDome from "./AnimatedDome.js"
//   <AnimatedDome key="initial" domeState="open" />
  // <Header />
const Layout = props => (
    <div className="text-white w-full font-sans text-center flex flex-col content-center"
        style={{
          zIndex:30,
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}>

        <div className="max-w-3xl m-auto" >
          <Menu />
          {props.children}
          <Footer organizadores={props.organizadores}/>
        </div>
    </div>
);

export default Layout;
