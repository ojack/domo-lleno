//import Link from "next/link";
import React, { Component } from "react";
import Line from './../images/footer-underline.png'


const Footer = props => {
    console.log('fline', Line)
    return (
      <div className="flex-1 text-left mt-24 pt-20 text-right flex flex-col mb-24 p-4">
          <div
              className="mt-3 mr-6 mb-24"
              style={{
                backgroundImage: 'url('+Line+')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                height: '0.5px'
              }}
          ></div>
          <div className="flex flex-col md:flex-row" >
            <div className="font-menu self-start mr-8 ml-4 text-left pt-4" style={{width: '300px'}}>
              <div>Organizadores</div>
              <div className="mt-4" style={{
                height: '1px',
                backgroundColor: '#666',
                width: '100px'
              }}></div>
            </div>
            <div className="flex flex-1 flex-row-reverse items-center flex-wrap">
              {props.organizadores.map((post, index) => {
                var size = "80%"
                if(index == 0) {
                  size = "95%"
                } else if (index === props.organizadores.length - 1) {
                  size = "auto 80%"
                }

                return  (<a href={post.acf.url} target="_blank" className="flex-1 m-1" key={"logo"+index} style={{
                  background: 'url('+ post.acf.logo.sizes.medium + ')',
                  backgroundSize: size,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                   minHeight: '120px',
                   minWidth: '120px',
                  // maxHeight: '100px',
                  // maxWidth: '240px',
                }}>
                </a>)
              })}
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-12">
            <div className="font-menu self-start mr-8 ml-4 text-left pt-4" style={{width: '300px'}}>
              <div>Contacto</div>
              <div className="mt-4" style={{
                height: '1px',
                backgroundColor: '#666',
                width: '100px'
              }}></div>
            </div>
            <a className="flex-initial text-left text-xl mt-8 ml-8" href="mailto:domolleno@gmail.com"> domolleno@gmail.com </a>
          </div>
      </div>
    )
}

export default Footer;
