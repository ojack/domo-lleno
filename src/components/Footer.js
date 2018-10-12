//import Link from "next/link";
import React, { Component } from "react";


const Footer = props => {
    console.log('footer props!', props)
    return (
      <div className="flex-1 text-left mt-24 pt-20 text-right flex flex-col mb-24 p-4">
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
              {props.organizadores.map((post, index) => (
                <a href={post.acf.url} target="_blank" className="flex-1 m-5" style={{
                  background: 'url('+ post.acf.logo.sizes.medium + ')',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                   minHeight: '120px',
                   minWidth: '120px',
                  // maxHeight: '100px',
                  // maxWidth: '240px',
                }}>
                </a>
              ))}
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
            <div className="flex-initial text-left text-xl mt-8 ml-8"> domolleno@gmail.com </div>
          </div>
      </div>
    )
}

export default Footer;
